const COLOR = {
  PRIMARY: "#11ff6e",
  SECONDARY: "rgb(1, 255, 111, 0.5)",
  LIGHT_GREEN: "#b1bfb0",
  GRAY: "#7b7c81",
  WHITE: "#fff",
  DARK_GRAY: "#181818",
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

const theme = { COLOR, ALIGN, FONT };

export default theme;
