import styled from "styled-components";

export const Container = styled.div<{ $gap: number; $mobileGap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;

  @media (max-width: 768px) {
    gap: ${({ $mobileGap }) => $mobileGap}px;
  }
`;
