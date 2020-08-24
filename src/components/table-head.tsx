import React from "react";
import styled from "styled-components";

import TableRow from "./table-row";
import TableCell from "./table-cell";

type Props = {
  cells: string[];
};

const Wrapper = styled.thead``;

function TableHead({ cells }: Props) {
  return (
    <Wrapper>
      <TableRow>
        {cells.map((cell: string) => (
          <TableCell key={cell} style={{ background: "#fff" }} as="th">
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </Wrapper>
  );
}

export default TableHead;
