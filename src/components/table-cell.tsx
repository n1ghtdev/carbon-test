import styled from "styled-components";

const TableCell = styled.td`
  text-align: center;
  padding: 10px 5px;
  background: #ddd;

  & > table td {
    background: #eee;
  }
`;

export default TableCell;
