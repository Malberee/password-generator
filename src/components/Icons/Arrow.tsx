import React from 'react'

interface IIconProps {
  width: number
}

const ArrowIcon = ({ width = 24 }: IIconProps) => (
  <svg
    width={width + 'px'}
    height={width + 'px'}
    xmlns="http://www.w3.org/2000/svg"
    fill="#24232C"
  >
    <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"></path>
  </svg>
)

export default ArrowIcon