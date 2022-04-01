import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//services
import { UserContext } from "../../../services/contexts";

//@mui components and icons
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

//stylesheets
import { Container } from "./styles";

type MenuProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuProps) {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    navigate("/login");
    logout();
  };

  return (
    <Drawer
      open={isOpen}
      onClose={requestClose}
      anchor="left"
      className="menu-drawer"
    >
      <Container>
        <List>
          <ListItem button key={"Home"} onClick={() => navigate("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <Divider />

          <ListItem
            button
            key={"Settings"}
            onClick={() => navigate("/settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>

          <Divider />

          <ListItem button key={"Logout"} onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout / Login"} />
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
}

export default Menu;
