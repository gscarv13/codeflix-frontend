'use client';
import { AuthForm } from '@/app/components/AuthForm';

export default function ForgotPasswordForm() {
  return (
    <AuthForm formType='forgotPassword' onSubmit={(e) => e.preventDefault()} />
  );
}
