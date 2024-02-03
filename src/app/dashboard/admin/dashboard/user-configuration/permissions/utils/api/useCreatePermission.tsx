import authHttpClient from '@/lib/utils/HttpClient/axiosPrivate';
import { PermissionFormType, PostPermissionSuccessResponse } from '../../types';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const postPermission = async ({ parent_id, guard_name, permission_name }: PermissionFormType) => {
    const response = await authHttpClient.post<PostPermissionSuccessResponse>(
        `/api/permissions`, { parent_id, guard_name, permission_name },
    );
    return response.data;
}



const usePostPermission = ({
    onClose, reset,
}: {
    onClose: () => void;
    reset: UseFormReset<PermissionFormType>
}) => {



    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["post", "permission"],
        // mutation function
        mutationFn: postPermission,

        onSuccess: () => {
            // invalidates fetch Permission query
            queryClient.invalidateQueries({ queryKey: ["fetch", "permissions"] });
            onClose();
            reset();
            toast.success("Successfully added Permission!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add Permission", {
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
export default usePostPermission;