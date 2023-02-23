'use client'

import { SessionProvider } from "next-auth/react"

export default function Providers({children}){ //# 0009
    return <SessionProvider>{children}</SessionProvider>
}