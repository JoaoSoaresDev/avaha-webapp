import { Box, Typography } from "@mui/material";
import SallyPortrait1 from "@/assets/img/Sally Portrait 1.png";

export const AboutPresentation = () => {
  return (
    <Box display={"flex"} width={"90%"} gap={25}>
      <Box
        flex={1}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          component={"img"}
          src={SallyPortrait1}
          width={500}
          height={600}
          sx={{ backgroundColor: "rgb(178,161,161)" }}
        />

        <Box
          width={"30%"}
          textAlign={"start"}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Typography variant={"h3"}>About Sally</Typography>
          <Typography variant={"body1"}>
            Sally is a registered member of the Australian Counselling
            Association and has made it her goal to serve people from all walks
            of life.
            <br />
            <br />
            Deeply compassionate, gentle and empathetic, she is experienced in
            helping individuals who struggle with addiction, abuse, specialising
            in counselling to do with spiritual or religious abuse and cultic
            involvement.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
