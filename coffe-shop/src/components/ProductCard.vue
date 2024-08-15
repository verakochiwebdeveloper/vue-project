<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.image}`)" :alt="image" />
    <div class="best__item-title">{{card.name}}</div>
    <div class="best__item-price">{{card.price | addCurruncy }}</div>
  </div>
</template>
<script>
export default {
  props: {
    
    classItem: {
      type: String,
      required: false
    },
    card: {
      type: Object,
      requred: true
    },
    methods: {
      onEmmit (id) {
        
        this.$emmit('onNavigate', id)
      }
    }
  }
};
</script>
