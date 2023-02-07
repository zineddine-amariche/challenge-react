import React, { FC } from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Column: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      {children}
    </Box>
  );
};

export default Column;
