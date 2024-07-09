// import { NavLink } from "react-router-dom";

import { MenuContainer, MenuList, MenuItem, MenuLink} from "./styled";

export function NavBar(){
    return(
        <MenuContainer>
        <MenuList>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/cardapio">Cardapios</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink  to="/">Sobre</MenuLink>
          </MenuItem>
          <MenuItem>
            {/* <MenuLink >Cart</MenuLink> */}
          </MenuItem>
          <MenuItem>
            {/* <MenuLink >Login</MenuLink> */}
          </MenuItem>
        </MenuList>
        </MenuContainer>
    )
}
