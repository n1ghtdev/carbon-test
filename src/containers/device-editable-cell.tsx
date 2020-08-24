import React from "react";

import TableCell from "../components/table-cell";

type Props = {
  initialValue: string | number;
};

function DeviceEditableCell({ initialValue }: Props) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <TableCell>
      <input value={value} onChange={handleChange} />
    </TableCell>
  );
}

export default DeviceEditableCell;
