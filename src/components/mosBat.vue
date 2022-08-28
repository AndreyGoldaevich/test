<template>
    <button @click="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Заказать в Москва</button>
  <auth-modal v-if="isPopupVisible"/>
</template>

<script>
import AuthModal from './AuthModal.vue'
export default {
  name: 'mosBat',
  props: {
    msg: String
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    click() {
      this.isPopupVisible = true;
    }
  },
  components: { AuthModal }
}
</script>

<style scoped lang="scss">
  button {
    flex: 1 0 auto;
    text-decoration: none;
    cursor: pointer;
  }
</style>
