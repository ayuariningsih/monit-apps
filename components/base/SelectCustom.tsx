"use client"

import { PersonProps, SelectProps } from '@/types'
import { useState } from 'react'

const SelectCustom = ({ options, containerClass, handleOnSelect }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  function setValue(value: string) {
    setSelectedOption(value)
    handleOnSelect(value)
  }

  return (
    <div className="mt-3">
      <select
        value={selectedOption}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={containerClass}
      >
        <option value="" className="font-light text-small" disabled>Select Recipient</option>

        { options.map((option: PersonProps) => (
          <option
            value={option.name}
            key={option.id}
            className="px-4"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectCustom