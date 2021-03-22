const FAQMixin = {
    mounted() {
        Array.from( document.getElementsByClassName("faqRow") ).forEach( (faqInfo)=> {
          faqInfo.onclick = ()=> {
            let textlength = faqInfo.children[1].children[0].innerText.length;
            faqInfo.children[0].children[0].classList.toggle("rustText");
            
            if(faqInfo.children[1].children[0].innerText.length < 211) {
              faqInfo.children[1].classList.toggle("faqInfoDropdownSmall");
            }
  
            if(faqInfo.children[1].children[0].innerText.length > 348) {
              faqInfo.children[1].classList.toggle("faqInfoDropdownLarge");
            }
  
            if( (textlength < 348) && (textlength > 210) ) {
              faqInfo.children[1].classList.toggle("faqInfoDropdown");
            }
            // console.log(faqInfo.children[1].children[0].innerText.length);
          };
        })
      }
}

export default FAQMixin
