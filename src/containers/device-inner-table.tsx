import React from "react";

import Table from "../components/table";
import TableHead from "../components/table-head";
import TableRow from "../components/table-row";
import TableCell from "../components/table-cell";
import TableBody from "../components/table-body";
import DeviceEditableCell from "./device-editable-cell";

import { getUniquePropertyNames } from "../utils/getUniquePropertyNames";
import { filterEmptyObjects } from "../utils/filterEmptyObjects";
import { DeviceProduct, DeviceOption } from "src/types";

type Props = {
  data: DeviceProduct[] | DeviceOption[];
  types: any[];
};

function DeviceInnerTable({ data, types }: Props) {
  const headCells = getUniquePropertyNames<DeviceProduct | DeviceOption>(data);

  return (
    <Table>
      <TableHead cells={headCells} />
      <TableBody>
        {(data as Array<DeviceProduct | DeviceOption>).map(
          (row: DeviceProduct | DeviceOption, idx: number) => {
            const entries = Object.entries(row);

            return (
              <TableRow key={idx}>
                {entries.map(([key, value]: [any, any]) => {
                  const innerTypes = filterEmptyObjects(types);
                  const isCellEditable = innerTypes[0] && innerTypes[0][key];

                  if (isCellEditable) {
                    return (
                      <DeviceEditableCell key={key} initialValue={value} />
                    );
                  }

                  return <TableCell key={key}>{value}</TableCell>;
                })}
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
}

export default DeviceInnerTable;
