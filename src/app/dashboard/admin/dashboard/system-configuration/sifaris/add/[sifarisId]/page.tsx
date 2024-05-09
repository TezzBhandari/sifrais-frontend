import RenderField from "../components/RenderField";
import SifarisForm from "../components/SifarisForm";

const page = ({ params }: { params: { sifarisId: number } }) => {
  return (
    <div className="flex flex-col gap-2">
      <SifarisForm sifarisId={params.sifarisId} />
      {/* <RenderField /> */}
    </div>
  );
};

export default page;
