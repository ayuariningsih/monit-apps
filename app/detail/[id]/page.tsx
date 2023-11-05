"use client"

import { FormTransaction } from '@/components'
import React from 'react'

const page = () => {
  return (
    <main className="overflow-hidden max-w-[1920px] px-8 py-5">
      <h1 className="text-2xl font-extrabold py-5">Transfer Detail</h1>

      <FormTransaction />
    </main>
  )
}

export default page