<template>
<div class="delivery">
  <mosBat/>
  <spbGood />
</div>
</template>
<style lang='scss'>
  .delivery {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 0 30px;
    justify-content: flex-start;
    margin-right: 20px;
    max-width: 470px;
  }
</style>
<script>
import mosBat from './components/mosBat.vue'
import spbGood from './components/spbGood.vue'
export default {
  data () {
    return {
      isform: true
    }
  },
  methods: {
    clickBtn() {
      this.isform = false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
    }
  },
  components: { mosBat, spbGood }
}
</script>
