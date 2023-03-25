import { Box, Typography, useTheme } from "@mui/material";
import "@fontsource/inter";
import {
  AboutPresentation,
  AssociatedBodies,
  JustAsk,
  Specialties,
  Values,
} from "@/components";
import { motion } from "framer-motion";
import { PricingChart, QuestionsList } from "@/components/faq";

export const FAQ = () => {
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
        gap={10}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={7}
        >
          <Typography variant={"h1"}>FAQ</Typography>

          <Typography variant={"body1"} fontWeight={450}>
            Finding support can sometimes feel like a heavy burden.
            <br />
            So we’ve made it easier by creating a list of questions that we
            think may help you.
          </Typography>
        </Box>

        <QuestionsList />

        <PricingChart />

        <JustAsk />
      </Box>
    </motion.main>
  );
};
