import { numberToLocaleStringKR } from './number';

const UNIT = 10_000;

export const formatPriceKo = (price: number) => {
  const hmNumber = getHundredMillionNumber(price);

  const leftPrice = price - hmNumber * UNIT;

  const millionNumber = numberToLocaleStringKR(leftPrice);

  return `${getHundredMillionWithUnit(hmNumber)}${millionNumber}`;
};

const getHundredMillionWithUnit = (price: number) =>
  price ? `${price}억 ` : '';

const getHundredMillionNumber = (price: number) =>
  price >= UNIT ? Math.floor(price / UNIT) : 0;
