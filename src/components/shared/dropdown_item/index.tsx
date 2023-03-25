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
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface IProps {
  title: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  collapsableContent: JSX.Element | JSX.Element[];
}

export const DropdownItem = ({
  title,
  isOpen,
  setOpen,
  collapsableContent,
}: IProps) => {
  return (
    <>
      <ListItemButton onClick={() => setOpen(!isOpen)}>
        <ListItemText primary={title} />
        <ListItemIcon>{isOpen ? <RemoveIcon /> : <AddIcon />}</ListItemIcon>
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box width={"80%"} textAlign={"start"} pl={2} py={5}>
          {collapsableContent}
        </Box>
      </Collapse>

      <Divider />
    </>
  );
};
