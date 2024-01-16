import { Skeleton } from "@/components/Skeleton";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <DataTableSkeleton />
    </>
  );
};

export default loading;
