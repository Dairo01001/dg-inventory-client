import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components'
import { useAppDispatch } from '@/hooks'
import { createUserSession } from '@/redux/states'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { loginSchema } from './schema'

export const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    dispatch(
      createUserSession({
        user: {
          id: '1',
          name: 'John Doe',
          email: data.email,
          role: 'ADMIN'
        },
        accessToken: '123',
        isAuthenticated: true
      })
    )
    navigate('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 py-12">
      <div className="min-h-96 rounded-lg p-5 shadow-sm sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mb-12 mt-6 text-center text-3xl font-bold tracking-tight">
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
                    <Input
                      type="password"
                      placeholder="**********"
                      {...field}
                    />
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
