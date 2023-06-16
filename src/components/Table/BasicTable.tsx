import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import columnFilter from "../../utils/column_filter";
import data from "../../data.json";
import { makeData } from "../../utils/makeData";
import { RowTable } from "./RowTable";
import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
//GENERATETEMPLATE GIVES ME ACCESS TO THE COLUMNS TITLE AND TYPE
export const generateTemplate = () => {
  const filteredData: any = [];
  for (const column of data.columns) {
    filteredData.push(columnFilter(column, ["id", "ordinalNo", "width"]));
  }
  //filteredData=[{tile:"age",type:"number"},{...},{...}]

  return filteredData;
};
//CREATEDATA takes row object such as {name:"itai",last name:"mizlish",....} and validates it
// then put it to an object with id and matches it to the columns' titles (skipping the id bit)
export function createData(rowData: any) {
  const dataTemplate = generateTemplate();

  const row: any = { id: crypto.randomUUID() };
  for (const [key, value] of Object.entries(rowData)) {
    if (!dataTemplate.map((a: any) => a.title).includes(key)) {
      throw new Error("Not valid column title");
    }
    row[key] = value;
  }

  for (const title in dataTemplate) {
    //this control flow is important for filling the empty data with blank
    if (
      row[dataTemplate[title].title] === null &&
      row[dataTemplate[title].title] !== false
    ) {
      row[dataTemplate[title].title] = " ";
    }
  }
  return row;
}
// if there is real data in "data.json" go over it, otherwise fill with fake data
export const rows = data.rows.length > 0 ? [] : makeData(25);
if (data.rows.length > 0) {
  for (const row in data.rows) {
    rows.push(createData(data.rows[row]));
  }
}

const BasicTable = () => {
  const { filters, columns }: any = useContext(FiltersContext);
  // checks if the filters is filled with all cols(which means the table empty)
  // in this case return this funny gif
  if (filters.length === columns.length) {
    return <img src="empty.gif" alt="gif" />;
  }
  return (
    <TableContainer
      component={Paper}
      style={{
        borderRadius: "8px",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        height: "40vh",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          {/* THE TABLE HEADER WITH THE COLUMNS' TITLES WITH FILTERING ACCORDINGLY TO THE FILTERS */}
          <TableRow>
            {columns
              .filter((col: any) => !filters.includes(col.title))
              .map((column: any) => (
                <TableCell
                  style={{
                    width: `${column.width}px`,
                    textTransform: "capitalize",
                  }}
                  key={column.id}
                >
                  {column.title}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: any) => {
            //onEdit receives a new row and updates it in its location in the data
            const onEdit = (updatedRow: any) => {
              rows[index] = updatedRow;
            };

            return (
              <RowTable
                columns={columns}
                key={row.id}
                row={row}
                onEdit={onEdit}
                filters={filters}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
