import './index.scss'

const PostsCard = (props) => {
    const { item: { title, text, work, year } } = props

    return (
        <li className="posts__card card" >
            <h4 className="card__title">{title}</h4>
            <div className="card__middle">
                <p className='card__text-year'>{year}</p>
                <p className='card__text-work'>{work}</p>
            </div>
            <p className='card__text'>{text}</p>
        </li>
    )
}

export default PostsCard;