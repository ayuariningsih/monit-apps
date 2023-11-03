"use client"

import { SearchBar, CustomButton } from "@/components";
import { TrashIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, useState } from "react";
import { RecipientListProps, SelectedRecipient } from "@/types";

const TABLE_HEAD = ["", "Recipient", "Description", "Discount", "Amount", "Total"];

// const TABLE_ROWS = [
//   {
//     id: 1,
//     recipient_name: "Ayu",
//     description: "Salary Juni",
//     discount: "10%",
//     amount: "Rp 10.000.000",
//     total: "Rp 9.900.000"
//   },
//   {
//     id: 2,
//     recipient_name: "Nicholas Saputra",
//     description: "Salary Juni",
//     discount: "10%",
//     amount: "Rp 10.000.000",
//     total: "Rp 9.900.000"
//   },
//   {
//     id: 3,
//     recipient_name: "Kiki Saputri",
//     description: "Salary Juni",
//     discount: "10%",
//     amount: "Rp 10.000.000",
//     total: "Rp 9.900.000"
//   },
//   {
//     id: 4,
//     recipient_name: "Uzumaki Naruto",
//     description: "Salary Juni",
//     discount: "10%",
//     amount: "Rp 10.000.000",
//     total: "Rp 9.900.000"
//   }
// ]

const ListRecipients = ({ recipients }: RecipientListProps) => {
  const [selectedRecipient, setSelectedRecipient] = useState<SelectedRecipient>({
    recipients: [],
  })

  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    const { recipients } = selectedRecipient

    if (checked) {
      setSelectedRecipient({
        recipients: [...recipients, value]
      })
    } else {
      setSelectedRecipient({
        recipients: recipients.filter((item) => item !== value),
      })
    }
  }

  return (
    <div className="h-full w-full">
       <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between mb-4 mt-2">
          <SearchBar placeholder="Search recipient" />

          <div className="flex">
            <div className="flex gap-1 items-center mr-4">
              <TrashIcon
                className="h-4 w-4 text-red-600 align-middle cursor-pointer"
                aria-hidden="true"
              />

              <label className="font-semibold text-sm text-red-600">Deleted {selectedRecipient.recipients.length} selected</label> 
            </div>

            <CustomButton
              title="Undo"
              btnType="button"
              containerStyles="outline outline-1 text-primary rounded-md mx-2"
              textStyles="text-primary text-sm font-medium"
            />

            <CustomButton
              title="Redo"
              btnType="button"
              containerStyles="outline outline-1 text-primary rounded-md mx-2"
              textStyles="text-primary text-sm font-medium"
            />
          </div>
      </div>

      <div className="overflow-hidden px-0">
          <table className="w-full min-w-max table-auto text-left">
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
              {recipients.map(
                (
                  {
                    recipient,
                    description,
                    discount,
                    amount,
                    total
                  },
                  index,
                ) => {
                  const isLast = index === recipients.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={recipient.id}>
                      <td className={classes}>
                        <input 
                          id={`checkbox-${recipient.id}`}
                          value={recipient.name}
                          onChange={(e) => onChangeCheckBox(e)}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <p
                            color="blue-gray"
                            className="font-normal text-sm"
                          >
                            {recipient.name}
                          </p>
                        </div>
                      </td>
                      <td className={classes}>
                        <p
                          color="blue-gray"
                          className="font-normal text-sm"
                        >
                          {description}
                        </p>
                      </td>
                      <td className={classes}>
                        <p
                          color="blue-gray"
                          className="font-normal text-sm"
                        >
                          {discount}
                        </p>
                      </td>
                      <td className={classes}>
                        <p
                          color="blue-gray"
                          className="font-normal text-sm"
                        >
                          {amount}
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
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default ListRecipients