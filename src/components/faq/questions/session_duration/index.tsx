import { useState } from "react";
import { DropdownItem } from "@/components";
import { Box, List, ListItem, Typography } from "@mui/material";

export const SessionDuration = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"What duration is a counselling session?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          All sessions, except for the free 20-minute first counselling session,
          will be 60 minutes in duration.
        </Typography>
      }
    />
  );
};
