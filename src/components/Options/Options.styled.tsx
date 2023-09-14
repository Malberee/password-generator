import styled from 'styled-components'

export const OptionsWrapper = styled.div`
  margin-top: 16px;
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
`

export const SliderValue = styled.p`
  font-size: 32px;
  color: #a3ffae;
`

export const CheckboxGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Label = styled.label``

export const CustomCheckbox = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: 2px solid #e7e6eb;
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
`
