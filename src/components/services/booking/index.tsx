import { Box, Divider, Typography } from "@mui/material";
import CalendarIcon from "@/assets/img/Calendar.svg";
import FormIcon from "@/assets/img/Analytics.svg";
import CheckIcon from "@/assets/img/Checkmark.svg";
import { BookingStep } from "@/components";

export const Booking = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"50%"}
      gap={15}
    >
      <Typography variant={"h3"}>
        How to Book your First Consultation:
      </Typography>

      <BookingStep
        image={CalendarIcon}
        step_number={"Step One"}
        step_caption={"Choose a date and time"}
        description={
          "Book a date and time at your convenience using our online booking system."
        }
      />

      <BookingStep
        image={FormIcon}
        step_number={"Step Two"}
        step_caption={"Complete your client form"}
        description={
          "After booking a time for your session, an automated client form will pop-up for you to fill in."
        }
        description_optional={
          "This totally confidential form will help your counsellor understand a little more about you so they can better help you at the time of your appointment."
        }
      />

      <BookingStep
        image={CheckIcon}
        step_number={"Step Three"}
        step_caption={"And you're done!"}
        description={
          "After this, you should receive a confirmation email that your booking has gone through - you’ve booked your session!"
        }
        description_optional={"So...what now?"}
      />
    </Box>
  );
};
