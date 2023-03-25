import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const CancelAppointment = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"Can I cancel my appointment?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          Understandably, due to busy schedules you may need to cancel an
          appointment. We do require 24 hours notice before your scheduled
          booking. Cancellation within the 24 hour period will incur a 50% fee
          of a standard counselling session.
        </Typography>
      }
    />
  );
};
