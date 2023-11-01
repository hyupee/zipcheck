interface CreateTypographyTokenParams {
  fontSize: number;
  fontWeight: string | number;
  lineHeight: number;
  fontFamily: string;
}

export const createTypographyToken = (params: CreateTypographyTokenParams) => {
  return {
    fontSize: `${params.fontSize}px`,
    fontWeight: params.fontWeight,
    lineHeight: params.lineHeight,
    fontFamily: params.fontFamily,
  };
};
