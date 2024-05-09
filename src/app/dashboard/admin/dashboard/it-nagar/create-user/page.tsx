import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import AdminUserForm from "./components/AdminUserForm";
import FetchGender from "./utils/api/QueryGenders";
import { HttpMethod } from "@/lib/utils/requestHandler";
import FetchProvince from "./utils/api/QueryProvinces";
import FetchLocalLevel from "./utils/api/QueryLocalLevels";
import FetchDistrict from "./utils/api/QueryDistricts";
import AdminFormProvider from "@/providers/AdminFormProvider";

const page = async () => {
  // FETCH  GENDERS

  // const genderResponse = await FetchGender({
  //   url: "/api/genders",
  //   httpMethod: HttpMethod.GET,
  // });

  // // FETCH DISTRICTS
  // const districtsResponse = await FetchDistrict({
  //   url: "/api/districts",
  //   httpMethod: HttpMethod.GET,
  // });

  // // FETCH PROVINCES
  // const provincesResponse = await FetchProvince({
  //   url: "/api/provinces",
  //   httpMethod: HttpMethod.GET,
  // });
  // FETCH LOCAL LEVELS
  // const localLevelResponse = await FetchLocalLevel({
  //   httpMethod: HttpMethod.GET,
  //   url: "/api/llevels",
  // });

  const [
    genderResponse,
    districtsResponse,
    provincesResponse,
    localLevelResponse,
  ] = await Promise.all([
    FetchGender({
      url: "/api/genders",
      httpMethod: HttpMethod.GET,
    }),
    FetchDistrict({
      url: "/api/districts",
      httpMethod: HttpMethod.GET,
    }),
    FetchProvince({
      httpMethod: HttpMethod.GET,
      url: "/api/provinces",
    }),
    FetchLocalLevel({
      httpMethod: HttpMethod.GET,
      url: "/api/llevels",
    }),
  ]);

  if (genderResponse.code === "error") {
    return <div>failed to fetch genders: {genderResponse.error?.message}</div>;
  }
  if (districtsResponse.code === "error") {
    return (
      <div>failed to fetch genders: {districtsResponse.error?.message}</div>
    );
  }
  if (provincesResponse.code === "error") {
    return (
      <div>failed to fetch genders: {provincesResponse.error?.message}</div>
    );
  }
  if (localLevelResponse.code === "error") {
    return (
      <div>failed to fetch genders: {localLevelResponse.error?.message}</div>
    );
  }

  return (
    <div className="bg-[#fff] rounded-[20px] p-6 container">
      <DynamicRouteHeader pageHeader={"User"} delimeter={">"} />
      {/* <AdminFormProvider> */}
      <AdminUserForm
        genders={genderResponse.data.data}
        provinces={provincesResponse.data.data}
        districts={districtsResponse.data.data}
        localLevels={localLevelResponse.data.data}
      />
      {/* </AdminFormProvider> */}
    </div>
  );
};

export default page;
