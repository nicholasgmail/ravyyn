
const ScreenMixin = {
  methods: {
    menuOptionsClear(menuOptions) {
      menuOptions.forEach( (nav) => {
        nav.classList.remove("viewJobNavSelected")
      })
    },
    menuSettingsClear(menuSettings) {
    
        menuSettings.forEach( (menu) => {

        if( menu.classList.contains("menuSettings") === true) {
            menu.classList.add("displayNone");
            menu.classList.remove("displayFlex")
        }
        })

    },
    menuSettingsChange(nav, settingsId) {

        let menuOptions = Array.from(nav.parentElement.children);

        this.menuOptionsClear(menuOptions)

        let menuSettings = Array.from(document.getElementById(settingsId).parentElement.children);

        this.menuSettingsClear(menuSettings);

        nav.classList.toggle("viewJobNavSelected");
        document.getElementById(settingsId).classList.remove("displayNone");
        document.getElementById(settingsId).classList.add("displayFlex");
    
    },
    toggleFilter(filter) {
      filter.children[1].classList.toggle("filterToggleActive");
      filter.children[1].children[0].classList.toggle("filterToggleCircleActive");
    },
    mobileViewJobClose(section) {
      section.parentElement.nextSibling.nextSibling.classList.toggle("hide");
    }
  }
}

export default ScreenMixin