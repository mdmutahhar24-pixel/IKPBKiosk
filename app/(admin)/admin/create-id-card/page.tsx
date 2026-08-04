'use client';

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React, { useActionState, useEffect } from 'react'
import { toast } from '@/components/ui/toast';
import CreateRegUser from '@/app/actions/createRegUser';

const CreateIDCard = () => {
  return (
    <div>
      <Card className='mx-50 my-20 text-center items-center'>
        <CardTitle>Create ID</CardTitle>
        <CardDescription>Fill out the following fields to create a user ID Card</CardDescription>
        <form action={CreateRegUser} className='w-full'>
          <div className='text-left w-full mx-5'>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>First Name <span className='text-red-500'>*</span></CardDescription>
                  <input name='firstName' className='w-11/12 border-2' required />
              </div>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>Last Name <span className='text-red-500'>*</span></CardDescription>
                  <input name='lastName' className='w-11/12 border-2' required />
              </div>
              <div className='mb-5'>
                  <CardDescription className='mb-2'>Barcode <span className='text-red-500'>*</span></CardDescription>
                  <input name='barcode' className='w-11/12 border-2' required />
              </div>
          </div>
          <Separator className="mb-5" />
          <Button className="w-3/4" type="submit">Create ID Card</Button>
        </form>
      </Card>
    </div>
  )
}

export default CreateIDCard
