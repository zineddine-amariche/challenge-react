import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ChevronLeft,
} from "@mui/icons-material";

// import profileImage from "../../assets/user.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { setMode } from "../../Redux";
import { useNavigate } from "react-router-dom";
import { setMode } from "../../../Redux";
import FlexBetween from "../../utils/FlexBetween";

// interface Props {
//   user: any;
//   isSidebarOpen: boolean;
//   setIsSidebarOpen?: any;
// }

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navigate = useNavigate();

  const mode = useSelector((state: any) => state.global.mode);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backgroundColor: theme.palette.primary.dark,
        }}
      >
    

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode == "dark" ? (
              <DarkModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.contrastText,
                }}
              />
            ) : (
              <LightModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.contrastText,
                }}
              />
            )}
          </IconButton>

          <FlexBetween>
            {/* <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
               <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              /> 
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  {"reda bekka"}
                </Typography>
                <Typography
                  fontSize=".8rem"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: "500",
                  }}
                >
                  {"occupation"}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "25px",
                }}
              />
            </Button> */}
            {/* <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate(`/${"profile"}`);
                }}
              >
                My profile
              </MenuItem>
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu> */}
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
