import {
  Box,
  List,
  styled,
  Typography,
  ListItemButton,
  ListItem,
  ListItemText,
} from "@mui/material";

const NavItemTextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 650,
  fontSize: 12,
  color: theme.palette.offBlack.main,
}));

const FooterItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: 1,
  maxWidth: "fit-content",
}));

const FooterListItem = styled(ListItem)(({ theme }) => ({
  margin: 0,
  padding: 0,
}));

export const FooterAbout = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
      <Typography variant={"h6"}>About</Typography>

      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>FAQ</NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>
                  About us
                </NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>
                  Counsellor Resume
                </NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>
                  Australian Counselling Assoc.
                </NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
      </List>
    </Box>
  );
};
