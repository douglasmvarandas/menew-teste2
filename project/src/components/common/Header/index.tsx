import { useContext, useState } from "react";

//services
import { UserContext } from "../../../services/contexts";

//common components
import MenuDrawer from "../MenuDrawer";

//@mui components and icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

//styles and icons
import logoutImg from "../../../assets/logout.svg";
import { Container, UserName } from "./styles";

function Header() {
  const { user, logout } = useContext(UserContext);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <MenuDrawer isOpen={isOpenMenu} requestClose={handleCloseMenu} />
      <div className="content-header">
        <IconButton onClick={handleOpenMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <div>
          <h1>Fruit Menu</h1>
        </div>
        <div className="user-info">
          <span>
            Welcome, <UserName>{user.name}!</UserName>
          </span>
          <button className="logout-button" onClick={handleLogout}>
            <img src={logoutImg} alt="logout icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
