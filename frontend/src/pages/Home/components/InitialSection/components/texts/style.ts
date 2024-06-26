import styled from "styled-components";

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export const Title = styled.div`
  padding-left: 65px;
  position: relative;
  color: white;
  margin-bottom: 30px;
  height: 100px;
  line-height: 55px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.heading3};

  ::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -9px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    background-color: ${({ theme }) => theme.colors.primary.turquoise};
    z-index: -1;
    padding: 14px 10px;
  }
`;

export const Text = styled.p`
  text-align: justify;
  margin-left: 100px;
  font-size: ${({ theme }) => theme.fontSize.paragraph4};

  p {
    margin-top: 25px;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.heading1};
  color: white;
  span {
    color: ${({ theme }) => theme.colors.primary.turquoise};
  }
`;
