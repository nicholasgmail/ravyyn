<template>
    <main role="main">
        <div class="hero border-top border-bottom border-dark position-relative">
            <div class="container h-100 d-flex justify-content-center align-items-center">
                <div>
                    <h2 class="text-center text-primary heading mb-5">
                    <span class="display-1">
                        <span class="d-lg-inline d-block">Influencer </span> 
                        <span class="marketing">Marketing</span>
                    </span>
                    <span class="font-la-nord-semilight d-block subtitle display-3">made easy</span>
                    </h2>
                    <p class="lead text-center">
                    <span class="d-inline d-md-block">Connect with local influencers to grow your brand and expand</span> your business with effortless, custom, and shockingly affordable advertising.
                    </p>
                </div>
            </div>
        </div>

        <section class="bg-custom-light" id="advertiser-influencer-section">
        
        <div class="container xxl-container position-relative py-100" id="advertiser">
          <div id="scroll-down-arrow" class="position-absolute">
            <a href="#advertiser">
              <img src="../assets/icons/arrow-short.svg" alt="down arrow icon">
            </a>
          </div>
          <div id="long-scroll-down-arrow" class="position-absolute d-none d-lg-block">
            <a href="#step-01">
              <img src="../assets/icons/arrow-long.svg" alt="down arrow icon">
            </a>
          </div>

          <div class="row flex-column-reverse flex-xl-row pb-4" id="advertiser-section">
            <div class="col-xl-6 grid-wrapper">

              <div class="demo-grid-box mx-xl-0 mr-lg-auto mx-sm-auto bg-white" id="advertiser-box">
                  <!-- influencer settings popup -->
                  <div id="influencer-settings" class="active position-absolute bg-white shadow">
                    <img src="../assets/images/influencer-settings.png" class="w-100" alt="screenshot of the Ravyyn app showing influencer settings">
                  </div>

                  <img src="../assets/images/Box-header.png" alt="screenshot of the Ravyyn app showing analytics" class="w-100">

                  <div class="d-flex flex-wrap px-4 justify-content-between">
                    <div class="ig-grid-card">
                      <img src="../assets/images/rachel-waller-card.png" alt="instagram grid for rachel waller" class="w-100">
                    </div>
                    <div class="ig-grid-card">
                      <img src="../assets/images/aden-fraserr.png" alt="instagram grid for aden aden-fraserr" class="w-100">
                    </div>
                    <div class="ig-grid-card">
                      <img src="../assets/images/cody-rudd.png" alt="instagram grid for rachel waller" class="w-100">
                    </div>
                    <div class="ig-grid-card">
                      <img src="../assets/images/eliza-merritt.png" alt="instagram grid for rachel waller" class="w-100">
                    </div>
                  </div>

                </div>
            </div><!-- end col -->

            <div class="col-xl-6 d-flex align-items-center mb-5 mb-xl-0">
              <div class="content-wrap mx-sm-auto mx-xl-0 ml-xl-auto text-left text-sm-center text-xl-left">
                <h3 class="section-title mb-4 mb-xl-3">Advertiser</h3>
                <p class="mb-4 pb-3">
                  Influencer Marketing with Small Businesses in Mind. <br class="textBreakDesktop">
                  Simply Choose Your Influencers and Watch the Magic Happen.
                </p>
                <router-link to="/signup" class="btn btn-default sign-up-btn mt-1">Sign Up</router-link>
              </div>
            </div> <!-- end col -->

          </div> <!-- end row -->


          <div class="row mb-5" id="influencer">

            <div class="col-xl-6 mx-lg-0 mx-md-auto d-flex align-items-center mb-5 pb-5 mb-xl-0">
              <div class="content-wrap mr-xl-auto mx-xl-0 mx-lg-auto mx-sm-auto ml-auto text-xl-left text-sm-center text-right">
                <h3 class="section-title mb-4 mb-xl-3">Influencer</h3>
                <p class="mb-4 pb-3">
                  Got an Instagram? Monetize it. Connect with Local 
                  <br class="textBreakDesktop">
                  Businesses to Grow Your Influence… and Your Bank Account.
                </p>
                 <router-link to="/signup" class="btn btn-default sign-up-btn mt-1">Sign Up</router-link>
              </div>
            </div> <!-- end col -->

            <div class="col-xl-6 grid-wrapper influencer-grid-wrap">

              <div class="demo-grid-box ml-auto mx-sm-auto ml-lg-auto mx-xl-0 ml-xl-auto bg-white" id="influencer-box">
                <img src="../assets/images/influencer-card-desktop.png" alt="screenshot of the Ravyyn app showing analytics" class="w-100">
              </div>

          </div> <!-- end row -->
        </div>
        </div>
      </section>

      <section class="large-blockquote-section">

        <div class="container">

          <blockquote class="text-primary mx-auto font-orelo d-none d-md-block">
              “ Businesses are making $5.20<br>
              for every $1 spent on Influencer<br>
              Marketing. ”<br>
              <span class="cite">&#8213; Influencer Marketing Hub</span>
          </blockquote>

          <!-- mobile
          <blockquote class="text-primary mx-auto font-orelo d-block d-md-none pl-5 mobileIndexBlockQuote">
            “ Businesses are making $5.20
            for every $1 spent on Influencer
            Marketing. ”<br>
            <span class="cite">&#8213; Influencer Marketing Hub</span>
          </blockquote> -->

        </div>

      </section>

       <section class="bg-custom-light border-top border-bottom border-dark" id="three-steps-signup">
        <div class="container-xl xxxl-container">
          <div class="row">

            <div class="step col-lg-4 py-5 px-4" id="step-01">
              <div class="text-center">
                <p class="text-primary font-orelo opacity-30 display-4 mb-4 pb-1">01</p>
                <div class="card bg-white shadow mx-auto mb-5 position-relative">
                  <h3 class="text-uppercase position-absolute d-md-block d-none">Ravyyn</h3>
                  <img src="../assets/images/DesktopChoose.svg" alt="screenshot of app where user can choose the ad campaign type" class="mx-auto d-none d-md-block">
                  <p class="d-block d-md-none mb-3">Choose Your Campaign Type</p>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="296.558" height="119.268" viewBox="0 0 296.558 119.268" class="d-block d-md-none">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: #c47a67;
                        }
                        .cls-2 {
                          fill: #fff;
                          font-size: 14px;
                        }
                        .cls-2, .cls-3 {
                          font-family: "La Nord";
                        }
                        .cls-3 {
                          font-size: 13px;
                        }
                      </style>
                    </defs>
                    <g id="Group_2632" data-name="Group 2632" transform="translate(-59 -3350.69)">
                      <rect id="Rectangle_1629" data-name="Rectangle 1629" class="cls-1" width="296.556" height="45.128" rx="2" transform="translate(59 3424.83)"/>
                      <rect id="Rectangle_1628" data-name="Rectangle 1628" class="cls-1" width="296.556" height="45.128" rx="2" transform="translate(59.002 3350.69)"/>
                      <g id="Group_2629" data-name="Group 2629" transform="translate(160.539 3366.271)">
                        <text id="Upload_my_ad" data-name="Upload my ad" class="cls-2" transform="translate(0 11)"><tspan x="0" y="0">Upload My Ad</tspan></text>
                      </g>
                      <g id="Group_2630" data-name="Group 2630" transform="translate(144.421 3440.383)">
                        <text id="Create_Custom_Ad" data-name="Create Custom Ad" class="cls-2" transform="translate(0 11)"><tspan x="0" y="0">Create Custom Ad</tspan></text>
                      </g>
                      <g id="Group_2631" data-name="Group 2631" transform="translate(201.638 3402.266)">
                        <text id="Or" class="cls-3" transform="translate(0 11)"><tspan x="0" y="0">or</tspan></text>
                      </g>
                    </g>
                  </svg> -->


                </div> <!-- end card -->

                <p class="description font-la-nord-semilight">
                  Simply upload your existing ad, or have an influencer of your choice create custom content based on your specifications.
                </p>
              </div>
            </div><!-- end col -->

            <div class="step col-lg-4 py-5 px-4 border-dark border-left border-right">
              <div class="text-center">
                <p class="text-primary font-orelo opacity-30 display-4 mb-4 pb-1">02</p>
                <div class="card bg-white shadow mx-auto pb-2 mb-5">

                  <img src="../assets/images/MobileBudget.svg" alt="screenshot of app where user can choose budget for ad campaign" class="mx-auto d-block d-md-none">
                  <img src="../assets/images/DesktopBudget.svg" alt="screenshot of app where user can choose budget for ad campaign" class="d-none d-md-block">

                </div> <!-- end card -->
                <p class="description font-la-nord-semilight">
                  Pick your budget. Local micro-influencers are a cost effective way to get your brand 
                  delivered to the perfect audience.
                </p>
              </div>
            </div><!-- end col -->

            <div class="step col-lg-4 py-5 px-4">
              <div class="text-center mb-4 mb-sm-0">
                <p class="text-primary font-orelo opacity-30 display-4 mb-4 pb-1">03</p>
                <div class="card bg-white shadow mx-auto mb-5 overflow-hidden animation-wrap position-relative animation-card">
                  <img src="../assets/images/top-tabs.svg" class="w-100 h-auto py-2 border-bottom border-dark">
      
                  <div class="position-relative label-wrap">
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-1">Average Engagement Rate</p>
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-2">Cost Per Engagement</p>
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-3">Click Through Rate</p>
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-4">Total Clicks</p>
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-5">Total Likes</p>
                    <p class="position-absolute w-100 pt-3 text-uppercase text-center font-la-nord heading heading-6">Total Comments</p> 
                  </div>
      
                  <div class="animated-numbers-wrap orelo d-flex justify-content-center">
                  <div class="column font-orelo text-primary d-flex flex-column">
                      <div class="position position-1">
                          <span class="blank">_</span>
                          <span>%</span>
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>$</span>
                          <span class="blank">_</span>
                      </div>
                  </div>
                  <div class="column font-orelo text-primary d-flex flex-column">
                      <div class="position position-2">    
                          <span class="blank">_</span>    
                          <span>0</span>    
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span class="blank">_</span>
                      </div>
                  </div>
                      <div class="column font-orelo text-primary d-flex flex-column">
                          <div class="position position-3">            
                              <span class="blank">_</span>    
                              <span>0</span>    
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                              <span>6</span>
                              <span>7</span>
                              <span>8</span>
                              <span>9</span>
                              <span class="blank">_</span>
                          </div>
                          <span class="position-absolute dot">.</span>
                      </div>
                      <div class="column font-orelo text-primary d-flex flex-column">
                          <div class="position position-4">            
                              <span class="blank">_</span> 
                              <span>%</span>   
                              <span>0</span>    
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                              <span>6</span>
                              <span class="blank">_</span>
                          </div>
                      </div>
      
                  </div>
      
              </div> <!-- end card -->


                <p class="description font-la-nord-semilight">
                  Simplified analytics help you keep an eye on 
                  the post’s performance so you can see the 
                  impact of your ad in real time.
                </p>
              </div>
            </div><!-- end col -->

          </div> <!-- end row -->
        </div>
      </section>

      <section class="bg-custom-sandy large-blockquote-section" id="secondQuoteIndex">

        <div class="container">

          <blockquote class="text-black mx-auto font-orelo d-none d-md-block">
            “ A brand is no longer what we<br>
            tell the consumer it is &#8213; it's what<br>
            consumers tell each other it is. ”<br>
            <span class="cite">&#8213; Scott Cook</span>
          </blockquote>

          <!-- mobile -->
          <blockquote class="text-black mx-auto font-orelo d-block d-md-none pl-4">
            “ A brand is no longer what we
            tell the consumer it is&#8213;it's what
            consumers tell each other it is. ”<br>
            <span class="cite">&#8213; Scott Cook</span>
          </blockquote>

        </div>

      </section>

      <section class="bg-primary border-top border-bottom border-dark" id="subscribe-section">

        <div class="container">
          <div class="row">
            <div class="content-wrap col-md-6 mx-auto">
              <h3 class="section-title text-center ls-3 pb-4">
                Subscribe
              </h3>
              <form class="mt-5 d-flex flex-column flex-xl-row justify-content-between" id="newsletter-subscribe-form" @submit.prevent="subscribe">
                <input type="email" class="bg-transparent d-block mb-5 mb-xl-0 d-xl-inline-block" id="email-subscribe" placeholder="Email" v-model="subscriptionEmail" />
                <input type="submit" class="btn d-block d-xl-inline-block mx-auto mx-xl-0" id="email-subscribe-btn" value="Keep In Touch" />
              </form>

            </div> <!-- end col -->
          </div> <!-- end row -->
        </div>

      </section>

    </main>
</template>

<script>
export default {
    data () {
        return {
            subscriptionEmail: null
        }
    },

    methods: {
        subscribe () {
            this.$http.post("/newsletter/subscribe", { email: this.subscriptionEmail })
              .then(res => {
                const options = {
                  title: 'Email Subscription',
                  variant: 'success',
                  solid: true
                };
                this.$bvToast.toast('You are subscribed 🤟', options)
              })
        }
    }

}
</script>

<style scoped>
    @import url('../assets/css/homepage-animation.css');
</style>