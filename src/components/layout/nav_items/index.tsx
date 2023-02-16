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

const NavItemTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 650,
  fontSize: 35,
  color: theme.palette.primary.main,
}));

export const NavItems = () => {
  const theme = useTheme();

  return (
    <Box display={"flex"} gap={5}>
      <List sx={{ display: "flex", alignItems: "center" }}>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Home</NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>About</NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Service</NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>FAQ</NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>Contact</NavItemTextStyled>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ ml: 2 }}>
          <ListItemButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 25,
              px: 4,
            }}
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
