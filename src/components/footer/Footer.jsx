import logo from '../../assets/logo-white.svg'
import './Footer.css'
import facebookIcon from '../../assets/icon-facebook.svg'
import youtubeIcon from '../../assets/icon-youtube.svg'
import twitterIcon from '../..//assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import Button from '../button/Button'
function Footer() {
    return (
        <div className="footer ">
        <div className="nav-section">
            <div className="graphical-nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="icon-section">
                    <img src={facebookIcon} alt="" />
                    <img src={youtubeIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={pinterestIcon} alt="" />
                    <img src={instagramIcon} alt="" />
                </div>
            </div>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                
            </ul>
        </div>
            <div className="container">
                <Button />
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer