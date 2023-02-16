import { Box, Typography, useTheme } from "@mui/material";
import AchievementIcon from "@/assets/img/Nice.svg";

interface IProps {
  text?: string;
}

//TODO: Fix icon and item spacing (text is wrapping and container is not shrinking to adjust)
export const AspectItem = ({ text }: IProps) => {
  const theme = useTheme();

  return (
    <Box
      flex={1}
      display={"flex"}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box component={"img"} src={AchievementIcon} width={60} height={80} />
      <Typography
        variant={"body1"}
        fontSize={32}
        sx={{ color: theme.palette.offWhite.main }}
      >
        {text}
      </Typography>
    </Box>
  );
};
