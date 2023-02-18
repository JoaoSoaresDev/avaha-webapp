import { Box, Typography, useTheme } from "@mui/material";
import "@fontsource/inter";

export const FAQ = () => {
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
      <Typography variant={"h1"}>Welcome to FAQ</Typography>
    </Box>
  );
};
