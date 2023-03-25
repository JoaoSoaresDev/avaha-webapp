import { useState } from "react";
import { DropdownItem } from "@/components";
import { List, ListItem, Typography } from "@mui/material";

export const MedicareRebate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownItem
      title={"Does Medicare give me a rebate for my counselling sessions?"}
      isOpen={isOpen}
      setOpen={setIsOpen}
      collapsableContent={
        <Typography variant={"body1"} fontWeight={450}>
          At ACS we are not covered by the Medicare Mental Health Care Plan.
          Unfortunately, most counsellors in Australia are not offered this
          avenue in better support of their clients.
        </Typography>
      }
    />
  );
};
