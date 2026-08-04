"use client";

import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import QRCode from "react-qr-code"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import UserExists from './actions/userExists';
import { toast } from '@/components/ui/toast';
import { StartCheckoutSession } from './actions/checkoutSession';

const page = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();

    window.addEventListener("click", focusInput);

    return () => {
      window.removeEventListener("click", focusInput);
    };
  }, []);

  const router = useRouter();

  return (
    <div className='flex text-center justify-center w-full h-full'>
      <Card className='flex justify-center items-center m-5 w-200'>
        <Image src="/logo.png" alt='Logo' width={100} height={100} />
        <CardTitle>Please Scan your Provided IKPB ID</CardTitle>
        <input ref={inputRef} value={barcode} onChange={(e) => setBarcode(e.target.value)} onKeyDown={
          async (e) => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "r") {
              router.push("/admin-auth/sign-in")
            }
            else if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "y") {
              router.push("/admin-auth/sign-up")
            }
            else if (e.key === "Enter") {
              const userExists = await UserExists(barcode)

              if (!userExists) {
                toast.add({
                  type: "error",
                  title: "Sorry!",
                  description: "User was not found in our database. Please contact an Admin to create your account.",
                });
                setBarcode("")
                return;
              }

              await StartCheckoutSession(userExists.id);

              router.push("/book-checkout")

              setBarcode("")

              inputRef.current?.focus();
            }
          }
        } className="absolute opacity-0 pointer-events-none" />
        <CardDescription>OR</CardDescription>
        <QRCode value='' size={256} fgColor='#06402B' />
        <CardTitle>Scan QRCode with the IKPB App</CardTitle>
      </Card>
    </div>
  )
}

export default page
