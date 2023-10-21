// DO NOT DELETE

import './App.css'
import Header from './Header.jsx'
import Description from './Description.jsx'
import DogImage from './DogImage.jsx'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */

// <DogImage imageUrl={"https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"} />

export const App = () => {

  return (
  <>
    <Header />
    <Description />
    <DogListContainer />
  </>
  )
}
