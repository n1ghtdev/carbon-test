export type Device = {
  modName: string;
  modVersion: number;
  driver?: string;
  port?: string;
  status?: number;
  statusDescr?: string;
  papperState?: number;
  type?: string;
  version?: string;
  options?: DeviceOption[];
  products?: DeviceProduct[];
};

export type DeviceOption = {
  merchantIdx: string;
};

export type DeviceProduct = {
  class: string;
  count: number;
  name: string;
};

export type DeviceTreeTypeMap = {};
