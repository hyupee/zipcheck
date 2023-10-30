export const colors = {
  primary: '#3742FA',
  secondary: '#2ED573',
  black: '#010101',
  gray: '#E6E6E6',
} as const;

export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};
