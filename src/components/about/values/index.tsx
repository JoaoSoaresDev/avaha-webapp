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
    </Box>
  );
};
