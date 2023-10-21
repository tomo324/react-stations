// @ts-check

import { useState } from "react"

export const BreedsSelect = ( {breeds, selectedBreed, setSelectedBreed, receivedImage, setReceivedImage} ) => {

  const handleChange = (e) => {
    setSelectedBreed(e.target.value);
  }

  const getImageByBreed = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/7`)
    .then((res) => res.json())
    .then((data) => setReceivedImage(data.message))
  }

  return (
    <>
      <select value={selectedBreed} onChange={handleChange}>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={getImageByBreed}>
        表示
      </button>
      <ul>
        {receivedImage.map((image) => (
          <li><img src={image} alt="" /></li>
        ))}
      </ul>
    </>

  )
}

export default BreedsSelect
