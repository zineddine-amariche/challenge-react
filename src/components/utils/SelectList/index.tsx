import { ArrowDropDownOutlined } from "@mui/icons-material";
import { Button, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ArrowDown } from "../../../assets/supportIcon";
import CircleIteme from "../CircleItems";
import FlexBetween from "../FlexBetween";
import MainContainer from "../mainContainer";
import PrimaryText from "../typography";

const SelectList = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          gap: "1rem",
          backgroundColor: "#fff",
          mr:"20px"
        }}
      >
        <MainContainer sx={{}}>
          <PrimaryText
            fontWeight={"700"}
            fontSize={"15px"}
            text={"All Tickets"}
            color={theme.palette.primary.dark}
            mr={1}
          />
          <CircleIteme color={theme.palette.grey[200]} text="10" />
        </MainContainer>
        <ArrowDown />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left"  }}
       
      >
        <MenuItem onClick={handleClose}>
          <PrimaryText
            fontWeight={"400"}
            fontSize={"13px"}
            text={"Open"}
            color={theme.palette.primary.dark}
            mr={1}
            lineHeight="25px"
          />

          <CircleIteme
            color={theme.palette.primary.main}
            text="5"
            textColor={theme.palette.primary.light}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PrimaryText
            fontWeight={"400"}
            fontSize={"13px"}
            text={"Feedback"}
            color={theme.palette.primary.dark}
            mr={1}
            lineHeight="25px"
          />

          <CircleIteme
            color={theme.palette.secondary.contrastText}
            text="12"
            textColor={theme.palette.primary.light}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PrimaryText
            fontWeight={"400"}
            fontSize={"13px"}
            text={"Resolved"}
            color={theme.palette.primary.dark}
            mr={1}
            lineHeight="25px"
          />

          <CircleIteme
            color={theme.palette.secondary.dark}
            text="10"
            textColor={theme.palette.primary.light}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default SelectList;
