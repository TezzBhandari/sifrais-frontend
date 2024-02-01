"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { Designation, DesignationFormType, UpdateDesignationSuccessResponse } from "../../types";
import { UseFormReset } from "react-hook-form";


// delete query function
const updateDesignation = async ({ id, designation }: Designation) => {
  const response = await authHttpClient.put<UpdateDesignationSuccessResponse>(
    `/api/designation/${id}`, { designation: designation }
  );
  return response.data;
};


// delete office custom hook
const useUpdateDesignation = ({
  onClose, reset,
}: {
  onClose: () => void;
  reset: UseFormReset<DesignationFormType>
  designation: Designation
}) => {
  // for invalidating fetch offices query
  const queryClient = useQueryClient();

  return useMutation({
    // mutation key 
    mutationKey: ["update", "designation"],
    // mutation function
    mutationFn: updateDesignation,

    // on edit success callback
    // invalidates fetch offices query
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch", "designations"] });
      onClose();
      reset();
      toast.success("Successfully updated designation!", {
        position: toast.POSITION.TOP_CENTER,
      });
    },

    // on delete errro callback
    // shows error messsage
    onError(error, variables, context) {
      // onClose();
      toast.error("Failed to update designation", {
        position: toast.POSITION.TOP_CENTER,
      });
    },

    // runs of both success and error response
    // closes the modal
    onSettled(data, error, variables, context) {
      // onClose();
    },
  });
};

export default useUpdateDesignation;
