"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { OfficeType, OfficeTypeForm, PostOfficeTypeSuccessResponse } from "../../types";
import { StringOrTemplateHeader } from "@tanstack/react-table";
import { UseFormReset, FieldValues } from "react-hook-form";


// delete query function
const postOfficeType = async ({ office_type }: OfficeTypeForm) => {
    const response = await authHttpClient.post<PostOfficeTypeSuccessResponse>(
        `/api/officetypes`, { office_type: office_type },
    );
    return response.data;
};


// delete office custom hook
const usePostOfficeType = ({
    onClose, reset
}: {
    onClose: () => void;
    reset: UseFormReset<OfficeTypeForm>
}) => {
    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["post", "officeType"],
        // mutation function
        mutationFn: postOfficeType,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetch", "officeType"] });
            onClose();
            reset();
            toast.success("Successfully added office type!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add office type. Try again!", {
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

export default usePostOfficeType;
