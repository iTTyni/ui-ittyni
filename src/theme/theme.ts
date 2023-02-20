import { IThemeInterface } from ".";


export const darkTheme: IThemeInterface = {
  globals : {
    backgroundColor : "#000000",
    margin: 0,
    padding: 0
  },
  color: {
    defaultColor: "#00000",
    primaryColor: "#e9e9eb",
    secondaryColor: "#2a2c39",
    thirdColor: "#F2F4F6",
    fourthColor: "#423030"
  },
  font: {
    fontSize: 12,
    fontFamily: 'roboto'
  },
  windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
};


export const lightTheme: IThemeInterface = {
  globals : {
    backgroundColor : "#ffffff",
    margin: 0,
    padding: 0
  },
  color: {
    defaultColor: "#ffffff",
    primaryColor: "#ffffff",
    secondaryColor: "#2a2c39",
    thirdColor: "#F2F4F6",
    fourthColor: "#423030"
  },
  font: {

    fontSize: 12,
    fontFamily: 'roboto'

  },
  windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

}