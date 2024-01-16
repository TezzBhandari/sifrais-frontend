import Image from "next/image";
import { OfficeType } from "../types";

import EditIcon from "../../../../../../../public/assets/logo/EditIcon.svg";
import DeleteIcon from "../../../../../../../public/assets/logo/DeleteIcon.svg";
import ViewIcon from "../../../../../../../public/assets/logo/ViewIcon.svg";

interface OfficeTypeRowActionsProps {
  officeType: OfficeType;
}

const OfficeTypeRowActions = ({ officeType }: OfficeTypeRowActionsProps) => {
  console.log(officeType);
  return (
    <div>
      <div className="flex items-center justify-start space-x-1">
        <span className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600">
          <Image src={ViewIcon} alt={"view Icon"} />
        </span>
        <span
          // onClick={() => {
          //   openModal(info.row.original);
          // }}
          className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600 "
        >
          <Image src={DeleteIcon} alt={"Delete Icon"} />
        </span>
        {/* <span
              onClick={() => {
                // console.log(info.table.getCoreRowModel().flatRows[3].original);
                handleEdit(info.row.original);
              }}
              className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600"
            >
              <MdModeEditOutline className="w-5 h-5" />
            </span> */}
        <span
          // onClick={() => {
          //   openDeleteCategoryModal({ category_id: info.row.original.id });
          //   // handleDelete(info.row.original);
          // }}
          className="cursor-pointer p-1 hover:bg-gray-600 rounded-md text-gray-600"
        >
          <Image src={EditIcon} alt={"edit Icon"} />
        </span>
      </div>
    </div>
  );
};

export default OfficeTypeRowActions;
