import TableCell from "@mui/material/TableCell";
import { useState, useId } from "react";
import { generateTemplate } from "./BasicTable";

export const MyTableCell = ({ cell, type, onUpdate, row, columns }: any) => {
  //set the state with the initial value
  const [val, setVal] = useState(cell);
  //create id for input in case of boolean type cell
  const id = useId();
  // find the key for this cell using this row and cell
  let key: any = null;
  for (const [k, v] of Object.entries(row)) {
    if (v === cell) {
      key = k;
      break;
    }
  }
  //find its cell width using the columns and key
  const colWidth = columns.find((col: any) => {
    return col.title === key;
  })?.width;
  //returns the type of input
  const inputType =
    type === "string" ? "text" : type === "boolean" ? "checkbox" : "number";
  //using the eventData to change the value
  //then move up the value in target to create new row to update the rows
  const onChange = (target: any) => {
    //take the "value" for number and string
    // or take the "checked" if boolean
    const txt = target.value;
    const { checked } = target;
    if (inputType === "checkbox") {
      setVal((prevState: any) => !prevState);
      onUpdate(checked);
    } else {
      setVal(txt);
      onUpdate(txt);
    }
  };

  return (
    <TableCell
      style={{
        padding: 0,
        width: `${colWidth}px`,
        textAlign: "center",
      }}
    >
      <input
        style={{
          padding: 12,
          width: inputType === "checkbox" ? 0 : `${colWidth}px`,
        }}
        id={id}
        type={inputType}
        checked={inputType === "checkbox" ? val : null}
        value={val}
        onChange={(e) => onChange(e.target)}
      />
      {inputType === "checkbox" && (
        <label
          htmlFor={id}
          style={{ width: `${colWidth}px`, fontSize: "16px" }}
        >
          {val ? "Yes" : "No"}
        </label>
      )}
    </TableCell>
  );
};
