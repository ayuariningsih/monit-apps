"use client"

import { ModalProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CustomButton } from '..'

export default function Modal({ isOpen, handleCloseModal, title }: ModalProps) {
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
                          Nama Recipient
                        </label>
                        <input
                          type="text"
                          id="recipient" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="Search recipient"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          id="description" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="Input transfer description"
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
                          type="text"
                          id="discount" 
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
                          type="text"
                          id="amount" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 block w-full p-2.5"
                          placeholder="Input amount"
                        />
                      </div>

                      {/* <CustomButton
                        btnType="submit"
                        title="Edit"
                        containerStyles="bg-primary text-white rounded-full px-12 w-max-1/3"
                      /> */}
                    </form>
                  </div>

                  <div className="flex gap-3 mt-4">
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
                      handleClick={handleCloseModal}
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
