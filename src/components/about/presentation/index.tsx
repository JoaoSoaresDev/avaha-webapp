import { Box, Typography } from "@mui/material";

export const AboutPresentation = () => {
  return (
    <Box display={"flex"} width={"90%"} gap={25}>
      <Box
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        gap={15}
      >
        <Box
          width={500}
          height={600}
          sx={{ backgroundColor: "rgb(178,161,161)" }}
        />

        <Box width={"40%"} textAlign={"end"}>
          <Typography variant={"body1"}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </Typography>
        </Box>
      </Box>
      <Box
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={15}
      >
        <Box
          width={"40%"}
          textAlign={"start"}
          display={"flex"}
          flexDirection={"column"}
          gap={5}
        >
          <Typography variant={"h4"}>About Sally</Typography>
          <Typography variant={"body1"}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </Typography>
        </Box>

        <Box
          width={500}
          height={600}
          sx={{ backgroundColor: "rgb(178,161,161)" }}
        />
      </Box>
    </Box>
  );
};
