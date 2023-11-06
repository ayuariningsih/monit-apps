"use client"

import Link from "next/link";
import { CustomButton, SearchBar } from "@/components";
import { TransactionListProps } from "@/types";
import { searchTransactionsByName } from "@/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
const TABLE_HEAD = ["Transfer Name", "Total Recipient", "Total Amount", ""]
 
const ListTransactions = ({ transactions }: TransactionListProps) => {
  const [allTransactions, setAllTransactions] = useState(transactions)
  const router = useRouter()

  async function onSearch (queryParams: string) {
    try {
      const { searchTransaction } = await searchTransactionsByName(queryParams)

      setAllTransactions(searchTransaction)

      if (queryParams === '') router.push('/')
      else router.push(`/?name=${queryParams}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onSearch('')
  }, [])
  

  return (
    <div className="h-full w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between mb-8 mt-2">
        <SearchBar handleSearch={(val) => onSearch(val)} placeholder="Search by name" />

        <Link href="/create">
          <CustomButton
            title="Create Transfer"
            btnType="button"
            containerStyles="outline outline-1 text-primary rounded-full mx-4"
            textStyles="text-primary text-sm font-medium"
          />
        </Link>
      </div>
      
      <div className="overflow-auto px-0">
        { allTransactions.length > 0 && (
          <table className="w-full min-w-max table-auto text-left overflow-x-scroll">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <h6
                      color="blue-gray"
                      className="font-bold leading-none opacity-70 text-sm"
                    >
                      {head}
                    </h6>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allTransactions.map(
                (
                  {
                    id,
                    name,
                    total,
                    recipients
                  },
                  index,
                ) => {
                  const isLast = index === allTransactions.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/${id}`}
                          >
                            <p
                              color="blue-gray"
                              className="font-normal text-sm"
                            >
                              {name}
                            </p>
                          </Link>
                        </div>
                      </td>
                      <td className={classes}>
                        <p
                          color="blue-gray"
                          className="font-normal text-sm"
                        >
                          {recipients.length} Recipient(s)
                        </p>
                      </td>
                      <td className={classes}>
                        <p
                          color="blue-gray"
                          className="font-normal text-sm"
                        >
                          {total}
                        </p>
                      </td>
                      <td className={classes}>
                        <Link href={`/detail/${id}`} className="text-blue-600 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ListTransactions