import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const SpiritualAbuse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"What is spiritual abuse?"}
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
