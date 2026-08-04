import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import Image from 'next/image'

const UserDataTable = async () => {
  const users = await prisma.regularUser.findMany({
    orderBy: { barcode: "asc" }
  })

  if (users.length === 0) {
    return (
      <Empty className='border mt-50'>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Image src="/logo.png" alt='IKPB' width={40} height={40} />
          </EmptyMedia>
          <EmptyTitle>No Users created yet.</EmptyTitle>
          <EmptyDescription>Go to Create user to get started.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <div className='mt-50'>
      <Table className='border-2'>
        <TableCaption>List of all the Users</TableCaption>
        <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Barcode</TableHead>
              <TableHead>Available</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
              <TableCell><Image src={`/api/barcode/users/${user.barcode}`} alt={user.barcode} width={220} height={70} /></TableCell>
              <TableCell className={user.active ? "text-green-500" : "text-red-500"}>{user.active ? "Active" : "Evoked"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserDataTable
