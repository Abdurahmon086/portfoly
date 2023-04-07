import Ellipse from '../../../public/Ellipse.png';
import PostsCard from '../../UI/PostsCard/PostsCard';
import WorksCard from '../../UI/WorksCard/WorksCard';
import { posts, works } from '../../data';
import './index.scss';


const Main = () => {
    return (
        <main>
            <section className='hero container'>
                <div className="hero__wrapper">
                    <div className="hero__left">
                        <h1 className="hero__title">Hi, I am John,
                            Creative Technologist</h1>
                        <p className="hero__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className='hero__btn'>Download Resume</button>
                    </div>
                    <div className="hero__right">
                        <div className="hero__img-wrapper">
                            <img src={Ellipse} alt="Ellipse img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='posts'>
                <div className="posts__wrapper container">
                    <div className="posts__top">
                        <h4 className="posts__title">Recent posts</h4>
                        <a href="#" className='posts__link'>View all</a>
                    </div>
                    <ul className="posts__list">
                        {
                            posts?.map(item => {
                                return <PostsCard item={item} key={item.id} />
                            })
                        }
                    </ul>
                </div>
            </section>
            <section className='works container'>
                <h4 className='works__title'>Featured works</h4>
                <ul className='works__list'>
                    {
                        works?.map(item => {
                            return <WorksCard item={item} key={item.id} />
                        })
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main;