"use client";

import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import QRCode from "react-qr-code"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BookExists from '@/app/actions/bookExists';
import { toast } from '@/components/ui/toast';
import Checkout from '../actions/checkout';

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
        <CardTitle>Please Scan your Book Below</CardTitle>
        <input ref={inputRef} value={barcode} onChange={(e) => setBarcode(e.target.value)} onKeyDown={
          async (e) => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "r") {
              router.push("/admin-auth/sign-in")
            }
            else if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "y") {
              router.push("/admin-auth/sign-up")
            }
            else if (e.key === "Enter") {
              const bookExists = await BookExists(barcode)

              if (!bookExists) {
                toast.add({
                  type: "error",
                  title: "Sorry!",
                  description: "Book was not found in our database. Please Check out a valid book.",
                });
                setBarcode("")
                return;
              }

              Checkout(barcode);

              setBarcode("");

              inputRef.current?.focus();
            }
          }
        } className="absolute opacity-0 pointer-events-none" />
      </Card>
    </div>
  )
}

export default page
