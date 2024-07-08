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

    @media (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 1.2rem;
    }
  }

  text.MuiStepIcon-text {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    line-height: 1.4rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
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
  margin: "100px 0 84px 0",

  "@media (max-width: 768px)": {
    margin: "50px 0 42px 0",
  },
};

export const buttonsBoxStyle = (activeStep: number, blocks: string[]) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent:
      activeStep < blocks.length + 1 ? "space-between" : "flex-end",
    pt: 2,

    "@media (max-width: 768px)": {
      alignItems: "center",
      gap: "10px",
      padding: "0 20px",
      pt: 1,
    },
  };
};
