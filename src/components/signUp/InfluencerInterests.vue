<template>
  <div class="signup-login-view slider-step text-center mb-5">
    <h3 class="text-uppercase display-4 my-5">Ravyyn</h3>
    <h4 class="font-la-nord px-18 text-primary mb-5">
      Select Interests Based on Your Instagram Content
    </h4>
     <v-select 
          :closeOnSelect="false"
          placeholder="Interests" 
          multiple 
          v-model="selected" 
          label="value" 
          :options="options" />
        <br/>
    <div class="content-wrap border-0 mx-auto position-relative">
      <form class="mb-5" @submit.prevent="onSubmit">
        <input
          type="submit"
          value="Start Influencing"
          id="influencer-signup-interests-submit"
          class="btn btn-lg px-1 d-block"
        />
      </form>
      <p class="text-center mb-40">
        <router-link to="/dashboard" class="skip-for-now fs-sm text-primary font-poppins">Skip For Now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },

  data() {
    return {
      selected: [],
      interests: [],
    };
  },

  computed: {
    options () {
      return this.interests.filter(o => this.selected.indexOf(o) < 0)
    }
  },

  beforeMount() {
    this.$http
      .get("/shared/items/interests")
      .then((res) => this.interests = res.data.items)
  },

  methods: {
      onSubmit() {
          const payload = this.selected.map(x => x.id);
          this.$http.put('influencer/interests', { interests : payload } )
            .then(_ => {
              const options = {
                title: 'Interests',
                variant: 'success',
                solid: true
              };
              this.$bvToast.toast('Interests updated!', options);
              this.$router.push("/find-jobs");
            })
      }
  }
};
</script>

<style lang="scss">
  .vs__dropdown-toggle {
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 0px;
    font-size: 1.2rem;
    width: 400px;
    padding: inherit;
    padding: 16px
  }
</style>