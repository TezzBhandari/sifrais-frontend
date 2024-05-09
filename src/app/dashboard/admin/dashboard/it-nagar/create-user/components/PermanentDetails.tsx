"use client";
import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { LocalLevel } from "../utils/api/QueryLocalLevels";
import { Province } from "../utils/api/QueryProvinces";
import { InputField } from "@/components/InputField";
import { District } from "../utils/api/QueryDistricts";
import { AdminUserMutationType } from "../types";

interface PermanentDetailsProps {
  districts: Array<District>;
  localLevels: Array<LocalLevel>;
  provinces: Array<Province>;
}

const PermanentDetails: React.FC<PermanentDetailsProps> = ({
  districts,
  provinces,
  localLevels,
}) => {
  const { register, control, setValue, formState: { errors }, watch } =
    useFormContext<AdminUserMutationType>();
  const [districtsState, setDistrictsState] = useState(districts);
  const [localLevelState, setLocalLevelState] = useState(localLevels);

  const watchProvince = watch("province");
  const watchDisitrict = watch("district");

  // filtering districts based on province selection
  useEffect(() => {
    setValue("district", "");
    setDistrictsState(() => {
      const newDistrictState = districts.filter(
        (district) => district.province.id.toString() === watchProvince
      );
      return newDistrictState.length !== 0 ? newDistrictState : districts;
    });
  }, [watchProvince, setValue, districts]);

  // local level based on province
  useEffect(() => {
    setValue("localLevel", "");
    setLocalLevelState(() => {
      const newLocalLevelsState = localLevels.filter(
        (localLevel) => localLevel.province.id.toString() === watchProvince
      );
      return newLocalLevelsState.length !== 0
        ? newLocalLevelsState
        : localLevels;
    });
  }, [watchProvince, setValue, localLevels]);

  // local level based on districts
  useEffect(() => {
    setValue("localLevel", "");
    setLocalLevelState((prevLocalLevels) => {
      const newLocalLevelsState: Array<LocalLevel> = prevLocalLevels.filter(
        (localLevel) => localLevel.district.id.toString() === watchDisitrict
      );
      return newLocalLevelsState.length !== 0
        ? newLocalLevelsState
        : prevLocalLevels;
    });
  }, [watchDisitrict, setValue]);

  return (
    <div>
      <div className="Permanent-Details-Input-Section px-7 py-10">
        <div className="form-sub-heading-section">
          <h2 className="text-xl font-bold leading-5 capitalize text-[#1D1C2B]">
            Permanent Details
          </h2>
        </div>
        <div className="flex gap-10 mt-7">
          <div className="Permanent-Details-Left-Section flex flex-col gap-3 flex-1">
            {/* PROVINCE  */}
            <div>
              <InputLabel htmlFor="" labelName="province" />
              <div>
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<Province>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.province_np}
                      valueExtractor={(item) => item.id.toString()}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id.toString() === value)
                          ?.province_np || "select a province"
                      }
                      options={provinces}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"province"}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.province !== undefined
                    ? errors.province.message
                    : null}
                </span>
              </div>
            </div>
            {/* LOCAL LEVEL   */}

            <div>
              <InputLabel htmlFor="" labelName="local level" />
              <div>
                <Controller
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <ListBox<LocalLevel>
                      className="shadow-none h-11"
                      labelExtractor={(item) => item.lgname_np}
                      valueExtractor={(item) => item.id.toString()}
                      labelExtractorByValue={(value, options) =>
                        options.find((option) => option.id.toString() === value)
                          ?.lgname_np || "selct a local level"
                      }
                      options={localLevelState}
                      value={value}
                      onChange={onChange}
                      name={name}
                    />
                  )}
                  name={"localLevel"}
                />
                <span className="text-red-500 text-xs tracking-wide">
                  {errors.localLevel !== undefined
                    ? errors.localLevel.message
                    : null}
                </span>
              </div>
            </div>

          </div>
          <div className="Permanent-Details-Right-Section flex flex-col gap-3 flex-1">
            {/* DISTRICTS  */}
            <div>
              <InputLabel htmlFor="" labelName="district" />
              <Controller
                control={control}
                render={({ field: { name, onChange, value } }) => (
                  <ListBox<District>
                    className="shadow-none h-11"
                    labelExtractor={(item) => item.district_np}
                    valueExtractor={(item) => item.id.toString()}
                    labelExtractorByValue={(value, options) =>
                      options.find((option) => option.id.toString() === value)
                        ?.district_np || "select a district"
                    }
                    options={districtsState}
                    value={value}
                    onChange={onChange}
                    name={name}
                  />
                )}
                name={"district"}
              />
              <span className="text-red-500 text-xs tracking-wide">
                {errors.district !== undefined
                  ? errors.district.message
                  : null}
              </span>
            </div>
          </div>
          {/* Tole */}
          {/* <div>
            <InputLabel htmlFor="" labelName={"Tole"} />

            <InputField
              {...register("")}
              className="h-11"
            />
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default PermanentDetails;
