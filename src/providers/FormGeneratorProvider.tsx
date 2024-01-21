"use client";
import { FormProvider, useForm } from "react-hook-form";

const FormGeneratorProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm();
  //   const [queryClient] = useState(() => new QueryClient());
  return <FormProvider {...form}>{children}</FormProvider>;
};

export default FormGeneratorProvider;
