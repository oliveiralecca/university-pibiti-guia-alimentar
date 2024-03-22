import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.turquoise};

  padding: 50px 130px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;

  margin-top: 50px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.gray};
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary["light-blue"]};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 4px;

  margin: 40px 0;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #91e3ef 0%,
    rgba(50, 121, 79, 0) 100%
  );
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 40px;

  margin-bottom: 50px;
`;

export const MediaButton = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.secondary["light-blue"]};

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: 0px 3.238095283508301px 3.238095283508301px 0px #00000040;
`;
