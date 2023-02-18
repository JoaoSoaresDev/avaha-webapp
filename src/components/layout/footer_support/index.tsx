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

export const FooterSupport = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
      <Typography variant={"h6"}>Support</Typography>

      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>
                  Getting Help
                </NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>NDIS</NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
        <FooterListItem>
          <FooterItemButton>
            <ListItemText
              primary={
                <NavItemTextStyled variant={"body1"}>
                  Contact Us
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
                  Mental Health Resources
                </NavItemTextStyled>
              }
            />
          </FooterItemButton>
        </FooterListItem>
      </List>
    </Box>
  );
};
