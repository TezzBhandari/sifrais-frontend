"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { DocumentFormType, PostDocumentSuccessResponse, Document, EditDocumentSuccessResponse } from "../../types";
import { UseFormReset } from "react-hook-form";


// delete query function
const editDocument = async ({ id, doc_name }: Document) => {
    const response = await authHttpClient.put<EditDocumentSuccessResponse>(
        `/api/documents/${id}`, { doc_name: doc_name }
    );
    return response.data;
};


// delete office custom hook
const useEditDocument = ({
    onClose, reset,
}: {
    onClose: () => void;
    reset: UseFormReset<DocumentFormType>
}) => {
    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["update", "document"],
        // mutation function
        mutationFn: editDocument,

        // on edit success callback
        // invalidates fetch offices query
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetch", "documents"] });
            onClose();
            reset();
            toast.success("Successfully updated document!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to update document", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // runs of both success and error response
        // closes the modal
        onSettled(data, error, variables, context) {
            onClose();
        },
    });
};

export default useEditDocument;
