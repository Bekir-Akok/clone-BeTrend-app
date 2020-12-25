import Logo from './img/logo.png'
import NavbarMenuItem from './NavbarMenuItem'

const NavMobileMenu = () => {


    const menuItem = [
        {name:"WOMAN"},
        {name:"MAN"},
        {name:"MOM&CHILD"},
        {name:"SPORT&OUTDOOR"},
        {name:"SHOES&BAGS"},
        {name:"COSMETIC"},
        {name:"CLOCK&ACSSESORY"},
        {name:"HOME&LIFE"},
        {name:"SUPERMARKET"},
        {name:"ELEKTRONIC"},
        {name:"FURNITURE"},]
        
    

    return (
        <div className="nav-menu">
            <div className="nav-menu-logo">
                <a href="/"><img src={Logo}></img></a>
                <i class="fas fa-times"></i>
            </div>
            {menuItem.map((items, i) => (
                <NavbarMenuItem key={i} name={items.name} />
            ) )}
            <div className="nav-sing-in">
                <i class="fas fa-user"></i>
                <p>Sign in/Sing up</p>
            </div>
            <div className="nav-help">
                <i class="fas fa-question-circle"></i>
                <p>Yardım</p>
            </div>
        </div>
    )
}


export default NavMobileMenu