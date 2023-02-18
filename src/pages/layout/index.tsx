import { Box } from "@mui/material";
import { NavBar } from "@/components";
import { Footer } from "@/components/layout/footer";

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: IProps) => {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <NavBar />
      <Box flex={1}>{children}</Box>
      <Footer />
    </Box>
  );
};
