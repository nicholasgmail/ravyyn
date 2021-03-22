let coupon = '<div class="flexColumn">' +
  	'<p>Coupon information</p>'+
  	'<div class="dropdownRectangle"><input placeholder="Paste Discount Code"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="URL For Product"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="Coupon Bid"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="Product Description"></div>'+
  '</div>';

let couponNode = document.createElement("div");

couponNode.classList="new-campaign-step content-wrap text-center mx-auto position-relative";


let couponNodeCustomAd = couponNode.cloneNode(true);


couponNodeCustomAd.classList.add("couponNodeCustomAd");
couponNode.classList.add("couponNode");

couponNode.id = "advertisement-settings";

couponNodeCustomAd.id = "advertisement-settings-custom-ad";

/*
couponNode.innerHTML = '<p>Coupon information</p>'+
  	'<div class="dropdownRectangle"><input placeholder="Paste Discount Code"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="URL For Product"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="Coupon Bid"></div>'+
  	'<div class="dropdownRectangle"><input placeholder="Product Description"></div>';
*/

couponNode.innerHTML = '<button class="previous-step-link" onclick="previousSlide(event)">'+
            '<span class="sr-only">Go to Previous Slide Button</span>'+
        '</button>'+
        '<button class="next-step-link" onclick="nextSlide(event)">'+
            '<span class="sr-only">Go to Next Slide Button</span>'+
        '</button> '+
        '<button onclick="previousSlide(event)" class="modal-back position-absolute bg-transparent border-0"><span class="sr-only">back to previous slide</span></button>'+
            '<div class="step-wrap w-100 h-100 d-flex justify-content-center align-items-center">'+
                '<div class="wrap w-100">'+
                    '<h2 class="display-4 mb-5 mt-0 uploadTitles" id="couponNodeTitle"></h2>'+
                    //'<p class="text-primary mb-3 px-18">Coupon Information</p>'+
                    '<form class="mb-4">'+
                      '<input type="text" name="campaign-custom-name" placeholder="Paste Discount Code">'+
                      '<input type="text" name="campaign-custom-name" placeholder="URL For Product">'+
                      '<div class="flexRow spaceBetween bidEnterNewCampaign">'+
                        '<h1 class="orangeText font-la-nord-bold">ENTER BID*</h1>'+
                        '<div class="dropdownRectangle bidEnter">'+
                          '<p class="orangeText left">$</p>'+
                          '<input class="font-la-nord-bold" type="text" name="" placeholder="0.00">'+
                        '</div>'+
                      '</div>'+
                      '<label for="campaign-description" class="top-label d-block bg-custom-light border border-dark m-0 text-left">Product Description</label>'+
                      '<textarea id="campaign-description" placeholder="Write a brief description of... Lorem ipsum dolor sit amet"></textarea>'+
                    '</form>'+
                    '<button onclick="nextSlide(event)" class="next-btn-mobile btn btn-lg d-block d-md-none m-0 border-0 outline-0">Next</button>'+
                    /*
                    '<button id="skip-advertisement-settings-custom-ad" class="skip d-md-inline fs-sm font-poppins font-weight-bold text-primary m-0 border-0 outline-0 bg-white pt-3">Skip</button>'+
                    '<button class="next-btn-mobile btn btn-lg d-block d-md-none m-0 border-0 outline-0">Next</button>'+
                    '<ul class="slide-dots d-flex justify-content-between">'+
                        '<li class="dot-wrap">'+
                            '<span class="dot"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-2"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-2 active"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-3"></span>'+
                        '</li>'+
                      '</ul>'+*/
                    '</div>'+
                '</div>';




couponNodeCustomAd.innerHTML = '<button class="previous-step-link" onclick="previousSlide(event)">'+
            '<span class="sr-only">Go to Previous Slide Button</span>'+
        '</button>'+
        '<button class="next-step-link" onclick="nextSlideCustomAd(event)">'+
            '<span class="sr-only">Go to Next Slide Button</span>'+
        '</button> '+
        '<button onclick="previousSlide(event)" class="modal-back position-absolute bg-transparent border-0"><span class="sr-only">back to previous slide</span></button>'+
            '<div class="step-wrap w-100 h-100 d-flex justify-content-center align-items-center">'+
                '<div class="wrap w-100">'+
                    '<h2 class="display-4 mb-5 mt-0 uploadTitles" id="couponNodeTitle"></h2>'+
                    //'<p class="text-primary mb-3 px-18">Coupon Information</p>'+
                    '<form class="mb-4">'+
                      '<input type="text" name="campaign-custom-name" placeholder="Paste Discount Code">'+
                      '<input type="text" name="campaign-custom-name" placeholder="URL For Product">'+
                      '<div class="flexRow spaceBetween bidEnterNewCampaign">'+
                        '<h1 class="orangeText font-la-nord-bold">ENTER BID*</h1>'+
                        '<div class="dropdownRectangle bidEnter">'+
                          '<p class="orangeText left">$</p>'+
                          '<input class="font-la-nord-bold" type="text" name="" placeholder="0.00">'+
                        '</div>'+
                      '</div>'+
                      '<label for="campaign-description" class="top-label d-block bg-custom-light border border-dark m-0 text-left">Product Description</label>'+
                      '<textarea id="campaign-description" placeholder="Write a brief description of... Lorem ipsum dolor sit amet"></textarea>'+
                    '</form>'+
                    '<button onclick="nextSlideCustomAd(event)" class="next-btn-mobile btn btn-lg d-block d-md-none m-0 border-0 outline-0">Next</button>'+
                    /*'<button id="skip-advertisement-settings-custom-ad" class="skip d-md-inline fs-sm font-poppins font-weight-bold text-primary m-0 border-0 outline-0 bg-white pt-3">Skip</button>'+
                    '<button class="next-btn-mobile btn btn-lg d-block d-md-none m-0 border-0 outline-0">Next</button>'+
                    '<ul class="slide-dots d-flex justify-content-between">'+
                        '<li class="dot-wrap">'+
                            '<span class="dot"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-2"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-2 active"></span>'+
                        '</li>'+
                        '<li class="dot-wrap">'+
                            '<span class="dot dot-3"></span>'+
                        '</li>'+
                      '</ul>'+*/
                    '</div>'+
                '</div>';






function nextSlide(locationBase) {
	let parentSlide = locationBase.target.parentElement;

  //IF NEXT SLIDE BUTTON
  if(locationBase.target.classList.contains("next-btn-mobile") === true) {
    parentSlide = locationBase.target.parentElement.parentElement.parentElement;
  }

	parentSlide.classList.toggle("displayBlock");

	console.log(parentSlide.nextElementSibling);

	parentSlide.nextElementSibling.nextElementSibling.style.display="block";
}

function nextSlideCustomAd(locationBase) {
	let parentSlide = locationBase.target.parentElement;

  //IF NEXT SLIDE BUTTON
  if(locationBase.target.classList.contains("next-btn-mobile") === true) {
    parentSlide = locationBase.target.parentElement.parentElement.parentElement;
  }

	//parentSlide.classList.toggle("displayFlex");
	parentSlide.classList.toggle("displayBlock")

	parentSlide.nextElementSibling.nextElementSibling.style.display="block";
}


function previousSlide(locationBase) {
	let parentSlide = locationBase.target.parentElement;

	console.log(parentSlide.nextElementSibling);

	parentSlide.previousElementSibling.style.display="block";
}




//document.getElementById("top").innerHTML += coupon;