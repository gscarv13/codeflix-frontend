'use client';

import { InputField } from './InputField';

type AuthFormProps = {
  formType: 'login' | 'signUp' | 'forgotPassword';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const formTitles = {
  login: 'Login',
  signUp: 'Sign Up',
  forgotPassword: 'Forgot Password',
};

const formAlternativeActions = {
  login: {
    text: 'New around here?',
    linkText: 'Sign Up',
    linkHref: '/auth/sign-up',
  },
  signUp: {
    text: 'Already got an account?',
    linkText: 'Login',
    linkHref: '/auth/login',
  },
  forgotPassword: {
    text: 'Remembered your password?',
    linkText: 'Login',
    linkHref: '/auth/login',
  },
};

type fieldProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
};

type FormType = 'login' | 'signUp' | 'forgotPassword';

type InputFields = {
  [key in FormType]: fieldProps[];
};

const formFields: InputFields = {
  login: [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      id: 'password',
      name: 'password',
    },
  ],
  signUp: [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      id: 'password',
      name: 'password',
    },
    {
      label: 'Password confirmation',
      type: 'password',
      placeholder: 'Password',
      id: 'password',
      name: 'password',
    },
  ],
  forgotPassword: [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      id: 'email',
      name: 'email',
    },
  ],
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
  return (
    <form
      className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-80 px-4 py-8 shadow-lg'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>{formTitles[formType]}</h1>
        <p className='text-sm text-gray-500'>
          {formAlternativeActions[formType].text}{' '}
          <a
            className='text-red-400 underline'
            href={formAlternativeActions[formType].linkHref}
          >
            {formAlternativeActions[formType].linkText}
          </a>
        </p>
      </div>

      <div className='mt-8 flex flex-col space-y-4'>
        {formFields[formType].map(({ label, type, placeholder, id, name }) => (
          <InputField
            key={id}
            label={label}
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
          />
        ))}

        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
          <button
            className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white sm:order-2 sm:w-auto sm:px-8'
            type='submit'
          >
            {formTitles[formType]}
          </button>
        </div>
      </div>
    </form>
  );
};
