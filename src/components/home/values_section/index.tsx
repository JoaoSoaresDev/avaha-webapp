import { Box, Typography, useTheme } from "@mui/material";

export const ValuesSection = () => {
  const theme = useTheme();

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box display={"flex"} justifyContent={"center"} width={"60%"}>
        <Typography variant={"h2"} sx={{ color: theme.palette.offWhite.main }}>
          Our values
        </Typography>
      </Box>
    </Box>
  );
};
