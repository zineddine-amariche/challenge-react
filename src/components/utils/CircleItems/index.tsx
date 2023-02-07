import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import PrimaryText from "../typography";

type Props = {
  text: string;
  color: string;
  textColor?:string
};

const CircleIteme: FC<Props> = ({   textColor,text, color }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: color,
        height: "20px",
        width: "20px",
        borderRadius: "20px",
        display:"flex",
        alignItems:"center", justifyContent:'center'
      }}
    >
      <PrimaryText
        fontWeight={"600"}
        fontSize={"11px"}
        text={text}
        color={textColor ?textColor:theme.palette.primary.dark}
        lineHeight="12px"
      />
    </Box>
  );
};

export default CircleIteme;
