import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  leftIcon?: any
  isDisabled?: boolean
}

export interface ModalProps {
  isOpen: boolean
  handleCloseModal: () => void
  handleAddRecipient: (data: RecipientProps) => void
  title: string
}

export interface SelectedRecipient {
  recipients: string[]
}

export interface TransactionListProps {
  transactions: TransactionProps<RecipientProps[]>[]
}
export interface TransactionProps<T> {
  id: string
  name: string
  total: string
  recipients: T
}

export interface RecipientListProps {
  recipients: RecipientProps[],
  isEditing: boolean,
  handleDeleteRecipient: (data: any) => void
}

export interface RecipientProps {
  description: string
  discount: string
  amount: string
  recipient_id: string
  recipient_name: string
  total: string
}

export interface SelectProps {
  options: PersonProps[]
  containerClass?: string
  handleOnSelect: (data: string) => void
}
export interface PersonProps {
  id: string
  name: string
}

export interface SearchBarProps {
  placeholder?: string
  handleSearch: (e:any) => void
}