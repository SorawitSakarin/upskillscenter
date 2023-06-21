import React from "react";
import { Table } from "react-bootstrap";

interface Props {
  head: string; // String split with comma
  body: string; // String split with comma
}

const TableCSV: React.FC<Props> = ({ head, body }) => {
  let headArr = head.split(",");
  let bodyArr = body.split("\n").slice(1, body.split("\n").length + 1);

  if (!bodyArr) {
    return <p>nothing</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headArr.map((item, index) => (
            <th key={index}>
              <p>{item}</p>
            </th>
          ))}{" "}
        </tr>
      </thead>

      <tbody>
        {bodyArr.map((item, index) => (
          <tr key={index}>
            {item.split(",").map((e, i) => (
              <td key={i}>
                <p>{e}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableCSV;
