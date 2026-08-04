'use client';

import AdminSignUp from '@/app/actions/adminSignUp';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/toast';
import Link from 'next/link'
import { useActionState, useEffect } from 'react';

const SignUp = () => {
  const [state, formAction, isPending] = useActionState(AdminSignUp, null)
  

  useEffect(() => {
    if (state?.error) {
      toast.add({
        type: "error",
        title: "Sorry!",
        description: state.error,
        priority: "high",
      })
    }
  }, [state])
  return (
    <div>
      <Card className='mx-50 my-20 text-center items-center'>
        <CardTitle>Admin Sign Up</CardTitle>
        <CardDescription>Not an Admin? <Link href="/" className='underline'>Go Back.</Link></CardDescription>
        <form action={formAction} className='w-full'>
          <div className='text-left w-full ml-30 mb-10'>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>Full Name <span className='text-red-500'>*</span></CardDescription>
                  <input name='name' className='w-3/4 border-2' />
              </div>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>Email <span className='text-red-500'>*</span></CardDescription>
                  <input name='email' type='email' className='w-3/4 border-2' />
              </div>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>Password <span className='text-red-500'>*</span></CardDescription>
                  <input name='password' type='password' className='w-3/4 border-2' />
              </div>
          </div>
          <Separator className="mb-5" />
          <Button className="w-3/4" type="submit" disabled={isPending}>{isPending? "Registering..." : "Register"}</Button>
        </form>
      </Card>
    </div>
  )
}

export default SignUp
