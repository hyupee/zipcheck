import { createTypographyToken } from '../utils';

export type TypographyVariant =
  | 'headline/28-black'
  | 'headline/24-bold'
  | 'title/18-bold'
  | 'title/16-bold'
  | 'body/14-medium'
  | 'body/13-regular'
  | 'button/15-bold'
  | 'button/13-medium'
  | 'caption/12-regular';

export interface Typography {
  fontSize: string;
  fontWeight: string | number;
  lineHeight: number;
  fontFamily: string;
}

export const typography: Record<TypographyVariant, Typography> = {
  'headline/28-black': createTypographyToken({
    fontSize: 28,
    fontWeight: 900,
    lineHeight: 28 * 1.5,
    fontFamily: 'Pretendard-Black',
  }),
  'headline/24-bold': createTypographyToken({
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 24 * 1.5,
    fontFamily: 'Pretendard-Bold',
  }),
  'title/18-bold': createTypographyToken({
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 18 * 1.5,
    fontFamily: 'Pretendard-Bold',
  }),
  'title/16-bold': createTypographyToken({
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 16 * 1.5,
    fontFamily: 'Pretendard-Bold',
  }),
  'body/14-medium': createTypographyToken({
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 14 * 1.5,
    fontFamily: 'Pretendard-Medium',
  }),
  'body/13-regular': createTypographyToken({
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 13 * 1.5,
    fontFamily: 'Pretendard-Regular',
  }),
  'button/15-bold': createTypographyToken({
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 15 * 1.5,
    fontFamily: 'Pretendard-Bold',
  }),
  'button/13-medium': createTypographyToken({
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 13 * 1.5,
    fontFamily: 'Pretendard-Medium',
  }),
  'caption/12-regular': createTypographyToken({
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 12 * 1.5,
    fontFamily: 'Pretendard-Regular',
  }),
};
