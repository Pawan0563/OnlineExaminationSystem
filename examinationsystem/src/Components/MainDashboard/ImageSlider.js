import { useEffect, useState } from "react";
// import image1 from "./Image/on1.png"
// import image2 from "../Image/on2.png"
// import image3 from "./Image/on3.png"

import image1 from "./Images/on1.png"
import image2 from "./Images/on2.png"
import image3 from "./Images/on3.png"

function ImageSlider() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image1])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 5000)
  }, [])

  return (
    <div>
      <img width={1840} height={800} src={allImages[selectedImage]} /> <br />
      {/* <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      >PREV</button>

      <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      >NEXT</button> */}

    </div>
  );
}

export default ImageSlider;