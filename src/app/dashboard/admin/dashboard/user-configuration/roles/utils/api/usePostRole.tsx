import authHttpClient from '@/lib/utils/HttpClient/axiosPrivate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostRoleSuccessResponse, RoleFormType } from '../../types'
import { toast } from 'react-toastify'
import { UseFormReset } from 'react-hook-form'

const postRole = async ({ role, permissions }: RoleFormType) => {
    const response = await authHttpClient.post<PostRoleSuccessResponse>("/api/roles", {
        role: role, permissions: permissions
    })

    return response.data
}

const usePostRole = ({ onClose, reset }: { onClose: () => void; reset: UseFormReset<RoleFormType> }) => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["post", "role"],
        mutationFn: postRole,

        onSuccess: () => {
            // invalidates fetch rol query
            queryClient.invalidateQueries({ queryKey: ["fetch", "roles"] });
            onClose();
            reset();
            toast.success("Successfully added role!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete error callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add role", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // runs of both success and error response
        // closes the modal
        onSettled(data, error, variables, context) {
            // onClose();
        },
    })
}

export default usePostRole