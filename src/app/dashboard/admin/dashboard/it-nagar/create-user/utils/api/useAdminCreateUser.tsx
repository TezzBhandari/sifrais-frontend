"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
// import { DocumentFormType, PostDocumentSuccessResponse } from "../../types";
import { UseFormReset } from "react-hook-form";
import { AdminUserMutationType, CreateUserSuccessResponse } from "../../types";
import { PostDocumentSuccessResponse } from "../../../../system-configuration/documents/types";


// delete query function
const createAdminUser = async (user: AdminUserMutationType) => {
    const response = await authHttpClient.post<CreateUserSuccessResponse>(
        `/api/users`, {
        name: user.personalInformation.fullnameEnglish,
        email: user.personalInformation.email,
        password: user.personalInformation.password,
        office_id: user.officeDetails.officeType,
        designation_id: user.officeDetails.designation,
        address: "dummy address",
        phone_number: user.personalInformation.phoneNumber,
        active_status: user.officeDetails.active_status,
        otp_status: true

    },
    );
    return response.data;
};


// delete office custom hook
const useCreateAdminUser = ({
    reset,
}: {
    reset: UseFormReset<AdminUserMutationType>
}) => {
    // for invalidating fetch offices query
    const queryClient = useQueryClient();

    return useMutation({
        // mutation key 
        mutationKey: ["post", "adminUser"],
        // mutation function
        mutationFn: createAdminUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetch", "users"] });
            reset();
            toast.success("Successfully added admin User!", {
                position: toast.POSITION.TOP_CENTER,
            });
        },

        // on delete errro callback
        // shows error messsage
        onError(error, variables, context) {
            // onClose();
            toast.error("Failed to add admin User", {
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

export default useCreateAdminUser;
