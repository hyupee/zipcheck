export const colors = {
  primary: '#3742FA',
  secondary: '#2ED573',
  gray: '#E6E6E6',
  black: '#010101',
  white: '#FFFFFF',
} as const;

export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};
