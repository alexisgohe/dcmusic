import styled, { css } from "styled-components";
import { colors, fonts } from "../data/Global";

export const ButtonAction = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  font-family: ${fonts.source.font};
  font-weight: ${fonts.source.weight};
  font-size: ${fonts.source.size};
  line-height: ${fonts.source.line};
  text-align: ${fonts.source.aling};
  border: 1px solid ${colors.white};
  transition: all 0.3s;

  ${(props) =>
    props.$nav &&
    css`
      background: transparent;
      color: ${colors.white};

      &:hover {
        color: ${colors.black};
        background: ${colors.white};
      }
    `};
`;
