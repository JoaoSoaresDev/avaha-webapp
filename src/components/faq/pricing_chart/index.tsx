import { Box, Typography } from "@mui/material";

export const PricingChart = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      width={"40%"}
    >
      <Typography variant={"h5"}>Session Pricing Chart</Typography>

      <Box width={"100%"} border={"solid 2px black"}>
        <Box display={"flex"} width={"100%"} borderBottom={"solid 1px black"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            pl={10}
            borderRight={"solid 1px black"}
            flex={5}
          >
            <Typography variant={"h6"}>Concession/Student</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={1}
            p={3}
          >
            <Typography variant={"h6"}>$60/hr</Typography>
          </Box>
        </Box>
        <Box display={"flex"} width={"100%"} borderBottom={"solid 1px black"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            pl={10}
            borderRight={"solid 1px black"}
            flex={5}
          >
            <Typography variant={"h6"}>Standard</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={1}
            p={3}
          >
            <Typography variant={"h6"}>$80/hr</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
