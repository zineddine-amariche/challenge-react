import React from "react";
import TextField from "@mui/material/TextField";
import { Box, InputBase } from "@mui/material";
import { useTheme } from "@mui/material";
import PrimaryText from "../typography";
import { SearchIcon } from "../../../assets/supportIcon";

interface Props {
  value: string;
  width?: string;
  placeholder:string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = ({ width,placeholder, value, onChange }) => {
  const theme = useTheme();

  return (
    <form noValidate autoComplete="off">
      <Box
        sx={{
          bgcolor: "#F2F2F2",
          width: width ? width : "370px",
          height: "40px",
          overflow: "hidden",
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box sx={{ ml: 2 }}>
          <SearchIcon />
        </Box>
        <InputBase
          id="standard-basic"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          sx={{ ml: 2, flex: 1, height: 40, color: "#000" }}
        />
      </Box>
    </form>
  );
};
