<template>
    <main role="main">

      <section class="bg-custom-light" id="">
        
        <div class="faqContainer">

          <h3 class="display-4 my-5">FAQ</h3>
          
          <div class="faqSubtitle">
            <p @click="switchSection($event, 'general-faq')" :class="{ 'font-la-nord-medium': currentFAQ === 'general-faq' }" id="generalFaqsSwitch">GENERAL</p>
            <p @click="switchSection($event, 'influencer-faq')" :class="{ 'font-la-nord-medium': currentFAQ === 'influencer-faq' }" id="advertisersFaqsSwitch">ADVERTISERS</p>
            <p @click="switchSection($event, 'advertiser-faq')" :class="{ 'font-la-nord-medium': currentFAQ === 'advertiser-faq' }" id="influencersFaqsSwitch">INFLUENCERS</p>
          </div>
          <component :is="currentFAQ" />
          <p class="faqMoreInfo">Have a question about something we didn’t cover here? Send us a <a href="https://www.instagram.com/ravyyn_/">DM</a> on Instagram or shoot us an email at <a href="mailto:info@ravyyn.com">info@ravyyn.com</a> </p>
        </div>
      </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            currentFAQ: 'general-faq'
        }
    },
    methods: {
        switchSection(e, type) {
            // e.target.classList.add("font-la-nord-medium");
            this.currentFAQ = type;
        }
    }
}
</script>