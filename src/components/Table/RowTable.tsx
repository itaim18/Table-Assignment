import TableRow from "@mui/material/TableRow";
import columnFilter from "../../utils/column_filter";
import { generateTemplate } from "./BasicTable";
import { MyTableCell } from "./MyTableCell";
import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
export const RowTable = ({ row, onEdit, columns }: any) => {
  const { filters }: any = useContext(FiltersContext);
  //onUpdate receives the field in row that needs update[key] and what needs to be placed[value]
  //it then gets the row and move it up to the onEdit to save in the rows
  const onUpdate = (value: string | boolean, key: string) => {
    row[key] = value;
    onEdit(row);
  };
  //filter the row by the filters
  const filteredRow = columnFilter(row, filters);

  const getType = (key: string) => {
    //create the columns' data
    const cols = generateTemplate();
    // extract the array of columns titles and find the index of the title[key] passed
    const index = cols.map((col: any) => col.title).indexOf(key);
    //return its type
    return cols[index].type;
  };

  return (
    <TableRow>
      {/* for all the values of row find its key by position in row,
       once I have the key[such as: email, age etc.]
        find its type by the columns' data 
       */}
      {Object.values(filteredRow).map((cell, index) => {
        const key = Object.keys(filteredRow)[index];
        const type = getType(key);

        return (
          <MyTableCell
            columns={columns}
            key={`${row.id}-${cell}`}
            row={row}
            cell={cell}
            type={type}
            onUpdate={(value: string | boolean) => onUpdate(value, key)}
          />
        );
      })}
    </TableRow>
  );
};
