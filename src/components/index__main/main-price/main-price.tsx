import './main-price.css'

function MainPrice() {
  return (
    <div className='main-price__wrapper'>
      <h2 className='main-price__title Roboto-Thin'>цены</h2>
      <div className='main-price__wrpaper--green'>

        <input className="radio" id="one" name="group" type="radio" defaultChecked={true} />
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <input className="radio" id="four" name="group" type="radio" />

        <div className="tabs">
          <label className="tab Roboto-Regular" id="one-tab" htmlFor="one">сайты</label>
          <label className="tab Roboto-Regular" id="two-tab" htmlFor="two">приложения</label>
          <label className="tab Roboto-Regular" id="three-tab" htmlFor="three">чат боты</label>
          <label className="tab Roboto-Regular" id="four-tab" htmlFor="four">email письма</label>
        </div>

        <div className="panels">
          <div className="panel" id="one-panel">
            <div className="panel-title">сайты</div>
            <p>Content1</p>
          </div>
          <div className="panel" id="two-panel">
            <div className="panel-title">приложения</div>
            <p>Content2</p>
          </div>
          <div className="panel" id="three-panel">
            <div className="panel-title">чат боты</div>
            <p>Content3</p>
          </div>
          <div className="panel" id="four-panel">
            <div className="panel-title">email письма</div>
            <p>Content3</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainPrice;


