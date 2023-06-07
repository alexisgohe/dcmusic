import styled, { css } from "styled-components";
import { colors, fonts } from "../data/Global";

export const TitleCategory = styled.span`
  width: 300px;
  padding: 10px 5px;
  color: ${colors.white};
  font-family: ${fonts.roboto.font};
  font-weight: ${fonts.roboto.weight};
  font-size: ${fonts.roboto.size};
  text-align: ${fonts.roboto.aling};

  ${(props) =>
    props.$banner &&
    css`
      background: ${colors.primary};

      &:hover {
        background: ${colors.primary};
      }
    `};
`;
