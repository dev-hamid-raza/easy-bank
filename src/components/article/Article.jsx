/* eslint-disable react/prop-types */
import './Article.css'
import currencyImage from '../../assets/image-currency.jpg'
import planeImage from '../../assets/image-plane.jpg'
import restaurantImage from '../../assets/image-restaurant.jpg'
import confettiImage from '../../assets/image-confetti.jpg'
function Card(props) {
    const cardStyle = {
        background:`url(${props.cardImage}) no-repeat center center/cover`
    }
    return (
    <div className="card">
        <div className="image" style={cardStyle}></div>
        <div className="detail">
            <h3>{props.author}</h3>
            <a href='#' className='head-color'>{props.title}</a>
            <p className="sub-head-color">{props.detail}</p>
        </div>
    </div>
    )
}
const articleData = [
    {
        title: 'Receive money in any currency with no fees',
        author: 'By Claire Robinson',
        image: currencyImage,
        detail: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...'
    },
    {
        title: 'Treat yourself without worrying about money',
        author: 'By Wilson Hutton',
        image: restaurantImage,
        detail: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … '
    },
    {
        title: 'Take your Easybank card wherever you go',
        author: 'By Wilson Hutton',
        image: planeImage,
        detail: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        title:'Our invite-only Beta accounts are now live!',
        author: 'By Claire Robinson',
        image: confettiImage,
        detail: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
]
let j = 0
const articleCards = articleData.map((element) => <Card cardImage={element.image} author={element.author} title={element.title} detail={element.detail} key={j++} /> )
console.log(articleCards)
function Article() {
    return (
        <div className="articles-section left-padd right-padd">
            <h1 className="head-color">Latest Articles</h1>
            <div className="wrapper">
            {articleCards}
            </div>
        </div>
    )
}

export default Article