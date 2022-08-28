<template>
    <button 
    @click="click" 
    type="button" 
    class="focus:outline-none text-white bg-green-700 hover:bg-green-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Заказать в Санкт-Петербург</button>
    <auth-modal v-if="isPopupVisible"/>
</template>

<script>
import AuthModal from './AuthModal.vue'
export default {
  name: 'spbGood',
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
    
  }
</style>
