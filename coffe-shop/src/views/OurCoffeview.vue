<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                :name="coffeBase[0].name"
                :price="coffeBase[0].price"
                :image="coffeBase[0].image"
              />
              <product-card
                :name="coffeBase[1].name"
                :price="coffeBase[1].price"
                :image="coffeBase[1].image"
              />
              <product-card
                :name="coffeBase[2].name"
                :price="coffeBase[2].price"
                :image="coffeBase[2].image"
              />
              <product-card
                :name="coffeBase[3].name"
                :price="coffeBase[3].price"
                :image="coffeBase[3].image"
              />
              <product-card
                :name="coffeBase[4].name"
                :price="coffeBase[4].price"
                :image="coffeBase[4].image"
              />
              <product-card
                :name="coffeBase[5].name"
                :price="coffeBase[5].price"
                :image="coffeBase[5].image"
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
      coffeBase: [
        {
          id: 0,
          image: 'coffee-1.png',
          name: 'Solimo Coffee Beans 2kg',
          price: '10.73'
        },
        {
          id: 1,
          image: 'coffee-2.png',
          name: 'Presto Coffee Beans 1kg',
          price: '15.99'
        },
        {
          id: 2,
          image: 'coffee-3.png',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 3,
          image: 'coffee-3.png',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 4,
          image: 'coffee-3.png',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 5,
          image: 'coffee-3.png',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        }
      ]
    }
  }
};
</script>
