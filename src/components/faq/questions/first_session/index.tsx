import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const FirstSession = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"How does the first-free session work?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          TBA
        </Typography>
      }
    />
  );
};
