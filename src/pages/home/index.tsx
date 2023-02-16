import { Box, Button, Typography, useTheme } from "@mui/material";
import { NavBar } from "@/components/layout/nav_bar";
import "@fontsource/inter";
import { AspectsBar } from "@/components/home/aspects_bar";
import { ServiceCycle } from "@/components";
import { WelcomeSection } from "@/components/home/welcome_section";

export const Home = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <NavBar />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}
        textAlign={"center"}
        py={10}
        gap={8}
      >
        <WelcomeSection />

        <AspectsBar />

        <ServiceCycle />
      </Box>
    </Box>
  );
};
