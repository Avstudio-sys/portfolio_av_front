import React from 'react'

type propsCornerT = {
  height?: number
}

export const CornerIcon: React.FC<propsCornerT> = ({ height = 9 }) => {
  return (
    <svg
      width="11"
      height={height}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.32031 8.83398L0.12416 0.833984L10.5165 0.833985L5.32031 8.83398Z"
        fill="#080808"
      />
    </svg>
  )
}
