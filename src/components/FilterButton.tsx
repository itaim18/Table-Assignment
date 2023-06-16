import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";
export default function FilterButton() {
  const { filters, setFilter, columns }: any = useContext(FiltersContext);
  // built in state that controls the display of the filters menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //function that resolves the display settings
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //upon choosing the filter closing the menu and decides wether to add the filter or remove it
  const handleClose = (title: string) => {
    setAnchorEl(null);
    setFilter(title);
  };

  return (
    <div style={{ alignItems: "end", textAlign: "right" }}>
      {/* BUTTON RESPONSIBLE FOR OPEN/CLOSE THE FILTERS MENU */}
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterListIcon />
      </Button>
      {/* MENU GOES OVER THE COLUMNS AND DRAG THE TITLES FOR ITS FILTERS MENU */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {columns.map((column: any) => (
          <MenuItem key={column.id} onClick={() => handleClose(column.title)}>
            {/* IF THE FILTER IS ALREADY INCLUDED IN FILTERS REMOVE THE ✔️ TO SIGN TO THE USER WETHER IT IS SHOWN ORT HIDDEN  */}
            {!filters.includes(column.title) ? (
              <CheckIcon />
            ) : (
              <div style={{ paddingRight: "24px" }}></div>
            )}

            {column.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
