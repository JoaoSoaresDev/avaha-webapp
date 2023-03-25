import { Box, List } from "@mui/material";
import {
  CancelAppointment,
  CounsellingHelps,
  FirstSession,
  GPReferral,
  MedicareRebate,
  ResultsExpectations,
  SessionDuration,
  SessionPayment,
  SpiritualAbuse,
} from "@/components/faq/questions";

export const QuestionsList = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Box width={"40%"}>
        <List sx={{ width: "100%" }}>
          <CounsellingHelps />
          <FirstSession />
          <SessionDuration />
          <SessionPayment />
          <CancelAppointment />
          <ResultsExpectations />
          <GPReferral />
          <MedicareRebate />
          <SpiritualAbuse />
        </List>
      </Box>
    </Box>
  );
};
