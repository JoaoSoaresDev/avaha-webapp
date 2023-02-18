import { Box, useTheme } from "@mui/material";
import "@fontsource/inter";
import {
  AspectsBar,
  ServiceCycle,
  ValuesSection,
  WelcomeSection,
} from "@/components";

export const Home = () => {
  const theme = useTheme();

  return (
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

      <ValuesSection />
    </Box>
  );
};
