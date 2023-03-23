import { Box, Grid, styled, Typography } from "@mui/material";

const ImageBoxMockup = styled(Box)({
  height: 400,
  backgroundColor: "#b9b0b0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ServicesPresentation = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"60%"}
      gap={10}
    >
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Typography variant={"caption"} fontSize={20}>
          Ahava Counselling Service is a teletherapy based service, tailored for
          people with busy lifestyles and for individuals who are currently
          social distancing or who cannot visit in-person counselling sessions
          for health-related reasons. Our Perth-based counselling sessions are
          accessible at the convenience and privacy of your home or office.
        </Typography>

        <Typography variant={"body1"}>
          Please note that all our bookings are based on AWST.
        </Typography>
      </Box>

      <Box width={"75%"}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ImageBoxMockup>
              <Typography variant={"h4"}>
                Cultic, Spiritual & Religious Abuse
              </Typography>
            </ImageBoxMockup>
          </Grid>
          <Grid item xs={6}>
            <ImageBoxMockup>
              <Typography variant={"h4"}>
                Stress, Anxiety & Depression
              </Typography>
            </ImageBoxMockup>
          </Grid>
          <Grid item xs={6}>
            <ImageBoxMockup>
              <Typography variant={"h4"}>Addiction</Typography>
            </ImageBoxMockup>
          </Grid>
          <Grid item xs={6}>
            <ImageBoxMockup>
              <Typography variant={"h4"}>Grief & Loss</Typography>
            </ImageBoxMockup>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
