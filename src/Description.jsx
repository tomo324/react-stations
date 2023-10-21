// @ts-check
import {useState} from 'react'

export const Description = () => {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const setRandomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {setDogUrl(data.message)})
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div>
      <p>いぬ</p>
      <img src={dogUrl} alt="" />
      <button
      onClick={setRandomImage}>
        更新
      </button>
    </div>
  )
}

export default Description
