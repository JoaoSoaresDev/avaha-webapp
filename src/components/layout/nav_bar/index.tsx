import {
  AppBar,
  Box,
  Toolbar,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import Logo from "@/assets/img/Avaha Logo.svg";
import { NavItems } from "@/components/layout/nav_items";

export const NavBar = () => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar position={"sticky"} elevation={trigger ? 4 : 0}>
        <Toolbar
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: theme.palette.surface.main,
          }}
        >
          {/*TODO: Change logo from black to purple*/}
          <Box
            component={"img"}
            src={Logo}
            sx={{
              width: 208,
              height: "auto",
              mb: 1,
            }}
          />
          <NavItems />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
