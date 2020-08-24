import React from "react";

import Table from "../components/table";
import TableHead from "../components/table-head";
import TableRow from "../components/table-row";
import TableCell from "../components/table-cell";
import TableBody from "../components/table-body";
import DeviceInnerTable from "./device-inner-table";

import { getUniquePropertyNames } from "../utils/getUniquePropertyNames";
import { Device } from "../types";

type Props = {
  devices: Device[];
  types: any[];
};

function DeviceTable({ devices, types }: Props) {
  const headCells = getUniquePropertyNames<Device>(devices);

  return (
    <Table>
      <TableHead cells={headCells} />
      <TableBody>
        {devices.map((device: Device) => {
          const deviceEntries = Object.entries(device);

          return (
            <TableRow key={device.modName}>
              {deviceEntries.map(([propKey, val]: [any, any]) => {
                if (Array.isArray(val)) {
                  const innerTypes = types[0][propKey];

                  return (
                    <TableCell key={propKey}>
                      <DeviceInnerTable data={val} types={innerTypes} />
                    </TableCell>
                  );
                }

                return <TableCell key={propKey}>{val}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DeviceTable;
