import { useState } from "react";
import "./App.css";
import BasicTable from "./components/Table/BasicTable";
import FilterButton from "./components/FilterButton";
import Manual from "./components/Manual";
import { FiltersContext } from "./context/FiltersContext";
import { columns } from "./utils/makeData";

function App() {
  // state for the filters ideally will look something like: ["name","age"]
  const [filters, setFilters] = useState<any>([]);
  //takes the columns and add UUID as id

  //SETFILTER checks if the filter is in the filters and add if it's not, remove if it is
  const setFilter = (checker: string) => {
    let newFilters = [];
    if (!filters.includes(checker)) {
      newFilters = [...filters, checker];
    } else {
      newFilters = [...filters].filter((a) => a !== checker);
    }
    setFilters(newFilters);
  };

  return (
    // HERE IS THE APP CONSTRUCTION
    <FiltersContext.Provider value={{ filters, setFilter, columns }}>
      <div>
        <div
          style={{
            border: "solid",
            borderRadius: "8px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {/* THE FILTERBUTTON GOES OVER THE COLUMNS AND TRACKS WHAT WILL BE HIDDEN */}
          <FilterButton />
          {/* BASICTABLE DISPLAYS THE DATA */}
          <BasicTable />
        </div>
        {/* MANUAL WILL HELP THE USER UNDERSTAND HOW TO TWEAK STUFF */}
        <Manual />
      </div>
    </FiltersContext.Provider>
  );
}

export { App };
