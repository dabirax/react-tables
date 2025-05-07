import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime/runtime";


const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChanging = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <span>
      Search: {""}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChanging(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
