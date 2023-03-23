import { Box, Typography, useTheme } from "@mui/material";
import "@fontsource/inter";
import {
  AboutPresentation,
  AssociatedBodies,
  Specialties,
  Values,
} from "@/components/about";
import { motion } from "framer-motion";

export const About = () => {
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
        gap={18}
      >
        <Typography variant={"h1"}>About</Typography>

        <AboutPresentation />

        <Specialties />

        <Values />

        <AssociatedBodies />
      </Box>
    </motion.main>
  );
};
