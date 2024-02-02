import React from 'react';

const Header = ({ onDarkModeClick, isDarkMode }) => {
  return (
    <div>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Header;
