import logo from '../../assets/logo.svg'
import Button from '../button/Button'
import './Header.css'
import hamBurger from '../../assets/icon-hamburger.svg'
function Header() {
    const navElements = ['Home', 'About', 'Contact', 'Blog', 'Careers']
    let i = 0
    const navListItems = navElements.map((item) => <li key={i++}><a href='#'>{item}</a></li>)
    return (
        
        <header className='left-padd right-padd'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    {navListItems}
                </ul>
            </nav>
            <div className="header-button">
                <Button />
                <img src={hamBurger} />
            </div>
        </header>
    )
}

export default Header