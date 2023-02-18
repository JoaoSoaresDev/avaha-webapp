import { Box, useTheme } from "@mui/material";
import { FooterAbout } from "@/components/layout/footer_about";
import { FooterSupport } from "@/components/layout/footer_support";
import LogoBlack from "@/assets/img/Avaha Logo.svg";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      mb={0}
      pt={5}
      pb={2}
      bottom={0}
      width={"100%"}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Box display={"flex"} ml={10} gap={5}>
        <FooterAbout />
        <FooterSupport />
      </Box>

      {/*TODO: Change black logo to white*/}
      <Box display={"flex"} mr={10}>
        <Box component={"img"} src={LogoBlack} width={150}></Box>
      </Box>
    </Box>
  );
};
