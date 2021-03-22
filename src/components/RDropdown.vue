<template>
  <component
    :is="tag"
  >
    <slot
      name="header"
      :open="open"
      :close="close"
      :toggle="toggle"
    ></slot>

    <r-pop-up
      ref="popUp"
      class="campaign-active-settings"
      open-class="dropdownCampaignShow"
    >
      <slot></slot>
    </r-pop-up>

    <slot
      name="footer"
      :open="open"
      :close="close"
      :toggle="toggle"
    ></slot>
  </component>
</template>

<script>
import { tagIs } from '@/mixins/tagIs'
import RPopUp from '@/components/base/RPopUp/RPopUp'

export default {
  name: 'RDropDown',
  mixins: [
    tagIs
  ],
  methods: {
    open() {
      const popUp = this.$refs.popUp

      popUp.outsideAction('open')
    },
    close() {
      const popUp = this.$refs.popUp

      popUp.outsideAction('close')
    },
    toggle() {
      console.log('dropdown toggle')
      const popUp = this.$refs.popUp

      popUp.outsideAction('toggle')
    }
  },
  components: {
    RPopUp
  }
}
</script>