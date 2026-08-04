import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import Image from 'next/image'

const DataTable = async () => {
  const books = await prisma.books.findMany({
    include: { author: true },
    orderBy: { barcode: "asc" }
  })

  if (books.length === 0) {
    return (
      <Empty className='border'>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Image src="/logo.png" alt='IKPB' width={40} height={40} />
          </EmptyMedia>
          <EmptyTitle>No Books added yet.</EmptyTitle>
          <EmptyDescription>Click Add book to get Started.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <div>
      <Table className='border-2'>
        <TableCaption>List of all the Books at IKPB</TableCaption>
        <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Shelf Location</TableHead>
              <TableHead>Barcode</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>{book.author.lastName}, {book.author.firstName}</TableCell>
              <TableCell>{book.Genre}</TableCell>
              <TableCell>{book.shelfLocation}</TableCell>
              <TableCell><Image src={`/api/barcode/books/${book.barcode}`} alt={book.barcode} width={220} height={70} /></TableCell>
              <TableCell className={book.status === "AVAILABLE" ? "text-green-500" : "text-red-500"}>{book.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable
