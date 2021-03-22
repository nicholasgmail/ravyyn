<template>
  <v-select
    :style="style"
    :multiple="multiple"
    :options="options"
    :value="selected"
    :placeholder="placeholder"
    @input="onSelected"
  >
    <template #option="{ label }">
      <p class="option">{{ label }}</p>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  props: {
      width: {
          type: Number,
          default:35
      },
    multiple: Boolean,
    options: Array,
    placeholder: {
        type: String,
        default: "Sort By"
    }
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
      style() {
          return `width: ${this.width}%`
      }
  },
  methods: {
      onSelected(e) {
          // console.log(e);
          this.selected = e;
          this.$emit('selected', e);
      }
  }
};
</script>

<style lang="scss">

.vs__dropdown-toggle {
    height: 50px;
}

.vs__dropdown-menu {
    padding: 0;
    li {
        padding:0
    }
}

.option-label {
    color: #000;
    font-family: "LA Nord", Helvetica, sans-serif;
    font-weight: 400;
    // padding-bottom: 0.3em;
}

.vs__selected {
    @extend .option-label;
}

.option {
  color: black;
  background: white;
  border: 2px solid black;
  border-bottom: none;
  padding: 10px 15px;
  margin: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
}

// .option:first-child:after {
//     content: "";
//     border-top: 2px solid black !important;
//     border-left: 2px solid black !important;
//     height: 15px;
//     width: 15px;
//     position: absolute;
//     top: -7px;
//     right: 26px;
//     background: white;
//     transform: rotate(45deg);
// }
// .option:last-child{
//   border-bottom: 2px solid black;
// }
.option:hover {
    color:black;
    background: #ececec;
}
.vs__dropdown-toggle {
  border: 2px solid black;
  border-radius: 0;
}
.vs__selected-options {
    input {
        @extend .option-label;
        border:none;
    }
}
button.vs__clear {
    display: none;
}
.vs__actions > svg {
  margin-left: auto;
}
.vs__open-indicator {
  fill: black;
}

</style>