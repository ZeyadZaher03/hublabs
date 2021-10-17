const footerVisHandler = (type) => {
  window.addEventListener(
    "scroll",
    () => {
      const sideNav = document.querySelector(".navigation_side");
      const element = document.querySelector(".footer");
      const offset =
        element.getBoundingClientRect().top -
        element.offsetParent.getBoundingClientRect().top;
      const top = window.pageYOffset + window.innerHeight - offset;

      if(type === "main"){
        if (Math.round(top) >= 0) {
          sideNav.style.top = 90 - top + "px";
        } else {
          sideNav.style.top = 100 + "px";
        }
      }else if(type == "side"){
        if (Math.round(top) >= -10) {
          sideNav.style.top =  1- top + "px";
        } else {
          sideNav.style.top = 15 + "px";
        }
      }
    },
    { passive: false }
  );
};

const navSettingsHandler = () => {
  const settingButton = document.querySelector(".navigation_top-settingicon");
  const settingsDropDown = document.querySelector(".settings-dropdown");

  let isOpen = false;

  // chack if the Dropdown is open or not
  // if(true){
    // const opacity = settingsDropDown.style.opacity
    // const display = settingsDropDown.style.display
    // console.log(settingsDropDown.style.opacity);
  // }


  // open animation and func.
  const openhandler = () => {
    settingsDropDown.disabled = true;
    settingsDropDown.style.display = "block";

    anime({
      targets: settingsDropDown,
      duration: 200,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      translateX: [100, 0],

      complete() {
        settingsDropDown.disabled = false;
        isOpen = false;
        isOpen = true;
      },
    });
  };

  // close animation and func.
  const closehandler = () => {
    settingsDropDown.disabled = true;

    anime({
      targets: settingsDropDown,
      duration: 200,
      easing: "easeInOutQuad",
      opacity: [1, 0],
      translateX: [0, 100],

      complete() {
        settingsDropDown.style.display = "none";
        settingsDropDown.disabled = false;
        isOpen = false;
      },
    });
  };

  // if it was open whem the user frist open the website close it
  if (isOpen) {
    closehandler();
  }

  settingButton.addEventListener("click", () => {
    if (isOpen) {
      closehandler();
    } else {
      openhandler();
    }

    // if 1 mins passed the dropdownlist will disappear
    // code here later ...
  });
}