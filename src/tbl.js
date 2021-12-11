import React from "react";
import {
  Header,
  HeaderContainer,
  SideNav,
  Table
} from "carbon-addons-iot-react";
export function Tbl(props) {
  return (
    <Table
      columns={[{ id: "key", name: "key" }, { id: "val", name: "Value" }]}
      data={[
        { id: "1", values: { key: "one", val: 1 } },
        { id: "2", values: { key: "two", val: 2 } }
      ]}
      lightweight={true}
    />
  );
}
