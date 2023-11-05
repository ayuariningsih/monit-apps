"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, leftIcon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-1.5 px-5 ${containerStyles}`}
      onClick={ handleClick }
    >
      { leftIcon }

      <span className={`flex-1 ${textStyles}`}>
        { title }
      </span>
    </button>
  )
}

export default CustomButton