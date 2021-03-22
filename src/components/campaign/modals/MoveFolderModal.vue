<template>
  <div class="creatFolderContainer w-100 center">
    <div class="creatFolderContainerContent">
      <Dropdown :options="folders" placeholder="Choose Folder" @selected="onSelected" />
      <button disabled="!selectedFolder" @click="moveToFolder()" class="createButton">Move to Folder</button>
    </div>
  </div>
</template>

<script>
import ModalMixin from "@/mixins/modalMixin";
import Dropdown from '@/components/base/Dropdown/Dropdown'

export default {
  components: {
    Dropdown
  },
  mixins: [ModalMixin],
  data() {
    return {
      folders: [
        { id: 1, label: 'Maui Beverage Folder'},
        { id: 2, label: 'Folder 2'}
      ],
      selectedFolder: null
    }
  },
  methods: {
    onSelected(e) {
      console.log(e);
      this.selectedFolder = e;
    },
    moveToFolder() {
    }
  },
};
</script>