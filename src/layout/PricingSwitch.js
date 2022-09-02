import React from 'react'

const PricingSwitch = (props) => {
  return (
    <div 
      className='pricing__switch'
      onClick={() => props.pricingChange()}>
      <div 
        className={props.switchAnnually ? "pricing__switch--annually" : "pricing__switch--monthly"}
      >
      </div>
    </div>
  )
}

export default PricingSwitch;