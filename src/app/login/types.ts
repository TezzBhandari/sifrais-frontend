import { z } from "zod";

//Creating a schema for Uesr login Input.

export const userLoginSchema = z.object({
    email: z.string().email({"message": "Invalid Email"}).min(1, {"message": "Email field is required."}),
    password: z.string().min(1, {"message":"Password field is required."}).max(50, {"message": "Password must not be greater than 50."})

})

