import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import ColumnOrder from "./components/ColumnOrder";
import ColumnHidiing from "./components/ColumnHiding";

function App() {
  return (
    <div >
      <ColumnHidiing />
    </div>
  );
}

export default App;
