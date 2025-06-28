import React from 'react'

type propsTelegramIconT = {
  height?: number
}

export const TelegramIcon: React.FC<propsTelegramIconT> = ({ height = 18 }) => {
  return (
    <svg
      height={height}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9849 0.717797L1.25492 7.5548C0.044919 8.0408 0.0519191 8.7158 1.03292 9.0168L5.58492 10.4368L16.1169 3.7918C16.6149 3.4888 17.0699 3.6518 16.6959 3.9838L8.16292 11.6848H8.16092L8.16292 11.6858L7.84892 16.3778C8.30892 16.3778 8.51192 16.1668 8.76992 15.9178L10.9809 13.7678L15.5799 17.1648C16.4279 17.6318 17.0369 17.3918 17.2479 16.3798L20.2669 2.1518C20.5759 0.912797 19.7939 0.351797 18.9849 0.717797Z"
        fill="#080808"
      />
    </svg>
  )
}
