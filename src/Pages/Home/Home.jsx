import React from 'react'
import CategoriesSectionComponent from '../../Components/CategoriesSectionComponent/CategoriesSectionComponent'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import FreeTrialComponent from '../../Components/FreeTrialComponent/FreeTrialComponent'

export default function Home() {
  return (
    <>
      <CategoriesSectionComponent />
      <FAQSectionComponent />
      <FreeTrialComponent />
    </>
  )
}
