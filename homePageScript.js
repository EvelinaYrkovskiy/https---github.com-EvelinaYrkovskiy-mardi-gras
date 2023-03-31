document.addEventListener("DOMContentLoaded", () => {
  const SLIDER_IMAGE_1 = document.getElementById("slider-image-1");
  const SLIDER_IMAGE_2 = document.getElementById("slider-image-2");
  const SLIDER_IMAGE_3 = document.getElementById("slider-image-3");

  window.pictures1 = [
    {
      src: "/images/slider/0f72ab9d04f4a2099128a2c6605762fa.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/4f278b51a6e6b17a22987e6defc4a06a.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/a3f4b11238eca93c0966b54d2914ab05.jpg",
      alt: "pigemardi gras carnivalon",
    },
  ];

  window.pictures2 = [
    {
      src: "/images/slider/c8bb8517335b8e7ef59796eac03949e1.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/c37382f4d3c7ca8cd9db150beca8e7ab.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/0cfe9c6b575d7e1ce64e8efba29e8550.jpg",
      alt: "pigemardi gras carnivalon",
    },
  ];

  window.pictures3 = [
    {
      src: "/images/slider/dd92e6851c64cc9310a63697736e47b5.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/bcb8d6c4f6d22b4a01e6b3015d7d5dd9.jpg",
      alt: "mardi gras carnival",
    },
    {
      src: "/images/slider/a3f4b11238eca93c0966b54d2914ab05.jpg",
      alt: "pigemardi gras carnivalon",
    },
  ];

  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;

  const setCounter = (pictures, current, direction) => {
    if (direction === "next") {
      return current === pictures.length - 1 ? 0 : current + 1;
    } else if (direction === "prev") {
      return current === 0 ? pictures.length - 1 : current - 1;
    }
  };

  const changeSlide = () => {
    counter1 = setCounter(window.pictures1, counter1, "next");
    renderSlider1(window.pictures1, counter1);

    counter2 = setCounter(window.pictures2, counter2, "next");
    renderSlider2(window.pictures2, counter2);

    counter3 = setCounter(window.pictures3, counter2, "next");
    renderSlider3(window.pictures3, counter3);
  };

  const renderSlider1 = (pictures, num = 0) => {
    if (!pictures.length) return undefined;
    SLIDER_IMAGE_1.src = pictures[num].src;
    SLIDER_IMAGE_1.alt = pictures[num].alt;
  };

  const renderSlider2 = (pictures, num = 0) => {
    if (!pictures.length) return undefined;
    SLIDER_IMAGE_2.src = pictures[num].src;
    SLIDER_IMAGE_2.alt = pictures[num].alt;
  };
  const renderSlider3 = (pictures, num = 0) => {
    if (!pictures.length) return undefined;
    SLIDER_IMAGE_3.src = pictures[num].src;
    SLIDER_IMAGE_3.alt = pictures[num].alt;
  };

  setInterval(changeSlide, 3000);

  renderSlider1(window.pictures1, 0);
  renderSlider2(window.pictures2, 0);
  renderSlider3(window.pictures3, 0);

});


