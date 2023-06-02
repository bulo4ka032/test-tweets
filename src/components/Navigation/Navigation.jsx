import { Nav, NavItem } from "./Navigation.styled"

const Navigation = () => {
return (
    <Nav>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/tweets'>Tweets</NavItem>
    </Nav>
)

}

export default Navigation