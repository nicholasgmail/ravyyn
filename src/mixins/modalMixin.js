import { times } from "lodash";

const ModalMixin = {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    menuOptionsClear(menuOptions) {
      menuOptions.forEach((nav) => {
        nav.classList.remove("viewJobNavSelected");
      });
    },
    menuSettingsClear(menuSettings) {
      menuSettings.forEach((menu) => {
        if (menu.classList.contains("menuSettings") === true) {
          menu.classList.add("displayNone");
          menu.classList.remove("displayFlex");
        }
      });
    },
    menuSettingsChange(e, settingsId) {
      const nav = e.target;

      let menuOptions = Array.from(nav.parentElement.children);

      this.menuOptionsClear(menuOptions);

      let menuSettings = Array.from(
        document.getElementById(settingsId).parentElement.children
      );

      this.menuSettingsClear(menuSettings);

      nav.classList.toggle("viewJobNavSelected");
      document.getElementById(settingsId).classList.remove("displayNone");
      document.getElementById(settingsId).classList.add("displayFlex");
    },
    toggleFilter(e) {
      e.taret.children[1].classList.toggle("filterToggleActive");
      e.taret.children[1].children[0].classList.toggle(
        "filterToggleCircleActive"
      );
    },
    mobileViewJobClose(e) {
      e.target.parentElement.nextSibling.nextSibling.classList.toggle("hide");
    },
    toggleDropdown(e) {
      this.showDropdown = !this.showDropdown
    }
  },
};

export default ModalMixin;
