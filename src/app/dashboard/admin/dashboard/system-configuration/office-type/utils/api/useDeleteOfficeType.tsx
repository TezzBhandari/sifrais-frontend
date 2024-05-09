"use client";
import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

export type DeleteOfficeTypeSuccessResponse = {
  status: number;
  message: string;
};

const deleteResource = async ({
  id,
  abortController,
}: {
  id: number;
  abortController: AbortController;
}) => {
  const response = await authHttpClient.delete<DeleteOfficeTypeSuccessResponse>(
    `/api/officetypes/${id}`
  );
  return response.data;
};
const useDeleteOfficeType = ({
  officeTypeId,
  onClose,
  abortController,
}: {
  officeTypeId: number;
  onClose: () => void;
  abortController: AbortController;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      deleteResource({ id: officeTypeId, abortController }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch", "officeType"] });
      // onClose();
      toast.success("Successfully delete Office type !", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
    onError(error, variables, context) {
      // onClose();
      toast.error("Failed to delete office type", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
    onSettled(data, error, variables, context) {
      onClose();
    },
  });
};

export default useDeleteOfficeType;
