import { Box, Typography, useTheme } from "@mui/material";

export const Values = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Box
        sx={{
          width: "100%",
          background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.main} 85%, transparent 85%)`,
          py: 3,
        }}
      >
        <Typography variant={"h4"} sx={{ color: theme.palette.offWhite.main }}>
          Values
        </Typography>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={12}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          width={"10%"}
          gap={2}
          textAlign={"end"}
        >
          <Typography variant={"body1"}>People-centered</Typography>
          <Typography>
            Safe & Confidential,
            <br />
            Ethical Counseling
          </Typography>
          <Typography>Client Autonomy</Typography>
          <Typography>Committed to Improvement</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          width={"50%"}
          textAlign={"start"}
        >
          <Typography>
            We are primarily a person-centred counselling organisation, valuing
            people’s emotional, psychological and physical well-being as a
            foundation of our service.
          </Typography>

          <Typography>
            Our relationships with clients are important and we provide safe and
            confidential counselling sessions aligned with the Australian
            Counselling Association ethical standards, protecting client
            autonomy and the right to determine the direction of their healing.
          </Typography>
          <Typography>
            As part of our ongoing commitment to our clients to be an effective
            counselling service, we endeavour to improve our skills and
            understanding, with the guidance of our own supervisors as
            accountability partners.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
