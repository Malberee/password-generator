import { useState } from 'react'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { ArrowIcon } from '../Icons'

import { generatePassword } from '../../services/generatePassword'

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

interface IOptionsProps {
  setGeneratedPassword: (password: string) => void
}

type Options = {
  upperCase: boolean
  lowerCase: boolean
  numbers: boolean
  symbols: boolean
  [key: string]: boolean
}

const Options = ({ setGeneratedPassword }: IOptionsProps) => {
  const [passwordLength, setPasswordLength] = useState<number>(10)
  const [options, setOptions] = useState<Options>({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: true,
  })

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

  const handleOptions = (option: string) => {
    setOptions((prevState: Options) => ({
      ...prevState,
      [option]: !prevState[option],
    }))
  }

  const handleGeneratePassword = () => {
    const password: string = generatePassword(options, passwordLength)

    setGeneratedPassword(password)
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
            <Checkbox
              type="checkbox"
              name="upperCase"
              onChange={(e) => handleOptions(e.target.name)}
              checked={options.upperCase}
            />
            <CustomCheckbox />
            Include Uppercase Letters
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox
              type="checkbox"
              name="lowerCase"
              onChange={(e) => handleOptions(e.target.name)}
              checked={options.lowerCase}
            />
            <CustomCheckbox />
            Include Lowercase Letters
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox
              type="checkbox"
              name="numbers"
              onChange={(e) => handleOptions(e.target.name)}
              checked={options.numbers}
            />
            <CustomCheckbox />
            Include Numbers
          </Label>
        </li>
        <li>
          <Label>
            <Checkbox
              type="checkbox"
              name="symbols"
              onChange={(e) => handleOptions(e.target.name)}
              checked={options.symbols}
            />
            <CustomCheckbox />
            Include Symbols
          </Label>
        </li>
      </CheckboxGroup>

      <PasswordStrength>
        <Text>Strength</Text>
        <Strength>
          {getStrengthPassword()}
          <LevelItem passwordlength={passwordLength} />
          <LevelItem
            passwordlength={passwordLength}
            empty={passwordLength < 7 ? 'false' : 'true'}
          />
          <LevelItem
            passwordlength={passwordLength}
            empty={passwordLength < 9 ? 'false' : 'true'}
          />
          <LevelItem
            passwordlength={passwordLength}
            empty={passwordLength < 13 ? 'false' : 'true'}
          />
        </Strength>
      </PasswordStrength>

      <GenerateBtn type="button" onClick={handleGeneratePassword}>
        Generate <ArrowIcon width={12} />
      </GenerateBtn>
    </OptionsWrapper>
  )
}

export default Options
