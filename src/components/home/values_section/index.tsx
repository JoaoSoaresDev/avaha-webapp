import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

export const ValuesSection = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"45%"}
      gap={5}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        sx={{ backgroundColor: theme.palette.secondary.main, py: 3 }}
      >
        <Typography variant={"h3"} sx={{ color: theme.palette.offWhite.main }}>
          About us
        </Typography>
      </Box>
      <Box
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        <Typography variant={"body1"}>
          Ahava Counselling Services (ACS) is an online counselling service in
          Perth, Western Australia that warmly welcomes each individual seeking
          professional and therapeutic support to live a fulfilled and
          flourishing life. With our accessible-at-home telehealth service, ACS
          stands to empower people to reach their potential and overcome
          challenging times. As every person is different, we work with each
          client at their own pace to help them discover their capabilities,
          gain clarity and reconnect with who they are.
        </Typography>

        <Divider
          orientation={"vertical"}
          sx={{
            height: 100,
            borderRightWidth: 2,
            borderRightColor: theme.palette.offBlack.main,
          }}
        />

        <Typography variant={"h4"}>Have more questions? Just ask.</Typography>

        <Button
          variant={"contained"}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 25,
            px: 10,
            py: 2,
          }}
        >
          <Typography
            variant={"body1"}
            sx={{ color: theme.palette.offWhite.main }}
          >
            Contact a counsellor
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
