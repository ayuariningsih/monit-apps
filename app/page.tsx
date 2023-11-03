import { ListTransactions } from "@/components";
import { getAllTransactions  } from "@/utils";

export default async function Home() {
  // Fetch
  const { transactions } = await getAllTransactions()

  return (
    <main className="overflow-hidden max-w-[1920px] px-8 py-5">
      <h1 className="text-2xl font-extrabold py-5">Request Transfer List</h1>

      <ListTransactions transactions={transactions} />
    </main>
  )
}
