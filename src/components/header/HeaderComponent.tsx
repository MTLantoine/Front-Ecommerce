import WrapperMenuComponent from "../main/WrapperMenuComponent/WrapperMenuComponent";
import MenuIcon from "@material-ui/icons/Menu";
import "./HeaderComponent.scss";

const HeaderComponent = () => (
  <div className="HeaderComponent" data-testid="HeaderComponent">
    <div className="header-container">E-Commerce</div>
    <div className="menu-wrapper">
      <WrapperMenuComponent />
    </div>
  </div>
);

export default HeaderComponent;
