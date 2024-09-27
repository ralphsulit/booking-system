// import Button from '../../components/Button/Button'

import './HomePage.css'

const Home = () => {
  return (
    <header className="section__container header__container">
      <div className="header__image__container">
        <div className="header__content">
          <h1>Enjoy Your Dream Vacation</h1>
          <p>Escape the ordinary and discover tranquility.</p>
        </div>
        <div className="booking__container">
          <form>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
          </form>
          <button className='btn'><i className="ri-search-line"></i></button>
        </div>
      </div>
    </header>
  )
}

export default Home
  