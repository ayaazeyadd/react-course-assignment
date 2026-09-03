import React from "react";
import styled, { css } from "styled-components";

// Styled Components styling approach.
// The look of the badge is defined entirely in JS, scoped to this component.
const StyledBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  ${(props) =>
    props.$type === "pass" &&
    css`
      background: #dcfce7;
      color: #15803d;
    `}

  ${(props) =>
    props.$type === "fail" &&
    css`
      background: #fee2e2;
      color: #b91c1c;
    `}

  ${(props) =>
    props.$type === "new" &&
    css`
      background: #dbeafe;
      color: #1d4ed8;
    `}
`;

// Reusable component. Receives "type" and "text" via props.
function Badge({ type, text }) {
  return <StyledBadge $type={type}>{text}</StyledBadge>;
}

export default Badge;
