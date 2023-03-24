import { Box, Divider, Typography, useTheme } from "@mui/material";
import "@fontsource/inter";
import {
  Booking,
  HowItWorks,
  JustAsk,
  RelaxWait,
  ServicesPresentation,
} from "@/components";
import { motion } from "framer-motion";

export const Service = () => {
  const theme = useTheme();

  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}
        textAlign={"center"}
        py={10}
        gap={8}
      >
        <Typography pb={10} variant={"h1"}>
          Services
        </Typography>

        <ServicesPresentation />

        <HowItWorks />

        <Booking />

        <Divider
          orientation={"vertical"}
          color={"black"}
          sx={{ height: 150 }}
        />

        <RelaxWait />

        <Divider
          orientation={"vertical"}
          color={"black"}
          sx={{ height: 150 }}
        />

        <JustAsk />
      </Box>
    </motion.main>
  );
};
