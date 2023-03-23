import { Box, Typography } from "@mui/material";

export const AssociatedBodies = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={15}
      mb={15}
    >
      <Typography variant={"h4"}>Associated Professional Bodies</Typography>

      <Box
        width={"75%"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Typography variant={"h4"}>Logo 1</Typography>
        <Typography variant={"h4"}>Logo 2</Typography>
        <Typography variant={"h4"}>Logo 3</Typography>
        <Typography variant={"h4"}>Logo 4</Typography>
      </Box>
    </Box>
  );
};
