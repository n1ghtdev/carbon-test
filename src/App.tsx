import React from "react";

import data from "./data.json";
import DeviceTable from "./containers/device-table";

function App() {
  const devices: any = data.api.deviceTree;
  const types: any = data.api.deviceTreeTypeMap;

  return (
    <div style={{ margin: "25px" }}>
      {Object.keys(devices).map((key: string) => (
        <div key={key}>
          <h2>{key}</h2>
          <DeviceTable key={key} devices={devices[key]} types={types[key]} />
        </div>
      ))}
    </div>
  );
}

export default App;
