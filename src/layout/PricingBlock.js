import React from 'react'

const PricingBlock = (props) => {
  return (
    <section className={props.background === "white" ? "pricing__block--white" : "pricing__block--blue"}>
        <h2 className="pricing__block-name">{props.name}</h2>
        <h1 className="pricing__block-price">
            {props.switchAnnually ? props.priceAnnually : props.priceMonthly}
        </h1>
        <ul className="pricing__block-text-container">
            <li className="pricing__block-text">{props.storage}</li>
            <li className="pricing__block-text">{props.userCount}</li>
            <li className="pricing__block-text">{props.sendSize}</li>
        </ul>
        <button 
            className="pricing__block-button"
            //onClick={}
        >Learn More</button>
    </section>
  )
}

export default PricingBlock