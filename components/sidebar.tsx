import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar'
import { CardTitle } from './ui/card'
import { auth } from '@/lib/auth/server'
import { Button } from './ui/button'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'

const AppSidebar = async () => {
  const { data: session } = await auth.getSession();
  return (
    <Sidebar>
      <SidebarHeader>
        <CardTitle>Welcome Admin</CardTitle>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton>Books</SidebarMenuButton>
                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                        <SidebarMenuSubButton href='/admin/checked-out-books'>Checked Out Books</SidebarMenuSubButton>
                        <SidebarMenuSubButton href='/admin/all-books'>All Books</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton>Users</SidebarMenuButton>
                <SidebarMenuSub>
                    <SidebarMenuSubItem>
                        <SidebarMenuSubButton href="/admin/all-users">All Users</SidebarMenuSubButton>
                        <SidebarMenuSubButton href='/admin/create-id-card'>Create Identification Card</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton><Link href="/admin/transactions">Transactions</Link></SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className='flex flex-row'>
        <p>{session?.user.name}</p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
