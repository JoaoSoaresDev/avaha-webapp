import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";
import { useState } from "react";

export const CounsellingHelps = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"How can counselling help me?"}
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
