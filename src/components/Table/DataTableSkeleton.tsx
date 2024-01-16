import { Skeleton } from "../Skeleton";

const DataTableSkeleton = () => {
  return (
    <>
      <Skeleton className="h-20 px-6 grid-cols-[1fr_1fr_1fr_1fr_max-content] place-items-center grid bg-[#fff]">
        <Skeleton className="h-10 w-40 bg-[#ACB1C6]" />
        <Skeleton className="h-10 w-40 bg-[#ACB1C6]" />
        <Skeleton className="h-10 w-40 bg-[#ACB1C6]" />
        <Skeleton className="h-10 w-40 bg-[#ACB1C6]" />
        <div className="flex items-center gap-8">
          <Skeleton className="h-10 w-20 bg-[#ACB1C6]" />
          <Skeleton className="h-10 w-20 bg-[#ACB1C6]" />
        </div>
      </Skeleton>
      <Skeleton className="bg-white min-h-[calc(100vh-16rem)] mt-5" />
    </>
  );
};

export default DataTableSkeleton;
