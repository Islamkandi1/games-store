import React from "react";
import Pagination from "@mui/material/Pagination";
const Mypagination = ({ getPage, currentPage }) => {
  const isDark = localStorage.theme == "dark" ? "white" : "dark";
  return (
    <>
      <Pagination
        count={300}
        onChange={(event, value) => getPage(value)}
        page={currentPage}
        color="success"
        sx={{
          "& .MuiPaginationItem-root": {
            color: isDark,
          },
        }}
      />
    </>
  );
};

export default Mypagination;
