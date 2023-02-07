import { Box, TablePagination, useTheme } from "@mui/material";
import React from "react";
import PrimaryText from "../../typography";

const Pagination = () => {
  const theme = useTheme();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const num = 150 / rowsPerPage + 1;
  const numbers = [];

  for (let i = 1; i <= num; i++) {
    numbers?.push(i);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 5,
          width: "110px",
          overflow: "hidden",
        }}
      >
        {numbers.map((number, index) => (
          <Box
            sx={{
              width: "25px",
              height: "25px",
              backgroundColor: "#000",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
              padding: "15px",
            }}
          >
            <PrimaryText
              fontWeight={"700"}
              fontSize={"10px"}
              text={number.toString()}
              color={theme.palette.primary.light}
            />
          </Box>
        ))}
      </Box>
      <TablePagination
        component="div"
        count={150}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
      />
    </Box>
  );
};

export default Pagination;
