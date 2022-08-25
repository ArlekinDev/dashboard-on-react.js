import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`duration-[600ms]  text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} dark:text-light-gray dark:hover:bg-gray-600`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;