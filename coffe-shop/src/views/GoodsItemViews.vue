<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffe' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>
    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              :src="product.image"
              :alt="image"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text" v-if="product.discription">
              {{product.discription}}
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <div class="shop__item" v-if="product.country">
                <img
                class="shop__girl"
                :src="product.image"
                :alt="image"
              />
                <div class="shop__item-title">{{product.name}}</div>
                <div class="shop__item-country">{{product.country}}</div>
                <div class="shop__item-price">{{ product.price }}</div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCard from '@/components/ProductCard.vue'


export default {
  components: {NavBarComponent, ProductCard },
  data(){
    return {
        product: null,
    }

  },

  mounted() {
    fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
    .then(res => res.json())
    .then(data=> {
        this.product = data
        
    });
  },
  
  filters: {

  },
  destroyed(){
    this.product = null
  },
  computed: {
    pageName(){
        return this.$route.name
    },
    card(){
        return this.$store.getters["getProductById"](this.$route.params.id)

    },
    goods() {

      return this.$store.getters["getgoods"]
    }
  },
}
</script>
