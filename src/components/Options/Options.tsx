import { useState } from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { ArrowIcon } from '../Icons'

import {
  OptionsWrapper,
  OptionsInner,
  Text,
  SliderValue,
  CheckboxGroup,
  Label,
  Checkbox,
  CustomCheckbox,
  GenerateBtn,
  PasswordStrength,
  Strength,
  LevelItem,
} from './Options.styled'

const Options = () => {
  const [passwordLength, setPasswordLength] = useState<number>(10)

  const handleChangeLength = (value: number | number[]) => {
    setPasswordLength(value as number)
  }

  const getStrengthPassword = () => {
    if (passwordLength >= 13) {
      return 'strong'
    }
    if (passwordLength >= 9) {
      return 'medium'
    }
    if (passwordLength >= 7) {
      return 'weak'
    }
    return 'too weak!'
  }

  return (
    <OptionsWrapper>
      <OptionsInner>
        <Text>Character Length</Text>
        <SliderValue>{passwordLength}</SliderValue>
      </OptionsInner>
      <Slider
        value={passwordLength}
        min={5}
        max={15}
        onChange={handleChangeLength}
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

      <PasswordStrength>
        <Text>Strength</Text>
        <Strength>
          {getStrengthPassword()}
          <LevelItem passwordLength={passwordLength} />
          <LevelItem
            passwordLength={passwordLength}
            empty={passwordLength < 7}
          />
          <LevelItem
            passwordLength={passwordLength}
            empty={passwordLength < 9}
          />
          <LevelItem
            passwordLength={passwordLength}
            empty={passwordLength < 13}
          />
        </Strength>
      </PasswordStrength>

      <GenerateBtn>
        Generate <ArrowIcon width={12} />
      </GenerateBtn>
    </OptionsWrapper>
  )
}

export default Options
