import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Bella Italia started life as two small restaurant chains - Pastificio and Pizzaland - which were part of the Grand Metropolitan group.[2]

In 1990, Michael Guthrie (former Chairman of Mecca Leisure Group) formed BrightReasons and bought the Pizzaland and Pastificio chains from Grand Metropolitan for £20m in February 1991, rebranding Pastificio to Bella Pasta in the process.[3]

In February 1993, BrightReasons purchased 43 Pizza Piazza and Prima Pasta restaurants from Rank Organisation for £20.25m,[4] bringing their total number of restaurants to 165.

In May 1994, BrightReasons started preparing for a stock market flotation, and the group was expected to be valued at between £70m-£100m.[5] This was subsequently announced in September,[6] however, in November 1994, the planned flotation was postponed.[7]

In November 1996, BrightReasons was put up for sale[8] after suffering a particularly tough trading period in 1995.[9] In November 1996, BrightReasons was acquired by Whitbread for £46m,[10] but was sold off less than six years later for £25m to Tragus Holdings[11] (later renamed Casual Dining Group).

In December 2002, the Bella Pasta chain was rebranded as Bella Italia and the first fully branded restaurant opened in Leeds.

In September 2012, Bella Italia joined the Nectar loyalty card reward scheme as a redemption partner.[12]

In September 2013, Bella Italia began a partnership with the Gourmet Society, offering their members discounts on production of a Gourmet Society restaurant discount card.

In light of the impact of the COVID-19 pandemic, in May 2020 Bella Italia's owner Casual Dining Group announced that it was working with advisors on next steps for the overall business as a prudent measure to protect the company whilst planning for the future.[13] In July 2020, Casual Dining Group was placed into administration with 35 Bella Italia outlets set to close.[14] Branches in Plymouth, Newbury and Luton Airport permanently closed as administrators began selling off the group's assets.[15]</p>
        </div>
    </div>
  )
}

export default About