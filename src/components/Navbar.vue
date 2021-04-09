<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-container>
        <b-navbar-brand href="#"><strong>MP Food</strong></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/foods">Foods</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/cart">
              Keranjang
              <b-icon-bag />
              <b-badge variant="success" class="ml-2">{{dataCartsLength}}
              </b-badge>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters("carts", {
      dataCartsLength: "getDataCartsLength",
    })
  },
  mounted() {
    this.$store.dispatch("carts/fetchDataCarts");
  },
};
</script>
<style>
</style>