const upperCase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase: string = 'abcdefghijklmnopqrstuvwxyz'
const numbers: string = '0123456789'
const symbols: string = '!@#$%^&*()_+~`|}{[]:;?><,./-='

type Options = {
  upperCase: boolean
  lowerCase: boolean
  numbers: boolean
  symbols: boolean
}

export const generatePassword = (options: Options, length: number) => {
  let password: string = ''
  let chars: string = ''

  if (options.upperCase) chars += upperCase
  if (options.lowerCase) chars += lowerCase
  if (options.numbers) chars += numbers
  if (options.symbols) chars += symbols

  const array = new Uint32Array(length)
  window.crypto.getRandomValues(array)

  for (let i = 0; i < length; i += 1) {
    password += chars[array[i] % chars.length]
  }

  return password
}
