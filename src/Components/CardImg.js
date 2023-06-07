import styled, { css } from "styled-components";
import { colors, fonts } from "../data/Global";

export const CardImg = styled.img`
  width: 100%;
  border: 3px solid ${colors.primary};
  transition: all 0.3s;

  &:hover{
  border: 3px solid ${colors.primaryHover};
  }
`;