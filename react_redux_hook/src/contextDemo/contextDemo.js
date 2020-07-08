import React, { useState, useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function ContextApp() {
  const [ theme, setTheme ] = useState(1)
  return (
    <ThemeContext.Provider value={ theme === 1 ? themes.light : themes.dark}>
      <br />
      <button onClick={ () => setTheme(1-theme) }>Toggle Theme</button>
      <hr />
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton /><br /><br />
      <ThemedButton /><br /><br />
      <ThemedButton /><br /><br />
      <ThemedButton /><br /><br />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default ContextApp;