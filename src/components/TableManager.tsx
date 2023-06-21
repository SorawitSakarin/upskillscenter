import React from "react";
import { Table, Card, Button, Modal,Form } from "react-bootstrap";
import TableManagerBody from "./TableManagerBody";

interface Props {
  data: Array<any>;
}

const TableManager: React.FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return <p>nothing</p>;
  }
  const headTable = Object.keys(data[0]);

  return (
    <Card className="p-3">
      <Table hover>
        <thead>
          <tr>
            {headTable.map((item, index) => (
              <th key={index}>
                <p>{item.toLocaleUpperCase()}</p>
              </th>
            ))}

            <th key={data.length}>
              <p>ACTIVITY</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <TableManagerBody index={index} item={item} headTable={headTable}/>
            
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default TableManager;
