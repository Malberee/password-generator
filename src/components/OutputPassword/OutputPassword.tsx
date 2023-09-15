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
  return (
    <OutputPasswordWrapper>
      <Password>{password}</Password>
      <CopyBtn disabled={Boolean(!password)}>
        <CopyIcon width={24} />
      </CopyBtn>
    </OutputPasswordWrapper>
  )
}

export default OutputPassword
