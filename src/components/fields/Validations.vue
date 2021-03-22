<template>
    <p class="errorMessage" :class="{errorMessageShow: errors.length}">
        <!-- <b>Please correct the following error(s):</b> -->
        <ul>
            <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
        </ul>
    </p>
</template>

<script>
export default {
  props: {
    errors: Array
  },
};
</script>