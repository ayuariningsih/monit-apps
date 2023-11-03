"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-1.5 px-5 ${containerStyles}`}
      onClick={ handleClick }
    >
      <span className={`flex-1 ${textStyles}`}>
        { title }
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton