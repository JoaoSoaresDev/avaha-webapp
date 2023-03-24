import { Box, Typography } from "@mui/material";

interface IProps {
  image: string;
  step_number: string;
  step_caption: string;
  description: string;
  description_optional?: string;
}

export const BookingStep = ({
  image,
  step_number,
  step_caption,
  description,
  description_optional,
}: IProps) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box component={"img"} src={image} />
      <Box
        width={"50%"}
        textAlign={"start"}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <Box>
          <Typography variant={"h5"}>{step_number}</Typography>
          <Typography variant={"h5"}>{step_caption}</Typography>
        </Box>
        <Typography variant={"body1"} fontWeight={450}>
          {description}
        </Typography>
        {description_optional && (
          <Typography variant={"body1"} fontWeight={450}>
            {description_optional}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
