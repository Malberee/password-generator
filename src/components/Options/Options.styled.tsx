import styled, { css } from 'styled-components'

export const OptionsWrapper = styled.div`
  padding: 24px 32px;

  background-color: #23222a;

  .rc-slider-handle-dragging {
    background-color: #191820 !important;
    border: 2px solid #a3ffae !important;
    box-shadow: none !important;
  }
`

export const OptionsInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const SliderValue = styled.p`
  font-size: 32px;
  color: #a3ffae;
`

export const CheckboxGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`

export const CustomCheckbox = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: 2px solid #e7e6eb;

  transition: background-color 100ms linear, border-color 100ms linear;
`

export const Label = styled.label`
  cursor: pointer;
  font-weight: 500;
`

export const Checkbox = styled.input`
  position: absolute;
  appearance: none;

  &:checked + ${CustomCheckbox} {
    background-color: #a3ffae;
    border-color: #a3ffae;
    background-image: url(./images/check.svg);
    background-position: center;
    background-size: cover;
  }

  &:hover + ${CustomCheckbox} {
    border-color: #a3ffae;
  }
`

export const GenerateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  margin-top: 16px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;

  background-color: #a3ffae;
  border: 2px solid transparent;

  transition: background-color 100ms linear, color 100ms linear,
    border-color 100ms linear;

  &:hover {
    background-color: transparent;
    border: 2px solid #a3ffae;
    color: #a3ffae;

    svg {
      fill: #a3ffae;
    }
  }

  svg {
    margin-left: 16px;

    transition: fill 100ms linear;
  }
`

export const PasswordStrength = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
  padding: 16px;

  font-weight: 500;
  text-transform: uppercase;

  color: #807c92;
  background-color: #191820;
`

export const Strength = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #e7e6eb;
`

interface IStyledLevelItemProps {
  passwordLength: number
  empty?: boolean
}

export const LevelItem = styled.span<IStyledLevelItemProps>(
  ({ passwordLength, empty }) => {
    let color: string = '#f74b4b'
    let border: string = 'transparent'

    if (passwordLength >= 7) {
      color = '#fb7a56'
    }
    if (passwordLength >= 9) {
      color = '#f8cb63'
    }
    if (passwordLength >= 13) {
      color = '#a3ffae'
    }
    if (empty) {
      color = 'transparent'
      border = '#ffffff'
    }

    return css`
      display: inline-block;
      width: 10px;
      height: 28px;

      background-color: ${color};
      border: solid 2px ${border};

      margin-left: 8px;

      transition: background-color 100ms linear, border-color 100ms linear;

      &:first-child {
        margin-left: 16px;
      }
    `
  }
)
