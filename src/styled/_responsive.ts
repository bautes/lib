import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";
import { breakpoints } from "./_variables";

export const mobileOnly = (
  first: CSSObject | TemplateStringsArray,
  interpolations?: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${breakpoints.sm}) {
    ${css(first, interpolations)};
  }
`;

export const tabletOnly = (
  first: CSSObject | TemplateStringsArray,
  interpolations?: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    ${css(first, interpolations)};
  }
`;

export const desktopOnly = (
  first: CSSObject | TemplateStringsArray,
  interpolations?: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${breakpoints.lg}) {
    ${css(first, interpolations)};
  }
`;

export const tabletUp = (
  first: CSSObject | TemplateStringsArray,
  interpolations?: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${breakpoints.md}) {
    ${css(first, interpolations)};
  }
`;
