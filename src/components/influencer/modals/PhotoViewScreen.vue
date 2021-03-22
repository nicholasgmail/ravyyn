<template>
        <div class="screen" id="photoViewScreen" @click="closeScreen('photoViewScreen')">
        <div class="screenContainer">
          <h1 @click="closeScreen('photoViewScreen')" class="right">X</h1>
          <h1 id="photoViewJobTitle">{{ title }}</h1>
          <img id="arrowLeftPhotoView" class="arrow-left left" src="@/assets/icons/arrow-left.svg">
          <img id="arrowRightPhotoView" class="arrow-right right" src="@/assets/icons/arrow-right.svg">
          <div class="articlePicRow">
            <div class="bigPic">
              <img src="@/assets/images/userPhotos/userPhoto1.jpg">
            </div>
            <div class="smallPics">
              <img src="@/assets/images/userPhotos/userPhoto1.jpg">
              <img src="@/assets/images/userPhotos/userPhoto1.jpg">
              <img src="@/assets/images/userPhotos/userPhoto1.jpg">
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'

export default {
    mixins: [ScreenMixin],
    props: {
        title: {
            type: String,
            default: "Job Title"
        }
    },
}
</script>