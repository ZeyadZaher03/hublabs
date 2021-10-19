const slider = () => {
  const sliderData = [
    {
      img: "images/hero-image.jpeg",
    },
    {
      img: "images/hero-image.jpeg",
    },
    {
      img: "images/hero-image.jpeg",
    },
    {
      img: "images/hero-image.jpeg",
    },
    {
      img: "images/hero-image.jpeg",
    },
  ];

  const carouselSlide = document.querySelector(".carousel-slide");

  const createSlider = (imgSrc) => {
    // create elements
    const sliderItem = document.createElement("div");
    const sliderItemImg = document.createElement("img");

    // add classes
    sliderItem.classList.add("carousel-item");

    // arrange
    sliderItem.appendChild(sliderItemImg);

    // add content
    sliderItemImg.src = imgSrc;

    return sliderItem;
  };

  const addSliders = () => {
    sliderData.forEach((slider) => {
      const imgSrc = slider.img;
      carouselSlide.appendChild(createSlider(imgSrc));
    });
  };

  const sliderHandler = () => {
    // buttons
    const prevBtn = document.querySelector("#carousel-prevBtn");
    const nextBtn = document.querySelector("#carousel-nextBtn");

    // counter
    const carouselImages = document.querySelectorAll(".carousel-item");
    let counter = 1;
    const numberOfImages = sliderData.length;
    const size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // Button functionality
    nextBtn.addEventListener("click", () => {
      if (counter + 1 < numberOfImages) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });

    prevBtn.addEventListener("click", () => {
      if (counter > 0) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });
  };

  addSliders();
  sliderHandler();
};

// services
const servicesData = [
  {
    order: 0,
    title: "قوة الاداء مافيش طرق صعبة على فورد",
    imgSrc: "images/post-1.jpeg",
    description: "قوة الاداء مافيش طرق صعبة على فورد",
  },
  {
    order: 1,
    title: "الخامات خمات فورد في حتة تانية",
    imgSrc: "images/post-2.jpeg",
    description: "الخامات خمات فورد في حتة تانية",
  },
  {
    order: 2,
    title: "الراحة مساحة فورد في حتة تانية",
    imgSrc: "images/post-3.jpeg",
    description: "الراحة مساحة فورد في حتة تانية",
  },
];

const services = (servicesData) => {
  const createServiceItem = (title, imgSrc, order) => {
    // create elements
    const servicesItemContainer = document.createElement("div");
    const servicesItemImgContainer = document.createElement("div");
    const servicesItemImg = document.createElement("img");
    const servicesItemContent = document.createElement("div");
    const servicesItemText = document.createElement("p");

    // Add Child
    servicesItemContainer.appendChild(servicesItemImgContainer);
    servicesItemImgContainer.appendChild(servicesItemImg);
    servicesItemContainer.appendChild(servicesItemContent);
    servicesItemContent.appendChild(servicesItemText);

    // add Classes
    servicesItemContainer.classList.add("services-item");
    servicesItemImgContainer.classList.add("services-item-img");

    servicesItemContent.classList.add("services-item-content");
    servicesItemText.classList.add("services-item-text");

    // add Data
    servicesItemContainer.dataset.order = order;
    servicesItemText.innerHTML = title;
    servicesItemImg.src = imgSrc;

    return servicesItemContainer;
  };

  // container
  const servicesContainer = document.querySelector(".services-container");

  servicesData.forEach((serviceData) => {
    const title = serviceData.title;
    const imgSrc = serviceData.imgSrc;
    const order = serviceData.order;
    servicesContainer.appendChild(createServiceItem(title, imgSrc, order));
  });
};

// Modal
const modal = () => {
  // elements
  const modalContainer = document.querySelector(".modal");
  const servicesItem = document.querySelectorAll(".services-item");
  const closeButtonModal = document.querySelector(".modal-container-close");
  const modalBackground = document.querySelector(".modal-background");

  const modalContainerHeading = document.querySelector(
    ".modal-container-heading"
  );
  const modalContainerImg = document.querySelector(
    ".modal-container-image img"
  );
  const modalContainerContent = document.querySelector(
    ".modal-container-content"
  );

  // functions
  const modalDataHandler = (order) => {
    // Data
    const title = servicesData[order].title;
    const imgSrc = servicesData[order].imgSrc;
    const description = servicesData[order].description;

    // Content
    modalContainerHeading.innerHTML = title;
    modalContainerImg.src = imgSrc;
    modalContainerContent.innerHTML = description;
  };

  const modalOpenHandler = (order) => {
    modalContainer.style.display = "flex";
    modalDataHandler(order);
  };

  const modalCloseHandler = () => {
    modalContainer.style.display = "none";

    // Content
    modalContainerHeading.innerHTML = "";
    modalContainerImg.src = "";
    modalContainerContent.innerHTML = "";
  };

  Array.from(servicesItem).forEach((service) => {
    service.addEventListener("click", (e) => {
      const order = e.target.dataset.order;
      modalOpenHandler(order);
    });
  });

  closeButtonModal.addEventListener("click", () => modalCloseHandler());
  modalBackground.addEventListener("click", () => modalCloseHandler());
};

services(servicesData);
modal();
slider();
