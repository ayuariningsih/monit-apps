"use client"

import { ModalProps, PersonProps, RecipientProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { CustomButton, SelectCustom } from '..'
import { getAllOptions } from '@/utils'

export default function Modal({ isOpen, handleCloseModal, handleAddRecipient, title }: ModalProps) {
  const randomId = Math.floor(Math.random() * 10000).toString()
  const initialRecipient = {
    recipient_id: randomId,
    recipient_name: '',
    description: '',
    discount: '0',
    amount: '10000',
    total: '0'
  }

  const [recipient, setRecipient] = useState<RecipientProps>(initialRecipient)
  const [isValidForm, setIsValidForm] = useState(false)
  const [errors, setErrors] = useState({})

  // validation rules
  const validateForm = () => {
    let errors = {}
    
    const {amount, recipient_name} = recipient

    if (Number(amount) < 10000) errors.amount = 'Amount should more than 10000'
    if (recipient_name === '') errors.recipient_name = 'Name is required'

    setErrors(errors)
    const isNullish = Object.values(errors).every(value => {
      if (value === '') {
        return true;
      }
    
      return false;
    })
    setIsValidForm(Object.keys(errors).length === 0)
  }

  useEffect(() => {
    validateForm()
  
  }, [recipient.amount, recipient.recipient_name])
  

  const getTotalAmount = (amount: string = '0', discount: string = '0'): string => {
    const result = Number(amount) - (Number(amount) * Number(discount) / 100)
    
    return result.toString()
  }

  const [options, setOptions] = useState<PersonProps[]>([])

  async function fetchOptions() {
    const { person } = await getAllOptions()

    setOptions(person)
  }

  useEffect(() => {
    fetchOptions()

  }, [])

  function onSelectOptions (value: string) {
    setRecipient({...recipient, recipient_name: value})
  }  

  async function handleSubmit () {
    if (!isValidForm) return 

    await handleAddRecipient(recipient)
    await handleCloseModal()

    //reset modal
    setRecipient(initialRecipient)
  }

  function handleCancel () {
    handleCloseModal()

    //reset modal
    setRecipient(initialRecipient)
  }

  useEffect(() => {
    if (Number(recipient.amount) > 0) {
      const { amount, discount } = recipient
      const totalAmount = getTotalAmount(amount, discount)
  
      setRecipient({...recipient, total:  totalAmount })
    }

  }, [recipient.amount, recipient.discount])
  

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    { title }
                  </Dialog.Title>
                  <div className="px-2 mt-6">
                    <form>
                      <div className="mb-6">
                        <label
                          htmlFor="recipient" 
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Recipient name
                        </label>

                        <SelectCustom
                          options={options}
                          containerClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          handleOnSelect={(value) => onSelectOptions(value)} />
                        
                        {errors.recipient_name && (
                          <p className="text-red-500 text-xs">{ errors.recipient_name }</p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Description
                        </label>
                        <input
                          onChange={(e) => setRecipient({...recipient, description: e.target.value })}
                          value={recipient.description}
                          type="text"
                          id="description" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="Type transfer description"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="discount"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Discount
                        </label>
                        <input
                          onChange={(e) => setRecipient({...recipient, discount: e.target.value })}
                          value={recipient.discount}
                          type="number"
                          id="discount" 
                          min={0}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="0%"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="amount"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Amount
                        </label>
                        <input
                          onChange={(e) => setRecipient({...recipient, amount: e.target.value })}
                          value={recipient.amount}
                          type="number"
                          id="amount"
                          min={10000}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="Input amount"
                        />

                        {errors.amount && (
                          <p className="text-red-500 text-xs">{errors.amount}</p>
                        )}
                      </div>
                    </form>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <CustomButton
                      title="Save"
                      btnType="button"
                      isDisabled={!isValidForm}
                      containerStyles={`${isValidForm ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500' } rounded-lg py-3 px-6`}
                      textStyles="text-sm"
                      handleClick={handleSubmit}
                    />

                    <CustomButton
                      title="Cancel"
                      btnType="button"
                      containerStyles="outline outline-1 text-primary rounded-lg"
                      textStyles="text-primary text-sm"
                      handleClick={handleCancel}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
