import DynamicRouteHeader from "@/components/DynamicRouteHeader";
import UserForm from "./components/UserForm";

const page = () => {
  return (
    <div className="bg-[#dde4ee] min-h-[calc(100vh-6rem)] border border-red-400 overflow-hidden px-4 py-6">
      <div className="bg-[#fff] rounded-[20px] p-6 container mx-auto">
        <DynamicRouteHeader pageHeader={"User"} delimeter={">"} />
        {/* Personal Information  */}
        <UserForm />
      </div>
    </div>
  );
};

export default page;
