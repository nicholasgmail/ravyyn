<template>
  <!-- Upload or Create modal -->
  <div
    id="sign-up-choose"
    class="new-campaign-step content-wrap text-center mx-auto position-relative"
  >
    <!-- 1st screen -->

    <div
      class="step-wrap w-100 h-100 d-flex justify-content-center align-items-center"
    >
      <div class="wrap w-100">
        <h2 class="display-4 my-5">RAVYYN</h2>
        <p class="mt-5 mb-4 position-relative d-inline-block">
          Choose Your Campaign Type
          <span
            class="tool whats-this-icon position-absolute"
            data-tip="Upload an ad or create a new one?"
            tabindex="1"
          ></span>
        </p>
        <div
          class="d-flex justify-content-between flex-md-row flex-column pt-2 mb-4 mb-md-5"
        >
        <!-- newCampaign('userAd') -->
          <button
            @click="newCampaign"
            id="upload-ad-btn"
            class="btn btn-lg mx-md-0 mx-auto px-1 d-block"
          >
            Upload My Ad
          </button>
          <p class="m-0 mx-2 py-2 py-md-0 d-flex">
            <span class="d-md-inline d-block text-center w-100">or</span>
          </p>
          <button
            onclick="newCampaign('new')"
            id="create-custom-ad-btn"
            class="btn btn-lg mx-md-0 mx-auto px-1 d-block"
          >
            Create Custom Ad
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end 1st Upload or Create modal -->
</template>
<script>
export default {
  props: {},
  methods: {
    quickApply() {},
    newCampaign(){      
      this.$emit('newCampaign')
    }
  },
};
</script>