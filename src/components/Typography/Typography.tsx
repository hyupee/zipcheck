import { PropsWithChildren } from 'react';
import styled, { css } from '@emotion/native';
import {
  Typography as TypographyType,
  TypographyVariant,
} from '@/libs/theme/typography/typography';
import { colors, getColor } from '@/libs/theme/colors';

interface Props {
  variant: TypographyVariant;
  color?: keyof typeof colors;
}

export const Typography = ({
  children,
  variant,
  color,
}: PropsWithChildren<Props>) => {
  return (
    <Text variant={variant} color={color}>
      {children}
    </Text>
  );
};

const Text = styled.Text<Pick<Props, 'variant' | 'color'>>`
  ${({ theme, variant, color }) => {
    const props: TypographyType = theme.typography?.[variant] ?? {};

    return css`
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight};
      line-height: ${props.lineHeight};
      color: ${color ? getColor(color) : '#5F5F5F'};
      font-family: ${props.fontFamily};
    `;
  }}
`;
