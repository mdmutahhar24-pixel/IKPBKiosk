import { Button } from '@/components/ui/button'
import { Table, TableCaption } from '@/components/ui/table'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import DataTable from './data-table'
import AddBook from '@/components/AddBook'

const page = () => {
  return (
    <div>
      <AddBook />
      <DataTable />
    </div>
  )
}

export default page
