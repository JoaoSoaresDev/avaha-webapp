import { Box, Button, Typography, useTheme } from "@mui/material";

export const WelcomeSection = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={8}
    >
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        <Typography
          variant={"h1"}
          sx={{
            fontWeight: 600,
            fontSize: 100,
            lineHeight: "110px",
            fontStyle: "normal",
          }}
        >
          Welcome to Ahava
          <br />
          Counselling Services
        </Typography>
        <Typography variant={"body1"} fontWeight={600} fontSize={25}>
          Specialised counselling services for issues relating to spiritual
          abuse, addiction, grief and mental health.
        </Typography>
      </Box>

      <Button
        variant={"contained"}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "50px",
          px: 4,
          py: 2,
        }}
      >
        <Typography
          variant={"body1"}
          fontSize={20}
          color={theme.palette.offWhite.main}
          fontWeight={600}
          lineHeight={"30px"}
        >
          Book a Free Consultation
        </Typography>
      </Button>
    </Box>
  );
};
