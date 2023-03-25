import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { DropdownItem } from "@/components";

export const Specialties = () => {
  const theme = useTheme();
  const [spiritualAbuseOpen, setSpiritualAbuseOpen] = useState(false);
  const [mentalHealthOpen, setMentalHealthOpen] = useState(false);
  const [addictionOpen, setAddictionOpen] = useState(false);
  const [griefOpen, setGriefOpen] = useState(false);

  //TODO: Change whatever is inside the specialities
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Box
        sx={{
          width: "100%",
          background: `linear-gradient(to right, transparent, transparent 15%, ${theme.palette.secondary.main} 15%)`,
          py: 3,
        }}
      >
        <Typography variant={"h4"} sx={{ color: theme.palette.offWhite.main }}>
          Specialties
        </Typography>
      </Box>

      <Box width={"40%"}>
        <List sx={{ width: "100%" }}>
          <DropdownItem
            title={"Cultic, Spiritual & Religious Abuse"}
            isOpen={spiritualAbuseOpen}
            setOpen={setSpiritualAbuseOpen}
            collapsableContent={
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  pl: 7,
                  listStyleType: "disc",
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
              </List>
            }
          />

          <DropdownItem
            title={"Stress, Anxiety & Depression"}
            isOpen={mentalHealthOpen}
            setOpen={setMentalHealthOpen}
            collapsableContent={
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  pl: 7,
                  listStyleType: "disc",
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
              </List>
            }
          />

          <DropdownItem
            title={"Addiction"}
            isOpen={addictionOpen}
            setOpen={setAddictionOpen}
            collapsableContent={
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  pl: 7,
                  listStyleType: "disc",
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
              </List>
            }
          />

          <DropdownItem
            title={"Grief & Loss"}
            isOpen={griefOpen}
            setOpen={setGriefOpen}
            collapsableContent={
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  pl: 7,
                  listStyleType: "disc",
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body2"}>Something</Typography>
                </ListItem>
              </List>
            }
          />
        </List>
      </Box>
    </Box>
  );
};
