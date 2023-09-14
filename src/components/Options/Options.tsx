import { useState } from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import {
  OptionsWrapper,
  OptionsInner,
  Text,
  SliderValue,
  CheckboxGroup,
  Label,
  Checkbox,
  CustomCheckbox,
} from './Options.styled'

const Options = () => {
  const [sliderValue, setSliderValue] = useState<number>(10)

  const handleChangeSlider = (value: number | number[]) => {
    setSliderValue(value as number)
  }

  return (
    <OptionsWrapper>
      <OptionsInner>
        <Text>Character Length</Text>
        <SliderValue>{sliderValue}</SliderValue>
      </OptionsInner>
      <Slider
        value={sliderValue}
        min={0}
        max={20}
        onChange={handleChangeSlider}
        trackStyle={{
          backgroundColor: '#a3ffae',
          borderRadius: 0,
          height: '8px',
        }}
        railStyle={{
          backgroundColor: '#191820',
          borderRadius: 0,
          height: '8px',
        }}
        handleStyle={{
          width: '24px',
          height: '24px',
          border: 0,
          marginTop: '-8px',
          backgroundColor: '#e7e6eb',
          opacity: 1,
        }}
      />
      <CheckboxGroup>
        <li>
          <Label>
            <Checkbox type="checkbox" />
            <CustomCheckbox />
            Include Uppercase Letters
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox type="checkbox" />
            <CustomCheckbox />
            Include Lowercase Letters
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox type="checkbox" />
            <CustomCheckbox />
            Include Numbers
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox type="checkbox" />
            <CustomCheckbox />
            Include Symbols
          </Label>
        </li>
      </CheckboxGroup>
    </OptionsWrapper>
  )
}

export default Options
