import { Box, Typography, useTheme } from "@mui/material";
import { AspectItem } from "@/components/home/aspect_item";

export const AspectsBar = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"85%"}
      px={5}
      py={5}
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <AspectItem text={"Free 20-minute first consultation"} />
      <AspectItem text={"Member of Australian Counseling Association"} />
      <AspectItem text={"NDIS Provider"} />
    </Box>
  );
};
