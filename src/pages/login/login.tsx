import { useForm } from "react-hook-form"
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schema";
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components";


export const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center py-12 px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md min-h-96 shadow-sm p-5 rounded-lg bg-gray-50">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-12">
          DG Inventory
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Soporte tecnico nunca te pedira tus credenciales.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="**********" {...field} />
                  </FormControl>
                  <FormDescription>
                    No compartas tu contraseña con nadie.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login
