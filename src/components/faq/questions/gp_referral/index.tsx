import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const GPReferral = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"Is referral from my GP required?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          No, a referral is not required.
        </Typography>
      }
    />
  );
};
