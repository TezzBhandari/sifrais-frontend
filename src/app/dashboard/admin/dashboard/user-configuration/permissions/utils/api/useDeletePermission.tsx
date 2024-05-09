"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { DeletePermissionSuccessResponse } from "../../types";


// delete query function
const deleteOffice = async ({ id }: { id: number }) => {
    const response = await authHttpClient.delete<DeletePermissionSuccessResponse>(
        `/api/permissions/${id}`
    );
    return response.data;
};


// delete office custom hook
const useDeletePermission = ({
    permissionId,
    onClose,
}: {
    permissionId: number;
    onClose: () => void;
}) => {
    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["delete", "permission"],
        // mutation function
        mutationFn: async () =>
            deleteOffice({ id: permissionId }),
        // on delete success callback
        // invalidates fetch offices query
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetch", "permissions"] });
            // onClose();
            toast.success("Successfully deleted permission!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to delete permission", {
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

export default useDeletePermission;
