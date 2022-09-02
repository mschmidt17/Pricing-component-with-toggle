import React from 'react'
import PricingBlock from './PricingBlock'
import data from '../data.json'

const PricingBlocks = (props) => {
  return (
    <div className="pricing__block-container">
      {data.items.map(item => (
        <PricingBlock 
            key={item.id}            
            name={item.name}
            priceAnnually={item.priceAnnually}
            priceMonthly={item.priceMonthly}
            storage={item.storage}
            userCount={item.userCount}
            sendSize={item.sendSize}
            background={item.background}
            switchAnnually={props.switchAnnually}
        />
      ))}
    </div>
  )
}

export default PricingBlocks