import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import Meta from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const [authType, setAuthType] = useState<'login' | 'register'>('login')

	const {
		register: fromRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (authType === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-center mb-4'>
						{authType}
					</Heading>

					{/* Loader */}

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								{...fromRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message:
											'Please enter a valid email adress'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
							/>
							<Field
								{...fromRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message:
											'Min length should be more than 6 sybmols'
									}
								})}
								type='password'
								placeholder='Password'
								error={errors.password?.message}
							/>

							<Button
								type='submit'
								variant='orange'
								className='flex mx-auto'
							>
								Let's go!
							</Button>

							<Button
								type='button'
								onClick={() =>
									setAuthType(
										authType === 'login'
											? 'register'
											: 'login'
									)
								}
								variant='white'
								className='flex shadow-md mx-auto opacity-70 mt-3'
							>
								{`Move to ${
									authType === 'login' ? 'register' : 'login'
								}`}
							</Button>
						</>
					)}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
