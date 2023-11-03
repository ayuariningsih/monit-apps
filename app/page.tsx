import { ListTransactions } from "@/components";

export default async function Home() {
  return (
    <main className="overflow-hidden max-w-[1920px] px-8 py-5">
      <h1 className="text-2xl font-extrabold py-5">Request Transfer List</h1>

      <ListTransactions />
    </main>
  )
}
