import { Box, styled, Typography } from "@mui/material";

import Arrow from "@/assets/img/Arrow.svg";
import Analytics from "@/assets/img/Analytics.svg";
import Calendar from "@/assets/img/Calendar.svg";
import Check from "@/assets/img/Checkmark.svg";

const PhaseCaption = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 600,
}));

const PhaseBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 20,
}));

export const ServiceDiagram = () => {
  return (
    <Box display={"flex"} gap={1}>
      <PhaseBox>
        <Box component={"img"} src={Calendar} />
        <PhaseCaption>Choose a date and time</PhaseCaption>
      </PhaseBox>

      <Box component={"img"} src={Arrow} />

      <PhaseBox>
        <Box component={"img"} src={Analytics} />
        <PhaseCaption variant={"h5"}>
          Complete our first-time client form
        </PhaseCaption>
      </PhaseBox>

      <Box component={"img"} src={Arrow} />

      <PhaseBox>
        <Box component={"img"} src={Check} />
        <PhaseCaption variant={"h5"}>Receive your email</PhaseCaption>
      </PhaseBox>
    </Box>
  );
};
