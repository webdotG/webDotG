import './main-price.css'

function MainPrice() {
  return (
    <div className='main-price__wrapper'>
      <div className='main-price'>


       

<div className="warpper">
  <input className="radio" id="one" name="group" type="radio" defaultChecked={true}/>
  <input className="radio" id="two" name="group" type="radio" />
  <input className="radio" id="three" name="group" type="radio" />

  <div className="tabs">
    <label className="tab" id="one-tab" htmlFor="one">Tab1</label>
    <label className="tab" id="two-tab" htmlFor="two">Tab2</label>
    <label className="tab" id="three-tab" htmlFor="three">Tab3</label>
  </div>

  <div className="panels">
    <div className="panel" id="one-panel">
      <div className="panel-title">Title1</div>
      <p>Content1</p>
    </div>
    <div className="panel" id="two-panel">
      <div className="panel-title">Title2</div>
      <p>Content2</p>
    </div>
    <div className="panel" id="three-panel">
      <div className="panel-title">Title3</div>
      <p>Content3</p>
    </div>
  </div>
</div>




      </div>
    </div>
  );
}

export default MainPrice;


