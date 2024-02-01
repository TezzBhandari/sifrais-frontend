import authHttpClient from '@/lib/utils/HttpClient/axiosPrivate';
import React from 'react'
import { DesignationFormType, PostDesignationSuccessResponse } from '../../types';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const postDesignation = async ({ designation }: DesignationFormType) => {
    const response = await authHttpClient.post<PostDesignationSuccessResponse>(
        `/api/designations`, { designation: designation },
    );
    return response.data;

}



const usePostDesignation = ({
    onClose, reset,
}: {
    onClose: () => void;
    reset: UseFormReset<DesignationFormType>
}) => {



    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["post", "designation"],
        // mutation function
        mutationFn: postDesignation,

        onSuccess: () => {
            // invalidates fetch designation query
            queryClient.invalidateQueries({ queryKey: ["fetch", "designations"] });
            onClose();
            reset();
            toast.success("Successfully added designation!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add designation", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // runs of both success and error response
        // closes the modal
        onSettled(data, error, variables, context) {
            // onClose();
        },
    });
}
export default usePostDesignation;