"use client";
import React from "react";
import DataTable from "@/components/Table/DataTable";
import DataTableSkeleton from "@/components/Table/DataTableSkeleton";
import useFetchSifaris from "../../../system-configuration/sifaris/utils/api/useFetchSifaris";
import Link from "next/link";

const SifarisList = () => {
  const sifarisTypes = useFetchSifaris();

  if (sifarisTypes.isPending) {
    return <><DataTableSkeleton /></>;
  }

  if (sifarisTypes.isError) {
    const error = sifarisTypes.error;
    if (error.response) {
      return (
        <div>error message from the server: {error.response.data.message}</div>
      );
    } else if (error.request) {
      return <div>something went wrong try again</div>;
    } else {
      return <div>something went wrong try again</div>;
    }
  }

  //   const transformedData = sifarisTypes.data.map(sifaris => {
  //     return {id: sifaris.id, sifarisName: sifaris.name}
  //   });

  return (<>

    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)] pt-6 gap-8">
      {sifarisTypes.data.map(sifaris => {
        return <React.Fragment key={sifaris.id}>
          {/* <!-- Remove className [ h-24 ] when adding a card block -->
            <!-- Remove className [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
          {/* <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div> */}
          {/* <!-- Remove className [ h-24 ] when adding a card block -->
            <!-- Remove className [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
          {/* <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div> */}
          {/* <!-- Remove className [ h-24 ] when adding a card block -->
            <!-- Remove className [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
          <Link href={`/dashboard/admin/dashboard/sifaris/add-new/${sifaris.id}`} key={sifaris.id} className="rounded flex items-center justify-center cursor-pointer border-gray-300 dark:border-gray-700 border-dashed border-2 h-24">
            <h1>{sifaris.name}</h1>
          </Link>
        </React.Fragment>
      })
      }
    </div>
  </>)
};

export default SifarisList;
