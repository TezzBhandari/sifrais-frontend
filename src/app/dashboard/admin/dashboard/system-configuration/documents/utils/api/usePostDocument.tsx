"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { DocumentFormType, PostDocumentSuccessResponse } from "../../types";
import { UseFormReset } from "react-hook-form";


// delete query function
const postDocument = async ({ doc_name }: DocumentFormType) => {
    const response = await authHttpClient.post<PostDocumentSuccessResponse>(
        `/api/documents`, { doc_name: doc_name },
    );
    return response.data;
};


// delete office custom hook
const usePostDocument = ({
    onClose, reset,
}: {
    onClose: () => void;
    reset: UseFormReset<DocumentFormType>
}) => {
    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["post", "document"],
        // mutation function
        mutationFn: postDocument,
        // mutationFn: async () =>
        //     deleteOffice({ id: documentId }),
        // on delete success callback
        // invalidates fetch offices query
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetch", "documents"] });
            onClose();
            reset();
            toast.success("Successfully added document!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add document", {
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

export default usePostDocument;
