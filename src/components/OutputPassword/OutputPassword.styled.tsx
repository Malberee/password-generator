import styled from 'styled-components'

export const OutputPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 24px 32px;

  background-color: #23222a;
`

export const Password = styled.p`
  font-size: 32px;
  font-weight: 500;

  color: #807c92
`

export const CopyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  background-color: transparent;
  color: #a3ffae;

  &:hover svg {
    fill: #ffffff;
  }

  svg {
    transition: fill 100ms linear;
  }
`
