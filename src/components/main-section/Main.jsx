/* eslint-disable react/prop-types */
import introImage from '../../assets/image-mockups.png'
import apiIcon from '../../assets/icon-api.svg'
import budgetingIcon from '../../assets/icon-budgeting.svg'
import onboardingIcon from '../../assets/icon-onboarding.svg'
import onlineBankingIcon from '../../assets/icon-online.svg'
import './Main.css'
import Button from '../button/Button'
const dataIcon = [
    {
        icon: onlineBankingIcon,
        title: 'Online Banking',
        detail: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        icon: budgetingIcon,
        title: 'Simple Budgeting',
        detail: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
        icon: onboardingIcon,
        title: 'Fast Onboarding',
        detail: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        icon: apiIcon,
        title: 'Open API',
        detail: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]
function IconCard(props) {
    return (
        <div className="card">
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
            <h2 className='head-color'>{props.title}</h2>
            <p className='sub-head-color'>{props.detail}</p>
        </div>
    )
}
const cards = dataIcon.map((element) => <IconCard key={element.title} icon={element.icon} title={element.title} detail={element.detail} />)
function Main() {
    return (
        <>
            <div className="main">
                <div className="left-section left-padd">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button />
                </div>
                <div className="right-section">
                    <img src={introImage} alt="" />
                </div>
            </div>
            <div className="info-section left-padd right-padd">
                <div className="head-section">
                    <h1 className='head-color'>Why choose Easybank?</h1>
                    <p className='sub-head-color'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className="features-section">
                    {cards}
                </div>
            </div>
        </>
    )
}
export default Main