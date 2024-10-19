import z from "zod"

export const loginSchema = z.object({
  email: z.string({ message: "String is required!" }).email({ message: "Email is invalid!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." })
})
