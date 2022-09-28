import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WorkIcon from "@mui/icons-material/Work";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import "./BottomNav.css";
import { useContext } from "react";
import ViewContext from "../../context/view/viewContext";
export default function BottomNav() {
  const view = useContext(ViewContext);
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottomnav">
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            view.setView(newValue === 1 ? "hire" : "work");
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Work" icon={<WorkIcon />} />
          <BottomNavigationAction
            label="Hire"
            icon={<SupervisorAccountIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
