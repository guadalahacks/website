import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}