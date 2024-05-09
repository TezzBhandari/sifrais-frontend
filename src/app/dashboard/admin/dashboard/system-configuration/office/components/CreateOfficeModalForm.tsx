
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { OfficeFormSchema, OfficeFormType } from "../types";
import { InputField } from "@/components/InputField";
import ListBox from "@/components/ListBox";

import { Province } from "../../../it-nagar/create-user/utils/api/QueryProvinces";
import { useOfficeContext } from "@/providers/OfficeContextProvider";
import { LocalLevel } from "../../../it-nagar/create-user/utils/api/QueryLocalLevels";
import { District } from "../../../it-nagar/create-user/utils/api/QueryDistricts";
import { useEffect, useState } from "react";

// COMPONENT
const CreateOfficeModalForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  // getting provinces
  const { provinces, districts, localLevels } = useOfficeContext()


  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<OfficeFormType>({
    defaultValues: {
      office_address: "",
      office_email: "",
      office_name: "",
      office_phone: "",
      longitude: "",
      latitude: "",
    },
    resolver: zodResolver(OfficeFormSchema),
  });

  const [districtsState, setDistrictsState] = useState(districts);
  const [localLevelState, setLocalLevelState] = useState(localLevels);

  const watchProvince = watch("province_id");
  const watchDisitrict = watch("district_id");

  // filtering districts based on province selection
  useEffect(() => {
    setValue("district_id", -1);
    setDistrictsState(() => {
      const newDistrictState = districts.filter(
        (district) => district.province.id === watchProvince
      );
      return newDistrictState.length !== 0 ? newDistrictState : districts;
    });
  }, [watchProvince, setValue, districts]);

  // local level based on province
  useEffect(() => {
    setValue("lg_id", -1);
    setLocalLevelState(() => {
      const newLocalLevelsState = localLevels.filter(
        (localLevel) => localLevel.province.id === watchProvince
      );
      return newLocalLevelsState.length !== 0
        ? newLocalLevelsState
        : localLevels;
    });
  }, [watchProvince, setValue, localLevels]);

  // local level based on districts
  useEffect(() => {
    setValue("lg_id", -1);
    setLocalLevelState((prevLocalLevels) => {
      const newLocalLevelsState: Array<LocalLevel> = prevLocalLevels.filter(
        (localLevel) => localLevel.district.id === watchDisitrict
      );
      return newLocalLevelsState.length !== 0
        ? newLocalLevelsState
        : prevLocalLevels;
    });
  }, [watchDisitrict, setValue]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 border border-green-400 max-w-5xl overflow-x-hidden">
        {/* FORM HEADING  */}
        <div className="">
          <h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
            Create Office
          </h1>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            // TODO: IMPLEMENT POST FUNCTION
            alert(JSON.stringify(data))
          })}
          className="form"
        >

          <div className="form-content flex gap-6 flex-col mb-2">
            {/*  office name input field  */}

            {/* PROVINCE AND DISTRCTS ROW  */}
            <div className="flex gap-4">

              {/* PROVINCE  */}
              <div className="flex-1">
                <InputLabel htmlFor="" labelName="province" />
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<Province, number>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.province_np}
                      valueExtractor={(item) => item.id}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id === value)
                          ?.province_np || "select a province"
                      }
                      options={provinces}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"province_id"}
                />
              </div>
              {/* DISTRICT  */}
              <div className="flex-1">
                <InputLabel htmlFor="" labelName="district" />
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<District, number>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.district_np}
                      valueExtractor={(item) => item.id}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id === value)
                          ?.district_np || "select a district"
                      }
                      options={districtsState}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"district_id"}
                />
              </div>

            </div>

            <div className="flex gap-4">
              {/* Local level  */}
              <div className="flex-1">
                <InputLabel htmlFor="" labelName="Local Level" />
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<LocalLevel, number>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.lgname_np}
                      valueExtractor={(item) => item.id}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id === value)
                          ?.lgname_np || "select a local level"
                      }
                      options={localLevelState}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"lg_id"}
                />
              </div>

              <div className="flex-1">
                <InputLabel htmlFor="" labelName="Local Level" />
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<LocalLevel, number>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.lgname_np}
                      valueExtractor={(item) => item.id}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id === value)
                          ?.lgname_np || "select a local level"
                      }
                      options={localLevelState}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"lg_id"}
                />
              </div>
            </div>

            {/* // office name  */}
            <div className="flex gap-4">
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>

              {/* // office name  
            */}
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div>
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>

              {/* // office name  
            */}
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div>
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>

              {/* // office name  
            */}
              <div className="flex flex-col flex-1 gap-2">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div>
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>

              </div>
              {/* //just to make sure the first input take half of the width  */}
              <div className="flex-1 invisible" />
            </div>


            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>

              </div>
              {/* //just to make sure the first input take half of the width  */}
              <div className="flex-1 invisible" />
            </div><div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <InputLabel
                  className="font-normal text-sm not-italic leading-normal"
                  labelName={"office name"}
                  fieldRequired={true}
                />

                {/* input field + error message */}
                <div className="">
                  <InputField
                    placeholder="Enter Sifaris Type"
                    className="h-11 rounded-lg text-base font-normal"
                    {...register("office_name")}
                  />
                  <span className="text-red-500 text-xs tracking-wide">
                    {errors.office_name !== undefined
                      ? errors.office_name.message
                      : null}
                  </span>
                </div>

              </div>
              {/* //just to make sure the first input take half of the width  */}
              <div className="flex-1 invisible" />
            </div>

            {/* FORM SUBMIT OR CANCEL BUTTONS  */}
            <div className="flex gap-5">
              <button
                className=" flex-1 bg-transparent border-solid border border-[#002147] text-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg "
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  reset();
                }}
              >
                cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateOfficeModalForm;
