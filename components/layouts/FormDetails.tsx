"use client"

import { useEffect, useState } from "react"
import { CustomButton, ListRecipients, ModalRecipient } from "@/components"
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useRouter, useParams } from "next/navigation"
import { getTransactionById } from "@/utils"
import { TransactionProps } from "@/types"

const FormDetails = () => {
  const router = useRouter()
  const params = useParams()

  const initialTransaction = {
    id: '',
    name: '',
    total: '',
    recipients: []
  }

  const [detailTransaction, setDetailTransaction] = useState<TransactionProps>(initialTransaction)

  async function fetchTransaction() {
    try {
      const { transaction } = await getTransactionById(params.id.toString())
      console.log(transaction)

      setDetailTransaction(transaction)
    } catch (error) {
      
    }
  }
  
  const [isShowModal, setIsShowModal] = useState(false)

  function openRecipientModal () {
    setIsShowModal(true)
  }

  function handleCloseModal () {
    setIsShowModal(false)
  }

  useEffect(() => {
    fetchTransaction() 
  }, [detailTransaction.name, detailTransaction.total])
  
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form>
          <div className="mb-4 xl:w-1/3 w-full">
            <label
              htmlFor="transfer-name"
              className="block mb-2 font-semibold text-gray-900"
            >
              Transfer Name
            </label>
            <input
              type="text"
              id="transfer-name"
              value={detailTransaction.name}
              onChange={() => handleCloseModal}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 w-full block p-2.5"
              placeholder="Input transfer name"
            />
          </div>

          <div className="flex gap-3 items-center mb-5">
            <label className="font-semibold text-gray-900">Add New Recipient</label>

            <PlusCircleIcon
              className="mr-2 h-8 w-8 text-green-500 align-middle cursor-pointer"
              aria-hidden="true"
              onClick={openRecipientModal}
            />
          </div>

          <ListRecipients recipients={detailTransaction.recipients} />

          <ModalRecipient
            isOpen={isShowModal}
            handleCloseModal={handleCloseModal}
            title="Add New Recipient"
          />

          <div className="my-5">
            <p className="text-gray-400 text-sm flex justify-end">Recipient <span className="ml-12">4 recipient(s)</span></p>
            <h6 className="font-bold flex justify-end">Total transfer <span className="ml-4">50.000.000</span></h6>
          </div>
          
          <div className="flex justify-end gap-3 mt-5">
            <CustomButton
              title="Save"
              btnType="submit"
              containerStyles="bg-primary text-white rounded-lg py-3 px-6"
              textStyles="text-sm"
            />

            <CustomButton
              title="Cancel"
              btnType="button"
              containerStyles="outline outline-1 text-primary rounded-lg"
              textStyles="text-primary text-sm"
              handleClick={() => router.back()}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default FormDetails