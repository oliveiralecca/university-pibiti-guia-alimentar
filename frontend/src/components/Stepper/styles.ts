import styled from "styled-components";

export const StepperContainer = styled.div`
  width: 100%;

  span.MuiStepLabel-label {
    color: red;
    font-family: "Open Sans", sans-serif;
    color: ${(props) => props.theme.colors.neutral.gray};
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 400;
  }

  text.MuiStepIcon-text {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    line-height: 1.4rem;
    font-weight: 400;
  }

  svg.Mui-active {
    color: ${({ theme }) => theme.colors.secondary.pink};
  }

  svg.Mui-completed {
    color: ${({ theme }) => theme.colors.secondary["dark-blue"]};
  }
`;

export const contentBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 0",
};

export const buttonsBoxStyle = (activeStep: number, blocks: string[]) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent:
      activeStep < blocks.length + 1 ? "space-between" : "flex-end",
    pt: 2,
  };
};
