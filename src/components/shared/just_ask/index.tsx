import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

export const JustAsk = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      alignItems={"center"}
    >
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
  );
};
