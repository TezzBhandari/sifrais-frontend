'use client'
import PersonalInformation from "./PersonalInformation";
import { Gender } from "../utils/api/QueryGenders";
import { Province } from "../utils/api/QueryProvinces";
import { District } from "../utils/api/QueryDistricts";
import { LocalLevel } from "../utils/api/QueryLocalLevels";
import PermanentDetails from "./PermanentDetails";
import OfficeDetails from "./OfficeDetails";
import { FormProvider, useForm } from "react-hook-form";
import { AdminUserMutationSchema, AdminUserMutationType } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

interface AdminUserFormProps {
  genders: Array<Gender>;
  provinces: Array<Province>;
  districts: Array<District>;
  localLevels: Array<LocalLevel>;
}

const AdminUserForm: React.FC<AdminUserFormProps> = ({
  genders,
  provinces,
  districts,
  localLevels,
}) => {



  const adminUserForm = useForm<AdminUserMutationType>({
    resolver: zodResolver(AdminUserMutationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: ""
    }
  });

  return (
    <FormProvider {...adminUserForm}>
      <form onSubmit={adminUserForm.handleSubmit((data) => {
        alert('hello')
        alert(JSON.stringify(data))
      })}>

        {/* PERSONAL INFORMATION FORM SECTION  */}
        <PersonalInformation gender={genders} />
        {/* PERMANENT DETAILS FORM SECTION  */}
        {/* <PermanentDetails
          districts={districts}
          localLevels={localLevels}
          provinces={provinces}
        /> */}
        {/* OFFICE DETAILS DETAILS FORM SECTION  */}
        <OfficeDetails />

        {/* SUBMIT AND CANCEL BUTTON SECTION  */}
        <div className="Form-Button-Section flex items-center space-x-3 mb-6 justify-end">
          {/* CANCEL BUTTON  */}
          <button className="bg-transparent text-[#002147] rounded-md border border-[#002147] hover:border-blue-300 hover:bg-blue-300 px-8 py-3">
            Cancel
          </button>
          {/* SUBMIT BUTTON  */}
          <button
            type="submit"
            className="bg-[#002147] text-white rounded-md border border-slate-300 hover:border-blue-300 hover:bg-blue-900 px-8 py-3"
          // aria-disabled={isSubmitting ? true : false}
          >
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AdminUserForm;
