<template>
  <div class="best__item">
    <img :src="require(`@/assets/logo/${product[0].img}`)" :alt="product[0].img"/>
    <div class="best__item-title">{{product[0].title}}</div>
    <div class="best__item-price">{{product[0].price}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: [
        {id: 0,
          
          img: 'coffee-3.png',
          title: 'AROMISTICO Coffee 1kg',
          price: '6.99$'
        },
        
      ]
    }
  }
}
</script>
