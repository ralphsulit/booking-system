import Button from '../../components/Button/Button'

import './HomePage.css'

const Home = () => {
  return (
    <header>
      <div className="bg-image"></div>
      <div className='banner-container'>
        <h2>private resort</h2>
        <h1>mardens place</h1>
        <h3>Escape the ordinary and discover tranquility</h3>
      </div>
      <section>
        <div className="content">
          <div className="content-img"></div>
          <div className="content-text">
            <h1>Focusing on Comfort and Serenity</h1>
            <p>Discover a hidden gem in Rizal: Mardens Place, where your comfort is our priority.</p>
            <Button />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Home
  