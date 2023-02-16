import { Box, Typography } from "@mui/material";
import { ServiceDiagram } from "@/components/home/service_diagram";

export const ServiceCycle = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={12}
    >
      <Typography variant={"h3"}>How our telehealth service works:</Typography>

      <ServiceDiagram />

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"h3"}>Wait and relax!</Typography>
        <Typography variant={"body1"} width={"70%"}>
          Once you have received your link, our counsellor will give you an
          online call on your chosen date and time.
        </Typography>
      </Box>
    </Box>
  );
};
