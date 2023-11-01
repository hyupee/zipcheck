export const colors = {
  primary: '#3742FA',
  primaryDark: '#2C35C8',
  secondary: '#2ED573',
  gray: '#E6E6E6',
  black: '#010101',
  white: '#FFFFFF',
} as const;

export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};
