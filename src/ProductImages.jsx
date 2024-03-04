import image1 from "../public/images/image-product-1-thumbnail.jpg";
import image2 from "../public/images/image-product-2-thumbnail.jpg";
import image3 from "../public/images/image-product-3-thumbnail.jpg";
import image4 from "../public/images/image-product-4-thumbnail.jpg";
import image1b from "../public/images/image-product-1.jpg";
import image2b from "../public/images/image-product-2.jpg";
import image3b from "../public/images/image-product-3.jpg";
import image4b from "../public/images/image-product-4.jpg";

import { useRef, useState } from "react";

export default function ProductImages() {
  const images = [
    {
      small: image1,
      big: image1b,
    },
    {
      small: image2,
      big: image2b,
    },
    {
      small: image3,
      big: image3b,
    },
    {
      small: image4,
      big: image4b,
    },
  ];
  const [home, setHome] = useState(images[0].big);

  const itemWithIdRef = useRef(null);
  const handleActiveImage = (event) => {
    const activeItem = event.target;
    const Items = itemWithIdRef.current.children;
    for (let i = 1; i < 5; i++) {
      Items[i].classList.remove("active");
    }
    activeItem.classList.add("active");
    // setHome();
    setHome(images[activeItem.id - 1].big);
    console.log(active);
  };
  const zoom = () => {
    const zoomItem = document.getElementById("zoom");
    const container = document.querySelector(".container");
    zoomItem.style.display = "flex";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    container.style.opacity = "0.3";
    console.log(zoomItem);
    console.log(active);
  };

  return (
    <>
      <div className="product-images-box" ref={itemWithIdRef}>
        <div className="home-box">
          <img className="home" src={home} alt="" id="0" onClick={zoom} />
        </div>
        <img
          className="active"
          id="1"
          src={images[0].small}
          alt=""
          onClick={handleActiveImage}
        />
        <img id="2" src={images[1].small} alt="" onClick={handleActiveImage} />
        <img id="3" src={images[2].small} alt="" onClick={handleActiveImage} />
        <img id="4" src={images[3].small} alt="" onClick={handleActiveImage} />
      </div>
    </>
  );
}

// export function ProductImagesZoom() {
//   const images = [
//     {
//       small: image1,
//       big: image1b,
//     },
//     {
//       small: image2,
//       big: image2b,
//     },
//     {
//       small: image3,
//       big: image3b,
//     },
//     {
//       small: image4,
//       big: image4b,
//     },
//   ];
//   const [home, setHome] = useState(images[0].big);

//   const itemWithIdRef = useRef(null);
//   const handleActiveImage = (event) => {
//     const activeItem = event.target;
//     const Items = itemWithIdRef.current.children;
//     for (let i = 1; i < 5; i++) {
//       Items[i].classList.remove("active");
//     }
//     activeItem.classList.add("active");
//     // setHome();
//     setHome(images[activeItem.id - 1].big);
//   };
//   const back = () => {
//     const zoomIn = document.querySelector(".zoom-in");
//     const container = document.querySelector(".container");
//     zoomIn.style.display = "none";
//     container.style.opacity = "1";
//     document.body.style.backgroundColor = "";
//   };
//   const change = (event) => {
//     const item = event.target.classList[1];
//     const currentActive = document
//       .querySelector(".zoom-in")
//       .querySelector(".active");
//     const Items = itemWithIdRef.current.children;
//     // console.log(Items.filter((item) => item.tagName == "IMG"));
//     // console.log(currentActive);
//     for (let i = 1; i < 5; i++) {
//       Items[i].classList.remove("active");
//     }
//     console.log(currentActive);
//     if (item == "left") {
//       // Items[document.querySelector(".product-images-box.zoom").querySelector(".active")]
//       Items[(currentActive.id - 1) % 4].classList.add("active");
//     } else if (item == "right") {
//       // console.log(Items[(currentActive.id + 1) % 4].classList);
//       Items[currentActive.id + 1].classList.add("active");
//       console.log(document.querySelector(".zoom-in").querySelector(".active"));
//       // console.log(Items[currentActive.id + 1].classList);
//     }
//     console.log(currentActive);
//   };
//   return (
//     <>
//       <div className="zoom-in">
//         <div className="icon-close" onClick={back}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="21"
//             viewBox="0 0 22 21"
//             fill="none"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M18.1692 0L21.4656 3.2964L14.3229 10.4344L21.4641 17.5756L18.1677 20.872L11.0296 13.7293L3.89158 20.8704L0.595181 17.5741L7.73323 10.436L0.593628 3.2964L3.89002 0L11.0281 7.1396L18.1692 0Z"
//               fill="white"
//             />
//           </svg>
//         </div>
//         <div className="product-images-box zoom" ref={itemWithIdRef}>
//           <div className="home-box">
//             <img className="home" src={home} alt="" id="0" />
//

//           </div>
//           <img
//             className="active"
//             id="1"
//             src={images[0].small}
//             alt=""
//             onClick={handleActiveImage}
//           />
//           <img
//             id="2"
//             src={images[1].small}
//             alt=""
//             onClick={handleActiveImage}
//           />
//           <img
//             id="3"
//             src={images[2].small}
//             alt=""
//             onClick={handleActiveImage}
//           />
//           <img
//             id="4"
//             src={images[3].small}
//             alt=""
//             onClick={handleActiveImage}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
