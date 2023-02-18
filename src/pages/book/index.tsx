import { Box, Typography, useTheme } from "@mui/material";

export const Book = () => {
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
      <Typography variant={"h1"}>Welcome to book</Typography>
    </Box>
  );
};
