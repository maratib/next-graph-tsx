import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from '../theme/Footer'
import Header from '../theme/Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout