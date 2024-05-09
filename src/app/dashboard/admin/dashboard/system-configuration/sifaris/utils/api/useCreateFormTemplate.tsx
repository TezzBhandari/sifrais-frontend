import authHttpClient from '@/lib/utils/HttpClient/axiosPrivate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SifarisFormTemplateSuccessResponse, SifarisFormTemplateErrorResponse } from '../../types'
import { toast } from 'react-toastify'
import { UseFormReset } from 'react-hook-form'
import { CreateSifarisForm } from '../../add/types'

const postRole = async ({ formTemplate, sifarisId }: { sifarisId: number; formTemplate: CreateSifarisForm }) => {
    const response = await authHttpClient.post<SifarisFormTemplateSuccessResponse>("/api/sifarisforms", {
        sifaristype_id: sifarisId,
        sifaris_form_template: formTemplate
    })

    return response.data
}

const useCreateFormTemplate = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ["post", "sifarisFormTemplate"],
        mutationFn: postRole,

        onSuccess: () => {
            // reset();
            toast.success("Successfully create form", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete error callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add form", {
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

export default useCreateFormTemplate