$(document).ready(function(){





    /*
    *   Signup and Login
    */

    $('#copy-influencer-ig-code-btn').on('click', function(e) {
        e.preventDefault();
        copyToClipboard('influencer-ig-code')
        $(this).find('svg').css({
            'fill' : '#cf7662'
        })
    })

    function copyToClipboard(elementId) {
        // Create a "hidden" input
        var aux = document.createElement("input");

        // Assign it the value of the specified element
        aux.setAttribute("value", document.getElementById(elementId).innerText);
      
        // Append it to the body
        document.body.appendChild(aux);
      
        // Highlight its content
        aux.select();
      
        // Copy the highlighted text
        document.execCommand("copy");
      
        // Remove it from the body
        document.body.removeChild(aux);

        $('#ig-code-copied').addClass('active');
        setTimeout(function() {
             $('#ig-code-copied').removeClass('active');
        }, 1500);
        
      }

      var influencerInterestsField = $('.interests-dropdown .button');

      influencerInterestsField.on('click', function() {
        if($(this).hasClass('active')) {

            $('.interests-dropdown .dropdown').slideUp()
            influencerInterestsField.removeClass('active')

        } else {

            $('.interests-dropdown .dropdown').slideDown()
            influencerInterestsField.addClass('active')

            setTimeout(function() {
                $(window).on('click', function() {
                    $('.interests-dropdown .dropdown').slideUp()
                    influencerInterestsField.removeClass('active')
                });
            }, 50)
            
            $('.dropdown').click(function(event){
                event.stopPropagation();
            });
            influencerInterestsField.click(function(event){
                event.stopPropagation();
            });
          
        }
      })
      var influencerCountryField = $('.country-dropdown .button');

      influencerCountryField.on('click', function() {
        if($(this).hasClass('active')) {

            $('.country-dropdown .dropdown').slideUp()
            influencerCountryField.removeClass('active')

        } else {

            $('.country-dropdown .dropdown').slideDown()
            influencerCountryField.addClass('active')

            setTimeout(function() {
                $(window).on('click', function() {
                    $('.country-dropdown .dropdown').slideUp()
                    influencerCountryField.removeClass('active')
                });
            }, 50)
            
            $('.dropdown').click(function(event){
                event.stopPropagation();
            });
            influencerCountryField.click(function(event){
                event.stopPropagation();
            });
          
        }
      })



      // Code goes here

      $("select").change(function(){
        $(this).on('mouseover', function() {
            $(this).removeClass($(this).attr('class'))
            .addClass($(":selected",this).attr('class')); 
        })
        /*If you want to keep some classes just add them back here*/
        //Optional: $(this).addClass("Classes that should always be on the select");
    
    });








    

    /* Dashboard Page */
    if( ($('#new-campaign-modal').length > 0) && (window.screen.width > 750) ) {
        $('.time-field-wrap label').on('click', function() {
            $('.time-field-wrap span').css('display','none')
        })

        //$('#campaign-start-time').timepicker();
        //$('#campaign-start-date').Zebra_DatePicker();


        // $(".js-range-slider").ionRangeSlider();
        $(".influencer-age-range").ionRangeSlider({
            skin: "big",
            type: "double",
            grid: false,
            min: 18,
            max: 70,
            hide_min_max: true,
            from: 25,
            to: 60,
        });

    } else {

        $('.time-field-wrap label').on('click', function() {
            $('.time-field-wrap span').css('display','none')
        })

        //ACTIVATE AGE RANGE
        $(".influencer-age-range").ionRangeSlider({
            skin: "big",
            type: "double",
            grid: false,
            min: 18,
            max: 70,
            hide_min_max: true,
            from: 25,
            to: 60,
        });
    }

    
    
    function changeModalView(newSlide) {
        campaignViews.hide()
        newSlide.fadeIn()
    }


    $('textarea#campaign-description').on('click', function() {
        $(this).attr('placeholder','')
    })



       
    // Advertisement settings link in bio
    $('#add-link-in-bio').change(function(){
        if($(this).is(':checked')){
            $('.add-link-label').hide()
            $('#bio-link-url').focus()
        } else {
            $('#bio-link-url').val('')
        }
    });
    // Custom Ad Path
    $('#add-link-in-bio-custom-ad').change(function(){
        if($(this).is(':checked')){
            $('.add-link-label').hide()
            $('#bio-link-url-custom-ad').focus()
        } else {
            $('#bio-link-url-custom-ad').val('')
        }
    });


    // Budget view 
    $('#budget-buttons button').on('click', function(e) {
        e.preventDefault();
        if($(this).text() !== 'Custom') {
          
          $('#budget-buttons button').removeClass('active')
          $(this).addClass('active')
          numberStr = $(this).text().substring(1);
          customCampainBudgetField.val(numberStr)

        } else {
            customCampainBudgetField.addClass('active')
            customCampainBudgetField.val('$')
            customCampainBudgetField.focus()
        }
    })

    // Create Custom Ad
    $('#budget-buttons-custom-ad button').on('click', function(e) {
        e.preventDefault();
        if($(this).text() !== 'Custom') {
          
          $('#budget-buttons-custom-ad button').removeClass('active')
          $(this).addClass('active')
          numberStr = $(this).text().substring(1);
          customCampainBudgetFieldCustomAd.val(numberStr)

        } else {
            customCampainBudgetFieldCustomAd.addClass('active')
            customCampainBudgetFieldCustomAd.val('$')
            customCampainBudgetFieldCustomAd.focus()
        }
    })



    /* Smooth Scrolling */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

});





//CODE FOR CAMPAIGN DATE TEXT REPLACEMENT
document.getElementById("campaign-start-date").onchange = (date) => {
  document.getElementById("startDateText").innerText = date.target.value; 
}

document.getElementById("campaign-start-date-custom").onchange = (date) => {
  document.getElementById("startDateTextCustom").innerText = date.target.value; 
}



//CODE FOR CUSTOM CAMPAIGN NAME REPLACEMENT && NEXT BUTTON
function campaignTitle(e){
    console.log(e.target.value);
  let campaignName = e.target.value;

  let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

  uploadTitles.forEach((title)=> {
    title.innerText = campaignName + e.key;
  })
}

document.getElementById("campaignNameCustomNext").onclick = (e) => {
  let campaignName = document.getElementById("campaign-custom-name");

  let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

  uploadTitles.forEach((title)=> {
    title.innerText = campaignName.value;
  })
}





// CODE FOR NEW CAMPAIGN EXIT
document.getElementById("login-popup-close").onclick = ()=> {
    document.open();
    window.parent.document.getElementById("newCampaign").style.display="none";
}

function newCampaignClose() {
    document.open();
    window.parent.document.getElementById("newCampaign").style.display="none";
    window.parent.document.body.style.overflow="initial";
}

function newCampaignPageLoadAndClose() {
    newCampaignClose();
    window.parent.window.location.href = "http://stage.ravyyn.com/find-influencers.html"; 

}










function newCampaign(campaignType) {

    if(campaignType === "new") {
        document.getElementById("sign-up-choose").classList.toggle("displayNone");
        document.querySelector(".customAdStart").classList.toggle("displayBlock");
    }

    if(campaignType === "userAd") {
        document.getElementById("sign-up-choose").classList.toggle("displayNone");
        document.querySelector(".userAdStart").classList.toggle("displayBlock");
    }

}

function newCampaignNextSlide(slide) {
    slide.parentElement.classList.toggle("displayNone");
    slide.parentElement.nextElementSibling.classList.toggle("displayBlock");
}

function newCampaignPreviousSlide(slide) {
    slide.parentElement.classList.toggle("displayBlock");
    slide.parentElement.previousElementSibling.classList.toggle("displayNone");
}


function newCampaignNextSlideBottomButton(slide) {
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    slide.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle("displayBlock");
}


function newCampaignUserAdStartMain(slide) {
    slide.parentElement.classList.toggle("displayBlock");
    document.querySelector(".customAdStartMain").classList.toggle("displayBlock");
}

function newCampaignBottomUserAdStartMain(slide) {
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    document.querySelector(".customAdStartMain").classList.toggle("displayBlock");
}




function discountCodeStartUserAd(slide) {
    toggleFilter(slide);
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    document.querySelector(".discountCodeStartUserAd").classList.toggle("displayBlock");
}

function discountCodeStartCustomAd(slide) {
    toggleFilter(slide);
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    document.querySelector(".discountCodeStartCustomAd").classList.toggle("displayBlock");
}




function newCampaignUserAdPhotoUpload(slide) {
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    document.querySelector(".userAdStartPhotoUpload").classList.toggle("displayBlock");
}

function newCampaignCustomAdPhotoUpload(slide) {
    slide.parentElement.parentElement.parentElement.parentElement.classList.toggle("displayNone");
    document.querySelector(".customAdStartPhotoUpload").classList.toggle("displayBlock");
}






function customBudgetShow() {
    document.getElementById("customBudgetShow").classList.toggle("displayFlex");
}