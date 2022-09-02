import React from 'react';
import PricingSwitch from "./PricingSwitch";
import PricingBlocks from "./PricingsBlocks";
import { useState } from 'react';


const Pricing = () => {
  const [ switchAnnually, setSwitchAnnually ] = useState(false);

  const pricingChange = () => {
     setSwitchAnnually(!switchAnnually)
  }
  
  return (
    <main className='pricing'>
      <h1 className="pricing__title">Our Pricing</h1>
      <div className="pricing__switch-container">
        <p onClick={() => pricingChange()}>Annually</p>
        <PricingSwitch 
            switchAnnually={switchAnnually}
            pricingChange={pricingChange} 
        />
        <p onClick={() => pricingChange()}>Monthly</p>
      </div>
      <PricingBlocks 
          switchAnnually={switchAnnually}
      />
    </main>
  )
}

export default Pricing;