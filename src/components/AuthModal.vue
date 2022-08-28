<template>
  <div class="bg-black fixed inset-0 z-10 bg-opacity-80 positions" v-if="formOut">
    <div class="bg-white mx-auto my-8 form__it">
      <div class="p-6 rounded-md form">
        <form class="forma_m" >
          <div class="mb-6 clon">
            <label for="username-success" class="block mb-2 text-sm font-medium text-black dark:text-black">Имя*</label>
            <input 
            v-model="name" 
            type="text" i
            d="username" 
            class="bg-white border border-gray-300 text-black placeholder-gray-300 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block  p-2.5 dark:bg-white dark:border-gray-300" required placeholder="Иванов Иван">
          </div>
          <div class="mb-6 clon">
            <label for="tel" class="block mb-2 text-sm font-medium text-black dark:text-black">Телефон*</label>
            <input
            v-model="phone"
            type="text"
            id="tel" 
            class="bg-white border border-gray-300 text-black placeholder-gray-300 text-sm rounded-lg 
            focus:ring-gray-300 focus:border-gray-300 block  p-2.5 dark:bg-white dark:border-gray-300" 
            required 
            placeholder="+7(___) ___-__-__"
            >
          </div>
          <div class="mb-6 clon">
            <label for="repeat-password" class="block mb-2 text-sm font-medium text-black dark:text-black">Email*</label>
            <input 
            v-model="email" 
            type="Email" 
            id="repeat-password" 
            class="bg-white border border-gray-300 
            text-black placeholder-gray-300 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block  
            p-2.5 dark:bg-white dark:border-gray-300" required placeholder="you@example.com">
          </div>
            <div class=" mb-6 clon">
              <label for="countries" class="block mb-2 text-sm font-medium text-black dark:text-black">Город*</label>
            <select 
            v-model="city_id" 
            id="countries" 
            class="bg-white border border-gray-300 
            text-black placeholder-gray-300 text-sm rounded-lg focus:ring-gray-300 
            focus:border-gray-300 block  p-2.5 dark:bg-white dark:border-gray-300" required>
              <option>Москва</option>
              <option>Санкт-Петербург</option>
              <option>Казань</option>
            </select>
            </div>
          <div class="form__btn">
            <button
              @click="postPost(), formNone()"
              type="submit"
              class="btn text-white bg-green-700 hover:bg-green-800
                focus:outline-none font-medium rounded-lg text-sm px-10 py-2.5 text-center 
              dark:bg-green-600 dark:hover:bg-green-700"
          >
            Отправить
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {email, phone, required} from '@vuelidate/validators'
import axios from 'axios';
import {TheMask} from 'vue-the-mask'
export default {
  name: 'AuthModal',
  props: {
    msg: String
  },
data() {
    return {
      title: 'заказать звонок',
      isform: false,
        name: null,
        phone: null,
        email: null,
        city_id: null,
      errors: []
    }
  },
  validation: {
    phone: {phone, required},
    email: {email, required}
  },
  computed: {
			name() {
				return this.name;
			},
			phone() {
				return this.phone;
			},
			email() {
				return this.email;
			},
			city_id() {
				return this.city_id;
			}
  },
  methods: {
    submitHendler() {

    },
    postPost() {
      axios({
        method: 'POST',
        url: 'http://hh.autodrive-agency.ru/test-tasks/front/task7/',
        data: {
          name: this.name,
          phone: this.phone,
          email: this.email,
          city_id: this.city_id,
        }
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    formOut() {
      this.isform = true
    },
        formNone() {
      this.isform = false
    }
  },
  components: { TheMask }
}
</script>


<style scoped lang="scss">
.formOff {
  display: none;
}
.btn {
  max-height: 38px;
  left: 0;
  margin-right: 20px;
}
.positions {
  position: absolute;
}
.clon {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-right: 20px;
}
.form__it {
  position: relative;
  top: 40%;
  max-width: 850px;
  border-radius: 6px;
}
  .forma_m {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
@media (max-width: 839px) {
  .btn {
  margin-top: 29px;
  }
}
</style>
