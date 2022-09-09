import React from 'react'
import Header from './components/Header'
import MainSection from './sections/MainSection'
import { FirstFold } from './sections/FirstFold'
import Footer from './components/Footer'


const App = () => {

  return (
    <div className='App'>
      <Header />
      <MainSection
        heading="Naruto's universe from A to Z."
        subHeading='Search for the characters you love the most!' />
      <FirstFold />
      <Footer />
    </div>
  )
}

export default App