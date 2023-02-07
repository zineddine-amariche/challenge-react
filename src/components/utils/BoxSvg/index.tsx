import { Box } from "@mui/material";
import React from "react";

interface Props {
  width: string;
  height: string;
  mr?: number;
}

export const CustomSVG: React.FC<Props & React.SVGProps<SVGSVGElement>> = ({
  width,
  height,
  mr,

  ...props
}) => {
  return (
    <Box sx={{ mr: mr ? mr : 0  , mt:"1px"}}>
      <svg width={width} height={height} {...props}></svg>
    </Box>
  );
};
