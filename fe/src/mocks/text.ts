import styled from 'styled-components';

interface TextProps {
  weight?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Text = styled.span<TextProps>`
  font-weight: ${({ weight }) => weight || 'normal'};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  color: ${({ color }) => color || '#000'};
  ${({ style }) => style && { ...style }};
`;
