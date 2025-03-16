'use client'

import { Icons } from '@/components/Icons'
import {
    Button,
    buttonVariants,
} from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ZodError } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'

import {
    AuthCredentialsValidator,
    TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
// import { trpc } from '@trpc/client'
import { useRouter } from 'next/navigation'

const SingUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const router = useRouter()

    /* const { mutate, isLoading } =
        trpc.auth.createPayloadUser.useMutation({
            onError: (err) => {
                if (err.data?.code === 'CONFLICT') {
                    toast.error(
                        'This email is already in use. Sign in instead?'
                    )

                    return
                }

                if (err instanceof ZodError) {
                    toast.error(err.issues[0].message)

                    return
                }

                toast.error(
                    'Something went wrong. Please try again.'
                )
            },
            onSuccess: ({ sentToEmail }) => {
                toast.success(
                    `Verification email sent to ${sentToEmail}.`
                )
                router.push('/verify-email?to=' + sentToEmail)
            },
        }) */

    const onSubmit = ({
        email,
        password,
    }: TAuthCredentialsValidator) => {
        console.log('email :> ', email)
        // mutate({ email, password })
    }

    return (
        <>
            <div className='relative flex flex-col justify-center items-center lg:px-0 pt-20 container'>
                <div className='flex flex-col justify-center space-y-6 mx-auto w-full sm:w-[350px]'>
                    <div className='flex flex-col items-center space-y-2 text-center'>
                        <Icons.logo className='w-20 h-20' />
                        <h1 className='font-semibold text-2xl tracking-tight'>
                            Create an account
                        </h1>

                        <Link
                            className={buttonVariants({
                                variant: 'link',
                                className: 'gap-1.5',
                            })}
                            href='/sign-in'>
                            Already have an account? Sign-in
                            <ArrowRight className='w-4 h-4' />
                        </Link>
                    </div>

                    <div className='gap-6 grid'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='gap-2 grid'>
                                <div className='gap-1 grid py-2'>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        {...register('email')}
                                        className={cn({
                                            'focus-visible:ring-red-500':
                                                errors.email,
                                        })}
                                        placeholder='you@example.com'
                                    />
                                    {errors?.email && (
                                        <p className='text-red-500 text-sm'>
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className='gap-1 grid py-2'>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input
                                        {...register('password')}
                                        type='password'
                                        className={cn({
                                            'focus-visible:ring-red-500':
                                                errors.password,
                                        })}
                                        placeholder='Password'
                                    />
                                    {errors?.password && (
                                        <p className='text-red-500 text-sm'>
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <Button>Sign up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUpPage