import { Box, Typography } from "@mui/material";
import RelaxIcon from "@/assets/img/Hands Phone.svg";

export const RelaxWait = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={4}
      width={"50%"}
    >
      <Box component={"img"} src={RelaxIcon} width={500} />

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"h5"}>Relax and Wait!</Typography>

        <Typography variant={"h5"} fontWeight={450}>
          Receive your online appointment link for your appointment
        </Typography>

        <Typography variant={"body1"} fontWeight={450}>
          Around 20-minutes before your appointment, your counsellor will send
          an email with your online appointment link with instructions to log-on
          to your online call via Microsoft Teams.
        </Typography>

        <Typography variant={"body1"} fontWeight={450}>
          Click on this link and you’re now at your online appointment.
        </Typography>
      </Box>
    </Box>
  );
};
