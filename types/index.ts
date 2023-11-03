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

export interface SelectedRecipient {
  recipients: string[]
}

export interface TransactionListProps {
  transactions: TransactionProps[]
}
export interface TransactionProps {
  id: string
  name: string
  total: string
  recipients: RecipientProps[]
}

export interface RecipientListProps {
  recipients: RecipientProps[]
}

export interface RecipientProps {
  description: string
  discount: string
  amount: string
  recipient: PersonProps
  total: string
}

export interface PersonProps {
  id: string
  name: string
}