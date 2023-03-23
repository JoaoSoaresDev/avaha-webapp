import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import "@fontsource/inter";
import { useNavigate } from "react-router-dom";

const NavItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: "transparent",
    transform: "scale(1.1)",
  },
}));

const NavItemTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 650,
  fontSize: 35,
  color: theme.palette.primary.main,
}));

export const NavItems = () => {
  const theme = useTheme();
  const navigation = useNavigate();

  return (
    <Box display={"flex"} gap={5}>
      <List sx={{ display: "flex", alignItems: "center" }}>
        <ListItem>
          <NavItemButtonStyled onClick={() => navigation("/")}>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Home</NavItemTextStyled>
              }
            />
          </NavItemButtonStyled>
        </ListItem>
        <ListItem>
          <NavItemButtonStyled onClick={() => navigation("/about")}>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>About</NavItemTextStyled>
              }
            />
          </NavItemButtonStyled>
        </ListItem>
        <ListItem>
          <NavItemButtonStyled onClick={() => navigation("/service")}>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Service</NavItemTextStyled>
              }
            />
          </NavItemButtonStyled>
        </ListItem>
        <ListItem>
          <NavItemButtonStyled onClick={() => navigation("/faq")}>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>FAQ</NavItemTextStyled>
              }
            />
          </NavItemButtonStyled>
        </ListItem>
        <ListItem>
          <NavItemButtonStyled onClick={() => navigation("/contact")}>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Contact</NavItemTextStyled>
              }
            />
          </NavItemButtonStyled>
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 25,
              px: 4,
            }}
            onClick={() => navigation("/book")}
          >
            <ListItemText
              primary={
                <NavItemTextStyled
                  variant={"body1"}
                  sx={{ color: theme.palette.offWhite.main }}
                >
                  Book
                </NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
