const COLOR = {
  PRIMARY: "#11ff6e",
  SECONDARY: "rgb(1, 255, 111, 0.5)",
  LIGHT_GREEN: "#b1bfb0",
  GRAY: "#7b7c81",
  WHITE: "#fff",
  DARK_GRAY: "#181818",
};

const darkTheme = {
  bgColor: "#0f1012",
  textColor: "#f8f8f8",
  footerColor: "#181818",
  primary: "#11ff6e",
};

const lightTheme = {
  bgColor: "#fff",
  textColor: "#4d524d",
  footerColor: "#F2F5F8",
  primary: "#1ddb66",
};

const ALIGN = {
  ROW_CENTER: `
      display: flex;
      justify-content: center;
      align-items: center
      `,
  COLUMN_CENTER: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  ROW_SPACE_BETWEEN: `
    display: flex;
    justify-content: space-between;
    align-items: center;
    `,
};

const FONT = {
  PRETENDARD_LIGHT: "Pretendard-Light",
  PRETENDARD_REGULAR: "Pretendard-Regular",
  PRETENDARD_MEDIUM: "Pretendard-Medium",
  PRETENDARD_BOLD: "Pretendard-Bold",
};

const theme = { COLOR, ALIGN, FONT, darkTheme, lightTheme };

export default theme;
