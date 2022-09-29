const {createContext} = require("react")

export const ThemeContext = createContext();
export const ThemeToggle = (state, action) => {

    if (state === "dark"){
      return "light"
    }else if (state === "light"){
      return "dark"
    }else{
      throw Error();
    }

  }