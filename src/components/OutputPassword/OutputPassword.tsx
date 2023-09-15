import { toast } from 'react-toastify'

import { CopyIcon } from '../Icons'
import {
  OutputPasswordWrapper,
  Password,
  CopyBtn,
} from './OutputPassword.styled'

interface IOutputPasswordProps {
  password: string
}

const OutputPassword = ({ password }: IOutputPasswordProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    toast.success('Copied!')
  }

  return (
    <OutputPasswordWrapper>
      <Password>{password}</Password>
      <CopyBtn disabled={Boolean(!password)} onClick={handleCopy}>
        <CopyIcon width={24} />
      </CopyBtn>
    </OutputPasswordWrapper>
  )
}

export default OutputPassword
