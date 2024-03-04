import image1 from "../public/images/image-product-1-thumbnail.jpg";
import image2 from "../public/images/image-product-2-thumbnail.jpg";
import image3 from "../public/images/image-product-3-thumbnail.jpg";
import image4 from "../public/images/image-product-4-thumbnail.jpg";
import image1b from "../public/images/image-product-1.jpg";
import image2b from "../public/images/image-product-2.jpg";
import image3b from "../public/images/image-product-3.jpg";
import image4b from "../public/images/image-product-4.jpg";

import { useRef, useState } from "react";

export default function ProductImagesZoom() {
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
  const handleActiveImage = (event) => {
    const activeItem = event.target;
    const Items = document.getElementById("zoom").lastChild.children;
    for (let i = 0; i < 4; i++) {
      Items[i].classList.remove("active");
    }
    activeItem.classList.add("active");
    // setHome();
    setHome(images[activeItem.id - 1].big);
    // console.log(event.target);
    // console.log(Items[1].classList);
    // console.log(activeItem.classList);
  };
  const close = () => {
    document.getElementById("zoom").style.display = "none";
    document.body.style.backgroundColor = "transparent";
    document.querySelector(".container").style.opacity = "1";
  };
  const shift = (event) => {
    const activeItem = document
      .getElementById("zoom")
      .querySelector(".images-small")
      .querySelector(".active");
    // activeItem.classList.add("active");
    // setHome();
    // console.log(activeItem.id);
    // console.log(images[activeItem.id - 1]);
    // console.log(event.target.classList[1]);

    const Items = document.getElementById("zoom").lastChild.children;
    for (let i = 0; i < 4; i++) {
      Items[i].classList.remove("active");
    }

    if (event.target.classList[1] == "right") {
      // setHome(images[activeItem.id % 4].big);
      // Items[(activeItem.id % 4) - 1].classList.add("active");
      setHome(images[activeItem.id % 4].big);
      Items[activeItem.id % 4].classList.add("active");
    } else {
      if (activeItem.id == 1) {
        // console.log(4);ss
        setHome(images[3].big);
        Items[3].classList.add("active");
        console.log(4);
      } else {
        // console.log(activeItem.id - (2 % 4));
        setHome(images[activeItem.id - (2 % 4)].big);
        Items[activeItem.id - (2 % 4)].classList.add("active");
      }
    }
  };
  return (
    <>
      <div className="product-images-box zoom" id="zoom">
        <div className="icon-close" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.1692 0L21.4656 3.2964L14.3229 10.4344L21.4641 17.5756L18.1677 20.872L11.0296 13.7293L3.89158 20.8704L0.595181 17.5741L7.73323 10.436L0.593628 3.2964L3.89002 0L11.0281 7.1396L18.1692 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="home-box">
          <img className="home" src={home} alt="" id="0" />
          <div className="icon-next left" onClick={shift}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
            >
              <path
                d="M10.5187 17.2646L2.56022 9.47398L10.3509 1.51552"
                stroke="#1D2026"
                stroke-width="2.95312"
              />
            </svg>
          </div>
          <div className="icon-next right" onClick={shift}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
            >
              <path
                d="M1.25 1.24701L9.125 9.12201L1.25 16.997"
                stroke="#1D2026"
                stroke-width="2.95313"
              />
            </svg>
          </div>
        </div>
        <div className="images-small">
          <img
            className="active"
            id="1"
            src={images[0].small}
            alt=""
            onClick={handleActiveImage}
          />
          <img
            id="2"
            src={images[1].small}
            alt=""
            onClick={handleActiveImage}
          />
          <img
            id="3"
            src={images[2].small}
            alt=""
            onClick={handleActiveImage}
          />
          <img
            id="4"
            src={images[3].small}
            alt=""
            onClick={handleActiveImage}
          />
        </div>
      </div>
    </>
  );
}
