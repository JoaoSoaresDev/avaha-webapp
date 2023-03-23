import { Box, Grid, Typography } from "@mui/material";

export const HowItWorks = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"50%"}
      gap={10}
    >
      <Typography variant={"h3"}>How it works</Typography>

      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Typography fontSize={18} variant={"body1"} fontWeight={450}>
          Everyone who books will receive a free 20-minute consultation online
          so that client and counsellor can get to know each-other before
          committing to a long-term counselling plan.
        </Typography>

        <Typography fontSize={18} variant={"body1"} fontWeight={450}>
          <Typography fontSize={18} variant={"body1"} fontWeight={600}>
            If technology isn’t you’re forte, that is totally fine!
          </Typography>
          We have made our booking system as user-friendly as possible.
        </Typography>

        <Typography fontSize={18} variant={"body1"} fontWeight={450}>
          As long as you own a computer, tablet or phone and have internet
          connection you are able to participate in an online counselling
          session!
        </Typography>
      </Box>
    </Box>
  );
};
