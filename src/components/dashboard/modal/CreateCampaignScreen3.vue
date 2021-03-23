<template>
  <div
    id="create-campaign"
    class="userAdStart new-campaign-step content-wrap text-center mx-auto position-relative create-campaign displayBlock"
  >
    <label for="campaign-name" class="sr-only uploadTitles" id="campaignName"
      >Code Discount</label
    >
    <input
      type="text"
      name="campaign-name"
      placeholder="Code Discount"
      onkeypress="campaignTitle(event)"
    />
  </div>
</template>
<script>
export default {
  methods: {
    quickApply() {},
  },
};
</script>