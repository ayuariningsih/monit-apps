import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface ModalProps {
  isOpen: boolean
  handleCloseModal: () => void
  title: string
}

export interface selectedRecipient {
  recipients: string[]
}