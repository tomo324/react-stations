// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [receivedImage, setReceivedImage] = useState([]);

  // jsonから犬種のデータを取ってきてstateを更新
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => setBreeds(Object.keys(data.message)))
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
  <>
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      setSelectedBreed={setSelectedBreed}
      receivedImage={receivedImage}
      setReceivedImage={setReceivedImage}
      />

  </>
  )
};

export default DogListContainer
