export const colors = {
  primary: '#3742FA',
  primaryDark: '#2C35C8',
  secondary: '#2ED573',
  gray: '#E6E6E6',
  gray100: '#F3F3F3',
  gray600: '#b8b8b8',
  gray900: '#2E2E2E',
  black: '#010101',
  white: '#FFFFFF',
} as const;

export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};
