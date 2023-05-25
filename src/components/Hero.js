import './Hero.css';

export default function Hero() {
    return (
        <section id='hero'>
            <img src='img/hero.jpg' alt='laptop' />
            <div className='hero-title'>
                <h1 className='no-mp'>LAPPYFIND</h1>
                <h2 className='no-mp'>Discover your perfect laptop today!</h2>
                <a href='#form'>
                    <button className='btn-grad'>Find Now</button>
                </a>
            </div>
        </section>
    )
}