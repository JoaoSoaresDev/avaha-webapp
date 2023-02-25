import { Box, Typography, useTheme } from "@mui/material";
import "@fontsource/inter";
import { AboutPresentation, Specialties, Values } from "@/components/about";

export const About = () => {
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
      gap={15}
    >
      <Typography variant={"h1"}>About</Typography>

      <AboutPresentation />

      <Specialties />

      <Values />
    </Box>
  );
};
