import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Sidebar from "../../components/SideBare";
//  import Navbar from "../../components/Navbar";


const Layout = () => {
  let data ={}
//   const isNonMobile = useMediaQuery("(min-width: 600px)");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
  
     <Box  width="100%" height="100%">
   
      <Box flexGrow={1} >
        <Navbar
        //   user={data || {}}
        //   isSidebarOpen={isSidebarOpen}
        //   setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
     </Box>
  );
};

export default Layout;
