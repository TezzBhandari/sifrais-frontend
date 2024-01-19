"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AdminUserMutationSchema,
  AdminUserMutationType,
} from "@/app/admin/dashboard/it-nagar/create-user/types";

const AdminFormProvider = ({ children }: { children: React.ReactNode }) => {
  const adminUserForm = useForm<AdminUserMutationType>({
    resolver: zodResolver(AdminUserMutationSchema),
  });
  //   const [queryClient] = useState(() => new QueryClient());
  return (
    <FormProvider {...adminUserForm}>
      <form
        onSubmit={adminUserForm.handleSubmit((data) => {
          console.log(data);
          alert(JSON.stringify(data));
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default AdminFormProvider;
