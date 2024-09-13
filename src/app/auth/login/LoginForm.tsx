'use client';
import { InputField } from '../InputField';

export default function LoginForm() {
  return (
    <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-80 px-4 py-8 shadow-lg'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-500'>
          New around here?{' '}
          <a className='text-red-400 underline' href='/auth/signup'>
            Sign Up
          </a>
        </p>
      </div>

      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          label='Email'
          type='email'
          placeholder='Email'
          id='email'
          name='email'
        />
        <InputField
          label='Password'
          type='password'
          placeholder='Password'
          id='password'
          name='password'
        />
        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
          <button
            className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white sm:order-2 sm:w-auto sm:px-8'
            type='submit'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
