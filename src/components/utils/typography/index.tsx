import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  fontSize: any;
  fontWeight: string;
  color?: any;
  text: string ,
  lineHeight?: string;
  mr?: number;
  cursor?:boolean
}

const PrimaryText = ({
  fontSize,
  fontWeight,
  color,
  text,
  lineHeight,
  mr,
  cursor
}: Props) => {
  const theme = useTheme();

  return (
    <Typography
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight ? lineHeight : "30px"}
      sx={{
        color: color ? color : theme.palette.primary.dark,
        mr: mr ? mr : 0,
        cursor:cursor?"pointer":'default'
      }}
    >
      {text}
    </Typography>
  );
};

export default PrimaryText;
