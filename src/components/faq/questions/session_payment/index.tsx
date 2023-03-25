import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const SessionPayment = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"How di I pay for my sessions?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          We will provide an invoice after your first 60-minute counselling
          session according to your discussed plan.
        </Typography>
      }
    />
  );
};
