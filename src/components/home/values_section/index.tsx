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
          Our values
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
          SEO - keyword rich text about business. Just over 300 words is ideal
          to optimise your search engine rankings including subheadings.
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
