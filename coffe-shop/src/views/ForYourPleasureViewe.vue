<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card v-for="card in coffe"
              :key="card.id"
              :classItem="'shop__item'"
              :name="card.name"
              :price="card.price"
              :image="card.image"
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { NavBarComponent, ProductCard },
  data() {
    return {
      coffe: [
        {
          id: 0,
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: 1,
          image: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: 2,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 3,
          image: "coffee-3.png",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 4,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 5,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
      ],
    };
  },
};
</script>
