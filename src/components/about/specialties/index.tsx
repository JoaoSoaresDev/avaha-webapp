import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export const Specialties = () => {
  const theme = useTheme();
  const [spiritualAbuseOpen, setSpiritualAbuseOpen] = useState(false);
  const [mentalHealthOpen, setMentalHealthOpen] = useState(false);
  const [addictionOpen, setAddictionOpen] = useState(false);
  const [griefOpen, setGriefOpen] = useState(false);

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
          <ListItemButton
            onClick={() => setSpiritualAbuseOpen(!spiritualAbuseOpen)}
          >
            <ListItemText primary="Spiritual Abuse" />
            <ListItemIcon>
              {spiritualAbuseOpen ? <RemoveIcon /> : <AddIcon />}
            </ListItemIcon>
          </ListItemButton>

          <Collapse in={spiritualAbuseOpen} timeout="auto" unmountOnExit>
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
          </Collapse>

          <Divider />

          <ListItemButton
            onClick={() => setMentalHealthOpen(!mentalHealthOpen)}
          >
            <ListItemText primary="Mental Health" />
            <ListItemIcon>
              {mentalHealthOpen ? <RemoveIcon /> : <AddIcon />}
            </ListItemIcon>
          </ListItemButton>

          <Collapse in={mentalHealthOpen} timeout="auto" unmountOnExit>
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
          </Collapse>

          <Divider />
          <ListItemButton onClick={() => setAddictionOpen(!addictionOpen)}>
            <ListItemText primary="Addiction" />
            <ListItemIcon>
              {addictionOpen ? <RemoveIcon /> : <AddIcon />}
            </ListItemIcon>
          </ListItemButton>

          <Collapse in={addictionOpen} timeout="auto" unmountOnExit>
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
          </Collapse>

          <Divider />
          <ListItemButton onClick={() => setGriefOpen(!griefOpen)}>
            <ListItemText primary="Grief" />
            <ListItemIcon>
              {griefOpen ? <RemoveIcon /> : <AddIcon />}
            </ListItemIcon>
          </ListItemButton>

          <Collapse in={griefOpen} timeout="auto" unmountOnExit>
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
          </Collapse>

          <Divider />
        </List>
      </Box>
    </Box>
  );
};
