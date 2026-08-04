'use client';

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React, { useActionState, useEffect } from 'react'
import AdminSignIn from '@/app/actions/adminSignIn';
import { toast } from '@/components/ui/toast';

const SignIn = () => {
  const [state, formAction, isPending] = useActionState(AdminSignIn, null)

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
        <CardTitle>Admin Sign In</CardTitle>
        <CardDescription>Not an Admin? <Link href="/" className='underline'>Go Back.</Link></CardDescription>
        <form action={formAction} className='w-full'>
          <div className='text-left w-full ml-30 mb-10'>
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
          <Button className="w-3/4" disabled={isPending} type="submit">{isPending? "Signing you in..." : "Sign In"}</Button>
        </form>
      </Card>
    </div>
  )
}

export default SignIn
