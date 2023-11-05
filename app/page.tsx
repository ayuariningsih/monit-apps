"use client"

import { ListTransactions } from "@/components";
import { getAllTransactions  } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  // Fetch
  const [allTransactions, setallTransactions] = useState([])

  async function fetchAllTransactions () {
    const { transactions } = await getAllTransactions()
    setallTransactions(transactions)
  }

  useEffect(() => {
    fetchAllTransactions()
  }, []);
  
  return (
    <main className="overflow-hidden max-w-[1920px] px-8 py-5">
      <h1 className="text-2xl font-extrabold py-5">Request Transfer List</h1>

      <ListTransactions transactions={allTransactions} />
    </main>
  )
}
