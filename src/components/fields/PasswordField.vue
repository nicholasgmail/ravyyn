<template>
  <div>
    <label
      @mouseover="passwordType = 'text'"
      @mouseleave="passwordType = 'password'"
      class="see-password"
    >
      <span class="sr-only">See Password</span>
    </label>
    <label for="password" class="sr-only">{{label}}</label>
    <input
      :id="name"
      :name="name"
      :type="passwordType"
      :placeholder="placeholder"
      minlength="8"
    />
  </div>
</template>

<script>
export default {
    name: 'PasswordField',

    props: {
      name: {
        type: String,
        default: 'password'
      },
      label: {
        type: String,
        default: 'Your Password'
      },
      placeholder: {
        type: String,
        default: 'Password'
      }
    },

    data() {
      return {
        passwordType: "password"
      };
  }
}
</script>