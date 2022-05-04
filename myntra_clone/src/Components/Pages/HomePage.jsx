import React from 'react'
import { Banner } from '../Landing Page/Banner'
import { BottomFooter } from '../Landing Page/BottomFooter'
import { GrandOpeningOffers } from '../Landing Page/GrandOpeningOffers'
import { Navbar } from '../Landing Page/Navbar'
import { TheyAreJustThatGood } from '../Landing Page/TheyAreJustThatGood'
import { TopBrands } from '../Landing Page/TopBrands'

export const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <GrandOpeningOffers/>
        <TheyAreJustThatGood/>
        <TopBrands/>
        <BottomFooter/>
    </div>
  )
}
