import PersonalInformation from "./PersonalInformation";
import { Gender } from "../utils/api/QueryGenders";
import { Province } from "../utils/api/QueryProvinces";
import { District } from "../utils/api/QueryDistricts";
import { LocalLevel } from "../utils/api/QueryLocalLevels";
import PermanentDetails from "./PermanentDetails";
import OfficeDetails from "./OfficeDetails";

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
  return (
    <form>
      {/* PERSONAL INFORMATION FORM SECTION  */}
      <PersonalInformation gender={genders} />
      {/* PERMANENT DETAILS FORM SECTION  */}
      <PermanentDetails
        districts={districts}
        localLevels={localLevels}
        provinces={provinces}
      />
      {/* OFFICE DETAILS DETAILS FORM SECTION  */}
      <OfficeDetails genders={genders} />

      {/* SUBMIT AND CANCEL BUTTON SECTION  */}
      <div className="Form-Button-Section flex items-center space-x-3 mb-6 justify-end">
        {/* CANCEL BUTTON  */}
        <button className="bg-transparent text-[#002147] rounded-md border border-[#002147] hover:border-blue-300 hover:bg-blue-300 px-8 py-3">
          Cancel
        </button>
        {/* SUBMIT BUTTON  */}
        <button
          type="submit"
          className="bg-[#002147] text-white rounded-md border border-slate-300 hover:border-blue-300 hover:bg-blue-300 px-8 py-3"
          // aria-disabled={isSubmitting ? true : false}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AdminUserForm;
