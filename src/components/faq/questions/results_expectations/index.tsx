import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const ResultsExpectations = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"When can I expect to see results?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          This will vary from person to person, taking into consideration family
          history, degree and length of trauma and behavioural patterns,
          resources and circumstances.
        </Typography>
      }
    />
  );
};
