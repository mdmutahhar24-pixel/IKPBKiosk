import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import Image from 'next/image'

const TransactionDataTable = async () => {
  const transactions = await prisma.transaction.findMany();

  if (transactions.length === 0) {
    return (
      <Empty className='border'>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Image src="/logo.png" alt='IKPB' width={40} height={40} />
          </EmptyMedia>
          <EmptyTitle>No transactions yet.</EmptyTitle>
          <EmptyDescription>Any transactions will appear here!</EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <div>
      <Table className='border-2'>
        <TableCaption>List of transactions at IKPB</TableCaption>
        <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Book Title</TableHead>
              <TableHead>User Barcode</TableHead>
              <TableHead>Checked Out At</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.bookTitle}</TableCell>
              <TableCell>{transaction.UserBarCode}</TableCell>
              <TableCell>{transaction.checkedOutAt.toLocaleDateString()}</TableCell>
              <TableCell>{transaction.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TransactionDataTable
