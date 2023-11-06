"use client"

import { useEffect, useState } from "react"
import { CustomButton, ListRecipients, ModalRecipient } from "@/components"
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useRouter, useParams, usePathname } from "next/navigation"
import { createNewTransaction, getTransactionById, updateCurrentTransaction } from "@/utils"
import { RecipientProps, TransactionProps } from "@/types"

const FormTransaction = () => {
  const router = useRouter()
  const params = useParams()
  const pathName = usePathname()
  const isDetailPage = pathName.includes('detail')
  
  const [isEditing, setIsEditing] = useState(false)

  const randomId = Math.floor(Math.random() * 10000).toString()
  const initialTransaction = {
    id: randomId,
    name: '',
    total: '0',
    recipients: []
  }

  const [detailTransaction, setDetailTransaction] = useState<TransactionProps<RecipientProps[]>>(initialTransaction)
  const [isValidForm, setIsValidForm] = useState(false)
  const [errors, setErrors] = useState({})

   // validation rules
   const validateForm = () => {
    let errors = {}
    const { name } = detailTransaction

    if (name === '') errors.name = 'Name is required'
    setErrors(errors)

    const isNullish = Object.values(errors).every(value => {
      if (value === '') return true
    
      return false
    })
    
    setIsValidForm(Object.keys(errors).length === 0)
  }

  useEffect(() => {
    validateForm()
  
  }, [detailTransaction.name])

  async function fetchTransaction() {
    try {
      const { transaction } = await getTransactionById(params.id.toString())

      setDetailTransaction(transaction)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchTransaction() 
  }, [])
  
  // handle modal
  const [isShowModal, setIsShowModal] = useState(false)

  function openModal () {
    setIsShowModal(true)
  }

  function closeModal () {
    setIsShowModal(false)
  }

  // handle create/update data
  async function addRecipient(newRecipient: RecipientProps) {
    let { recipients } = detailTransaction
    recipients.push(newRecipient)
    
    setDetailTransaction({...detailTransaction, recipients: recipients })
    await getSumTotal(recipients)
  }

  function getSumTotal(recipients: RecipientProps[]) {
    let sum = 0
    recipients.map((recipient, index) => sum += Number(recipient.total))

    setDetailTransaction({...detailTransaction, total: sum.toString()})
  }

  function deleteRecipient(selectedItems: any) {
    const { recipients } = detailTransaction
    let newRecipients: any = recipients

    selectedItems.recipients.map((element: string) => {
      const index = recipients.findIndex((item) => item.recipient_name === element)

      if (index !== -1) {
        newRecipients.splice(index, 1)
      }
    })

    setDetailTransaction({...detailTransaction, recipients: newRecipients})
  }

  // handle action buttons
  async function handleSubmit() {
    if (!isValidForm) return 

    if (isDetailPage) await handleUpdateTransaction()
    else await handleAddTransaction(detailTransaction)
  }

  async function handleAddTransaction(newTransaction:TransactionProps<RecipientProps[]>) {
    try {
      const { createTransaction } = await createNewTransaction(newTransaction)

      if (createTransaction) finish()
    } catch (error) {
      console.log('error')
    }
  }

  async function handleUpdateTransaction() {
    try {
      const id = params.id.toString()
      const { updateTransaction } = await updateCurrentTransaction(id, detailTransaction)
      
      if (updateTransaction) finish()
    } catch (error) {
      console.log('error')
    }
  }

  function finish () {
    if (isDetailPage) setIsEditing(false)
    else router.back()
  }

  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form>
          <div className="mb-4 xl:w-1/3 md:w-1/2 w-full">
            <label
              htmlFor="transfer-name"
              className="block mb-2 font-semibold text-gray-900"
            >
              Transfer Name
            </label>

            <input
              onChange={(e) => setDetailTransaction({...detailTransaction, name: e.target.value})}
              value={detailTransaction.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 w-full block p-2.5"
              id="transfer-name"
              type="text"
              placeholder="Type transfer name"
              disabled={!isEditing && isDetailPage}
            />

            {errors.name && (
              <p className="text-red-500 text-xs">{ errors.name }</p>
            )}
          </div>

          { isDetailPage && !isEditing 
          ? ('') 
          : (
            <div className="flex gap-3 items-center mb-5">
              <label className="font-semibold text-gray-900">Add New Recipient</label>
  
              <PlusCircleIcon
                className="mr-2 h-8 w-8 text-green-500 align-middle cursor-pointer"
                aria-hidden="true"
                onClick={openModal}
              />
            </div>
          )}
          
          { detailTransaction.recipients.length > 0 && (
            <ListRecipients
              recipients={detailTransaction.recipients}
              isEditing={isEditing}
              handleDeletedRecipient={(e) => deleteRecipient(e)}
             />
          )}

          { isShowModal && (
            <ModalRecipient
              isOpen={isShowModal}
              handleCloseModal={closeModal}
              handleAddRecipient={(e) => addRecipient(e)}
              title="Add New Recipient"
            />
          )}

          <div className="my-5">
            <p className="text-gray-400 text-sm flex justify-end">Recipient <span className="ml-12">{ detailTransaction.recipients.length > 0 ? detailTransaction.recipients.length : '0'} recipient(s)</span></p>
            <h6 className="font-bold flex justify-end">Total transfer { isEditing } <span className="ml-4">{ detailTransaction.recipients.length > 0 ? detailTransaction.total : '0'}</span></h6>
          </div>
          
          <div className="flex justify-end gap-3 mt-5">
            { isDetailPage && !isEditing
            ? (<>
                <CustomButton
                  title="Edit"
                  btnType="button"
                  containerStyles="bg-primary text-white rounded-lg py-3 px-6"
                  textStyles="text-sm"
                  handleClick={() => setIsEditing(true)}
                />

                <CustomButton
                  title="Back"
                  btnType="button"
                  containerStyles="outline outline-1 text-primary rounded-lg"
                  textStyles="text-primary text-sm"
                  handleClick={() => router.back()}
                />
              </>) 
            : (<>
                <CustomButton
                  title="Save"
                  btnType="button"
                  containerStyles={`${isValidForm ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500' } rounded-lg py-3 px-6`}
                  textStyles="text-sm"
                  isDisabled={!isValidForm}
                  handleClick={() => handleSubmit()}
                />
    
                <CustomButton
                  title="Cancel"
                  btnType="button"
                  containerStyles="outline outline-1 text-primary rounded-lg"
                  textStyles="text-primary text-sm"
                  handleClick={() => finish()}
                />
              </>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default FormTransaction