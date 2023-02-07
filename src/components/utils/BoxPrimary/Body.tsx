import React, { FC } from 'react';
import { Box } from "@mui/material";


type Props = {
    children: React.ReactNode;
  };


const Body: FC<Props>  = ({children}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "45%",
        alignSelf: "center",
        marginTop: "30px",
        padding: "30px 0px 30px 0px",
        borderRadius: "4px",
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
