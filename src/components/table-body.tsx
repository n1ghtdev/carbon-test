import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.tbody``;

function TableBody({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default TableBody;
