import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { AllHTMLAttributes, forwardRef } from "react";

import {
  createStyled,
  domElementList,
  filterHTMLAttribute,
  breakPoint,
  createBreakPoint,
  keys as breakPointKeys,
} from "@library/index";

type GridProps = {
  column?: { [size in breakPointKeys]?: number } | number;
  row?: { [size in breakPointKeys]?: number } | number;
  gridGap?:
    | number
    | string
    | {
        row?: number | string;
        column?: number | string;
      };
};
type GridBaseType = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledGrid> & React.RefAttributes<unknown>
>;
type GridTagsType = {
  [tag in keyof JSX.IntrinsicElements]: GridBaseType;
};

interface CreateGrid extends GridBaseType, GridTagsType {}

const GridCss = (props?: GridProps) => css`
  display: grid;
  grid-template-columns: ${(() => {
    if (!props?.column) return null;
    if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
    return `repeat(${props?.column.xl}, 1fr)`;
  })()};
  grid-template-rows: ${(() => {
    if (!props?.row) return null;
    if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
    return `repeat(${props?.row.xl}, 1fr)`;
  })()};
  grid-row-gap: ${(() => {
    if (!props?.gridGap) return null;
    if (typeof props.gridGap === "number") return `${props.gridGap}px`;
    if (typeof props.gridGap === "string") return `${props.gridGap}`;

    if (!props.gridGap.row) return null;
    if (typeof props.gridGap.row === "number") return `${props.gridGap.row}px`;
    if (typeof props.gridGap.row === "string") return `${props.gridGap.row}`;
  })()};
  grid-column-gap: ${(() => {
    if (!props?.gridGap) return null;
    if (typeof props.gridGap === "number") return `${props.gridGap}px`;
    if (typeof props.gridGap === "string") return `${props.gridGap}`;

    if (!props.gridGap.column) return null;
    if (typeof props.gridGap.column === "number") return `${props.gridGap.column}px`;
    if (typeof props.gridGap.column === "string") return `${props.gridGap.column}`;
  })()};

  ${createBreakPoint(breakPoint.xl).breakPointDown} {
    grid-template-columns: ${(() => {
      if (!props?.column) return null;
      if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
      return `repeat(${props?.column.xl}, 1fr)`;
    })()};
    grid-template-rows: ${(() => {
      if (!props?.row) return null;
      if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
      return `repeat(${props?.row.xl}, 1fr)`;
    })()};
  }

  ${createBreakPoint(breakPoint.l).breakPointDown} {
    grid-template-columns: ${(() => {
      if (!props?.column) return null;
      if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
      return `repeat(${props?.column.l}, 1fr)`;
    })()};
    grid-template-rows: ${(() => {
      if (!props?.row) return null;
      if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
      return `repeat(${props?.row.l}, 1fr)`;
    })()};
  }

  ${createBreakPoint(breakPoint.m).breakPointDown} {
    grid-template-columns: ${(() => {
      if (!props?.column) return null;
      if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
      return `repeat(${props?.column.m}, 1fr)`;
    })()};
    grid-template-rows: ${(() => {
      if (!props?.row) return null;
      if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
      return `repeat(${props?.row.m}, 1fr)`;
    })()};
  }

  ${createBreakPoint(breakPoint.s).breakPointDown} {
    grid-template-columns: ${(() => {
      if (!props?.column) return null;
      if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
      return `repeat(${props?.column.s}, 1fr)`;
    })()};
    grid-template-rows: ${(() => {
      if (!props?.row) return null;
      if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
      return `repeat(${props?.row.s}, 1fr)`;
    })()};
  }

  ${createBreakPoint(breakPoint.xs).breakPointDown} {
    grid-template-columns: ${(() => {
      if (!props?.column) return null;
      if (typeof props.column === "number") return `repeat(${props?.column}, 1fr)`;
      return `repeat(${props?.column.xs}, 1fr)`;
    })()};
    grid-template-rows: ${(() => {
      if (!props?.row) return null;
      if (typeof props.row === "number") return `repeat(${props?.row}, 1fr)`;
      return `repeat(${props?.row.xs}, 1fr)`;
    })()};
  }
`;

const StyledGrid = styled(
  forwardRef((props: { tag?: keyof JSX.IntrinsicElements } & GridProps & AllHTMLAttributes<HTMLElement>, ref) => {
    const { tag = "div", ...rest } = props;

    const htmlAttrs = filterHTMLAttribute(rest);

    return React.createElement(tag, { ...htmlAttrs, ref });
  })
)`
  ${(props) => GridCss(props)}
`;

const GridBase: GridBaseType = forwardRef(({ ...rest }: React.ComponentProps<typeof StyledGrid>, ref) =>
  createStyled(StyledGrid)({ ...rest, ref })
);

/**
 * @param tag HTML 태그명 ex) div | form | ul
 * @param column 그리드 레이아웃 행의 개수. (xs, s, m, l, xl은 반응형 분기입니다.)
 * @param row 그리드 레이아웃 열의 개수. (xs, s, m, l, xl은 반응형 분기점입니다.)
 * @param gridGap 그리드 레이아웃 자식들간의 간격
 */
const Grid = GridBase as CreateGrid;

domElementList.forEach((domElement) => {
  Grid[domElement] = forwardRef(({ ...rest }, ref) =>
    createStyled(StyledGrid, domElement)[domElement]({ ...rest, ref })
  );
});

export default Grid;
