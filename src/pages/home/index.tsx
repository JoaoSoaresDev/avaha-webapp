import { Box, Divider, Fade, useTheme } from "@mui/material";
import "@fontsource/inter";
import {
  AspectsBar,
  JustAsk,
  ServiceCycle,
  ValuesSection,
  WelcomeSection,
} from "@/components";
import { motion } from "framer-motion";

export const Home = () => {
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
        <WelcomeSection />

        <AspectsBar />

        <ServiceCycle />

        <ValuesSection />

        <Divider
          orientation={"vertical"}
          sx={{
            height: 100,
            borderRightWidth: 2,
            borderRightColor: theme.palette.offBlack.main,
          }}
        />

        <JustAsk />
      </Box>
    </motion.main>
  );
};
