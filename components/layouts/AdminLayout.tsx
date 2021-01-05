import React, { ReactNode } from 'react'
import Head from 'next/head'
import AdminHeader from '../theme/admin/AdminHeader'
import AdminFooter from '../theme/admin/AdminFooter'

type Props = {
  children?: ReactNode
  title?: string
}

const AdminLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <AdminHeader />
    {children}
    <AdminFooter />
  </div>
)

export default AdminLayout