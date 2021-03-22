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

  


    //variables
    var campaignViews = $('.new-campaign-step'),
        signUpChoose = $('#sign-up-choose'),
        uploadAdBtn = $('#upload-ad-btn'),
        createCampaignView = $('.create-campaign'), /*HAD TO TARGET CLASS CAUSE OF CSS DESIGN FLAW*/
        createCampaignCustomView = $('.create-campaign-custom'), /*HAD TO TARGET CLASS CAUSE OF CSS DESIGN FLAW*/
        createCampaignPreviousBtn = $('#create-campaign .previous-step-link'),
        createCampaignCustomPreviousBtn = $('#create-campaign-custom .previous-step-link'),
        createCampaignNextBtn = $('#create-campaign .next-step-link'),
        createCampaignCustomNextBtn = $('#create-campaign-custom .next-step-link'),
        newCampaignDetails = $('#new-campaign-details-submit'),
        newCampaignCustomDetails = $('#new-campaign-custom-details-submit'),
        uploadCampaignPhotosView = $('#upload-campaign-photos'),
        uploadCampaignPhotosPreviousBtn = $('#upload-campaign-photos .previous-step-link'),
        uploadCampaignPhotosNextBtn = $('#upload-campaign-photos .next-step-link'),
        uploadPhotosMoreDetailsBtn = $('#add-more-details-btn'),
        uploadPhotosMoreDetailsBtnTwo = $('#add-more-details-btn-two'),
        userUploadedPhotosGrid = $('#uploaded-campaign-photos'),
        uploadedCampaignPhotosPreviousBtn = $('#uploaded-campaign-photos .previous-step-link'),
        uploadedCampaignPhotosNextBtn = $('#uploaded-campaign-photos .next-step-link'),
        advertisementSettingsView = $('#advertisement-settings'),
        adSettingsPreviousBtn = $('#advertisement-settings .previous-step-link'),
        adSettingsNextBtn = $('#advertisement-settings .next-step-link'),
        influencerSettingsView = $('#campaign-influencer-settings'),
        influencerSettingsPreviousBtn = $('#campaign-influencer-settings .previous-step-link'),
        influencerSettingsNextBtn = $('#campaign-influencer-settings .next-step-link'),
        influencerSettingsCustomAdNextBtn = $('#campaign-influencer-settings-custom-ad .next-step-link'),
        campaignBudgetView = $('#new-campaign-budget'),
        skipInfluencerSettings = $('#skip-influencer-settings'),
        skipInfluencerSettingsCustomAd = $('#skip-influencer-settings-custom-ad'),
        customCampainBudgetField = $('#new-campaign-budget-value'),
        createCustomAdBtn = $('#create-custom-ad-btn'),
        customCampainBudgetFieldCustomAd = $('#new-campaign-budget-value-custom-ad'),
        linkInBioField = $('#add-link-in-bio'),
        campaignBudgetSubmitBtn = $('#new-campaign-budgets-submit'),
        campaignBudgetSubmitBtnCustomAd = $('#new-campaign-budgets-custom-ad-submit'),
        newCampaignCongratsView= $('#new-campaign-congrats'),
        campaignBudgetCustomView = $('#new-campaign-budget-custom-ad'),
        advertisementSettingsCustomAdNextBtn = $('#advertisement-settings-custom-ad .next-step-link'),
        advertisementSettingsCustomAdPreviousBtn = $('#advertisement-settings-custom-ad .previous-step-link')

    // User has chosen create custom ad 
    var advertisementSettingsCustomAd = $('#advertisement-settings-custom-ad'),
        influencerSettingsCustomAd = $('#campaign-influencer-settings-custom-ad')


    // back btns mobile
    var uploadPhotosBack = $('#upload-campaign-photos .modal-back'),
        uploadedPhotosBack = $('#uploaded-campaign-photos .modal-back'),
        createCampaignBack = $('#create-campaign .modal-back'),
        adSettingsBack = $('#advertisement-settings .modal-back'),
        influencerSettingsBack = $('#campaign-influencer-settings .modal-back'),
        campaignBudgetBack = $('#new-campaign-budget .modal-back')
        

    
    
    function changeModalView(newSlide) {
        campaignViews.hide()
        newSlide.fadeIn()
    }
    $('textarea#campaign-description').on('click', function() {
        $(this).attr('placeholder','')
    })


    // back btns mobile
    createCampaignBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(signUpChoose)
    })

    uploadPhotosBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(createCampaignView)
    })

    uploadedPhotosBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(signUpChoose)
    })

    adSettingsBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(userUploadedPhotosGrid)
    })
    influencerSettingsBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsView)
    })
    campaignBudgetBack.on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })
    // end mobbile back btns



    //USER AD CREATION BACK BUTTON
    createCampaignPreviousBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(signUpChoose)
    })
    createCampaignNextBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(uploadCampaignPhotosView)
    })

    //CUSTOM AD CREATION BACK BUTTON
    createCampaignCustomPreviousBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(signUpChoose)
    })
    createCampaignCustomNextBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(userUploadedPhotosGrid)
    })

    //0 SLIDE BUTTONS FOR USER || CUSTOM AD CREATION
    createCustomAdBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(createCampaignCustomView);
    })

    uploadAdBtn.on('click',function(e) {
        e.preventDefault();
        changeModalView(createCampaignView);
    })

    //1ST SLIDE BUTTONS TO ADVANCE SLIDE
    newCampaignDetails.on('click',function(e) {
        e.preventDefault()
        changeModalView(uploadCampaignPhotosView)
    })

    newCampaignCustomDetails.on('click',function(e) {
        e.preventDefault()
        changeModalView(userUploadedPhotosGrid);
    })


    //UPLOAD PHOTOS USER AD
    uploadPhotosMoreDetailsBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsView)
    })

    uploadPhotosMoreDetailsBtnTwo.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsCustomAd)
    })

    uploadCampaignPhotosPreviousBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(createCampaignView)
    })
    uploadCampaignPhotosNextBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsView)
    })

    //UPLOAD PHOTOS CUSTOM AD
    uploadedCampaignPhotosPreviousBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(createCampaignCustomView)
    })
    uploadedCampaignPhotosNextBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsCustomAd)
    })


    adSettingsPreviousBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(uploadCampaignPhotosView)
    })
    adSettingsNextBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })
    $('#skip-advertisement-settings').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })
    $('#advertisement-settings .next-btn-mobile').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })
    $('#advertisement-settings-custom-ad .next-btn-mobile').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })

    advertisementSettingsCustomAdNextBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsCustomAd)
    })
    advertisementSettingsCustomAdPreviousBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(userUploadedPhotosGrid)
    })


    influencerSettingsPreviousBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsView)
    })



    //OLD CODE THAT TOOK USER TO INFLUENCER VERSION CUSTOM ADD WHEN CLICKED

    $('#campaign-influencer-settings-custom-ad .previous-step-link').on('click',function(e) {
        e.preventDefault()
        console.log('hi')
      //  console.log(advertisementSettingsCustomAd)
      console.log($('#advertisement-settings-custom-ad'))
      campaignViews.hide()
      advertisementSettingsCustomAd.fadeIn()
    })


    influencerSettingsCustomAdNextBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetCustomView)
    })
    skipInfluencerSettingsCustomAd.on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetCustomView)
    })

    $('#new-campaign-budget-custom-ad .previous-step-link').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsCustomAd)
    })




    skipInfluencerSettings.on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetView)
    })
    $('#campaign-influencer-settings .next-btn-mobile').on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetView)
    })

    $('#advertisement-settings .dot-2').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsView)
    })
    $('#advertisement-settings .dot-3').on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetView)
    })

    // User has chosen to create Custom ad 
    $('#skip-advertisement-settings-custom-ad').on('click',function(e) {
        e.preventDefault()
        changeModalView(influencerSettingsCustomAd)
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



    $('#campaign-influencer-settings .dot-1').on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsView)
    })
    $('#campaign-influencer-settings-custom-ad .dot-1').on('click',function(e) {
        e.preventDefault()
        changeModalView(advertisementSettingsCustomAd)
    })

    $('#campaign-influencer-settings .next-step-link').on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetView)
    })

    $('#campaign-influencer-settings .dot-3').on('click',function(e) {
        e.preventDefault()
        changeModalView(campaignBudgetView)
    })


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



    $('#new-campaign-budget .dot-1').on('click', function() {
        changeModalView(advertisementSettingsView)
    })
    $('#new-campaign-budget .dot-2').on('click', function() {
        changeModalView(influencerSettingsView)
    })
    $('#new-campaign-budget .previous-step-link').on('click', function() {
        changeModalView(influencerSettingsView)
    })

    campaignBudgetSubmitBtn.on('click',function(e) {
        e.preventDefault()
        changeModalView(newCampaignCongratsView)
    })
    campaignBudgetSubmitBtnCustomAd.on('click',function(e) {
        e.preventDefault()
        changeModalView(newCampaignCongratsView)
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





$(document).ready(function(){

    /*
    * Mobile Nav
    */ 
    var mobileMenuOverlay = $('.mobile-menu-overlay'),
        outsideMobileMenu = $('#main-nav-mobile .outside'),
        mobileOpenBtn = $('.navbar-toggler'),
        mobileNavCloseBtn = $('#menu-close-btn'),
        mobilemenuWrap = $('#main-nav-mobile')

    function closeMobileMenu() {
        mobilemenuWrap.removeClass('active')
        mobileMenuOverlay.removeClass('active')
    }
    function openMobileMenu() {
        mobilemenuWrap.addClass('active')
        mobileMenuOverlay.addClass('active')
    }

    // close on window resize 
    $(window).resize(function() {
        closeMobileMenu();
    })

    outsideMobileMenu.on('click',function() {
        closeMobileMenu();
    })

    $('.nav-link').on('click',function() {
        closeMobileMenu();
    })
    mobileOpenBtn.on('click', function() {
        openMobileMenu();
    })
    mobileNavCloseBtn.on('click', function() {
        closeMobileMenu();
    })

});