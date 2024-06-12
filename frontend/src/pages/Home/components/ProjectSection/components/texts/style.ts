import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  margin: auto;
  height: 100%;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: ${({ theme }) => theme.fontSize.heading3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 45px 0;

  span {
    margin-left: 7.2px;
    font-size: ${({ theme }) => theme.fontSize.heading1};
    color: ${({ theme }) => theme.colors.secondary["green-blue"]};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph3};
  text-align: justify;
  color: ${({ theme }) => theme.colors.black[700]};
  line-height: 25px;

  p {
    margin-top: 30px;
  }

  :first-child {
    margin-top: 0;
  }
`;
