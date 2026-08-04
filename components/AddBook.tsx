'use client';

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger, DialogDescription, DialogTitle, DialogHeader, DialogFooter, DialogContent, DialogClose } from './ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import BookAdd from '@/app/actions/BookAdd';
import { useRouter } from 'next/navigation';

const AddBook = () => {
    const [genre, setGenre] = useState("");
    const [open, setOpen] = useState(false)
    const router = useRouter();
  return (
    <div>
        <Dialog open={open}>
                <div className='flex justify-end p-5'>
                    <DialogTrigger render={<Button onClick={() => setOpen(true)}>Add Book</Button>} />
                </div>
                <DialogContent className="sm:max-w-sm">
                    <form action={async (formData: FormData) => {
                        await BookAdd(formData);

                        router.refresh();
                        setOpen(false);
                    }}>
                        <DialogHeader>
                            <DialogTitle>Add Book to Library</DialogTitle>
                            <DialogDescription>
                            Add a book to the library database!
                            </DialogDescription>
                        </DialogHeader>
                        <div className='mb-2'>
                            <p className='mb-2'>Book Title</p>
                            <input name='title' className='w-full border-3' />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Book Description</p>
                            <input name='description' className='w-full border-3' />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Book Author First Name</p>
                            <input name='firstName' className='w-full border-3' />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Book Author Last Name</p>
                            <input name='lastName' className='w-full border-3' />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Barcode ID</p>
                            <input name='barcode' className='w-full border-3' placeholder='BK-123456' />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Genre</p>
                            <Popover>
                                <PopoverTrigger render={<Button type='button' variant="outline" className="w-full">{genre || "Set Genre"}</Button>} />
                                <PopoverContent className="w-80">
                                    <Button type='button' variant="outline" onClick={() => setGenre("Sci-Fi")}>Sci-Fi</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Fantasy")}>Fantasy</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Mystery")}>Mystery</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Non-Fiction")}>Non-Fiction</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Fiction")}>Fiction</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Mythology")}>Mythology</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Realsitic Fiction")}>Realistic Fiction</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Graphic Novel")}>Graphic Novel</Button>
                                    <Button type='button' variant="outline" onClick={() => setGenre("Puzzles")}>Puzzles</Button>
                                </PopoverContent>
                            </Popover>
                            <input type='hidden' name='genre' value={genre} />
                        </div>
                        <div className='mb-2'>
                            <p className='mb-2'>Shelf Location</p>
                            <input name='shelfLocation' className='w-full border-3' required />
                        </div>
                        <DialogFooter>
                            <DialogClose render={<Button variant="outline">Cancel</Button>} />
                            <Button type="submit">Add Book</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddBook
