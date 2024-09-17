'use client';
import { AuthForm } from '@/app/components/AuthForm';

export default function LoginForm() {
  return (
    <AuthForm formType='login' onSubmit={(e) => e.preventDefault()} />
  );
}
