<template>
    <div class="searchDashboardContainer">
        <input :style="style" @input="onInput" type="search" class="searchDashboard" :placeholder="placeholder">
    <img src="@/assets/icons/search-small.svg">
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "Search"
        },
        width:{
            type: Number,
            default: 50
        }
    },
    methods: {
        onInput(e) {
            // console.log(e);
            this.$emit('on-search', e);
        }
    },
    computed: {
        style() {
            return `width:${this.width}`
        }
    }
}
</script>

<style scoped>
 input{
    height: 50px;
    padding: 0 15px;
    border: 2px solid black;
 }
</style>