import MainPriceCorporate from '../../icons/main-price__corporate';
import MainPriceLending from '../../icons/main-price__lending';
import MainPriceShop from '../../icons/main-price__shopweb';
import './main-price.css'

function MainPrice() {
  return (
    <div className='main-price__wrapper'>
      <h2 className='main-price__title'>цены</h2>
      <div className='main-price__wrpaper--green'>

        <input className="radio" id="one" name="group" type="radio" defaultChecked={true} />
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <input className="radio" id="four" name="group" type="radio" />

        <div className="tabs">
          <label className="tab Roboto-Regular" id="one-tab" htmlFor="one"><h3>сайты</h3></label>
          <label className="tab Roboto-Regular" id="two-tab" htmlFor="two"><h3>приложения</h3></label>
          <label className="tab Roboto-Regular" id="three-tab" htmlFor="three"><h3>чат боты</h3></label>
          <label className="tab Roboto-Regular" id="four-tab" htmlFor="four"><h3>email письма</h3></label>
        </div>

        <div className="panels">
          <div className="panel" id="one-panel">
            <div className='main-price__site-description-wrapper'>
              <MainPriceLending />
              <h5>лендинг</h5>
              <p>одностраничный сайт-визитка</p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
            <div className='main-price__site-description-wrapper'>
              <MainPriceCorporate />
              <h5>корпоротивный сайт</h5>
              <p>одностраничный сайт-визитка</p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
            <div className='main-price__site-description-wrapper'>
              <MainPriceShop />
              <h5>интернет магазин</h5>
              <p></p>
              <ul>
                <li>шаблон</li>
                <li>индивидуальный</li>
              </ul>
            </div>
          </div>
          <div className="panel" id="two-panel">
            <h4 className="panel-title">приложения</h4>
            <p>Content2</p>
          </div>
          <div className="panel" id="three-panel">
            <h4 className="panel-title">чат боты</h4>
            <p>Content3</p>
          </div>
          <div className="panel" id="four-panel">
            <h4 className="panel-title">email письма</h4>
            <p>Content3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPrice;


