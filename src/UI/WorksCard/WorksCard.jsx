import './index.scss';  

const WorksCard = (props) => {
    const { item: { img, title, year, work, description } } = props

    return (
        <li className="works__card card">
            <img src={img} alt={title} />
            <div className="card__wrapper">
                <h4 className='card__title' >{title}</h4>
                <div className="card__inner">
                    <span className='card__sp'>{year}</span>
                    <p className='card__text-name'>{work}</p>
                </div>
                <p className='card__text'>{description}</p>
            </div>
        </li>
    )
}

export default WorksCard;
