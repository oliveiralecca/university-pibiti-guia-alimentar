import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const StyledSelect = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.black.white};
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-position: right 10px center;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.colors.black[300]}6a;
  border-radius: ${({ isOpen }) => (isOpen ? "9.6px 9.6px 0 0" : "9.6px")};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.black[600]};
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.pink};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  background-color: ${({ theme }) => theme.colors.black.white};
  border: 2px solid ${({ theme }) => theme.colors.black[300]}6a;
  border-top: none;
  border-radius: 0 0 9.6px 9.6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: scroll;
`;

export const Option = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black[600]};
  background-color: ${({ theme }) => theme.colors.black.white};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[200]};
  }

  &:last-child {
    border-radius: 0 0 9.6px 9.6px;
  }
`;
