<template>
  <div>
    <Navbar />
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col md="6">
          <b-img
            :src="`../assets/images/${dataFoodDetail.gambar}`"
            fluid
            class="shadow"
          ></b-img>
        </b-col>

        <b-col md="6">
          <h2 class="text-left">
            <strong> {{ dataFoodDetail.nama }} </strong>
          </h2>
          <hr />
          <h4 class="text-left">
            Harga: <strong> {{ dataFoodDetail.harga }} </strong>
          </h4>

          <b-form class="mt-4" @submit.prevent="">
            <b-form-group
              id="input-group-1"
              label="Quantity:"
              label-for="input-quantity"
            >
              <b-form-input
                id="input-quantity"
                v-model="order.quantity"
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Notes:"
              label-for="input-notes"
            >
              <b-form-textarea
                id="input-notes"
                v-model="order.notes"
                placeholder="eg: Spicy, Half rice ..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="success" @click.prevent="ordering" :disabled="!order.quantity || !order.notes"
              ><b-icon-cart></b-icon-cart> Order</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Foods",
          to: "/foods",
        },
        {
          text: "Food Order",
          active: true,
        },
      ],
      order: {},
      status: true
    };
  },
  methods: {
    ordering() {
      this.order.product = this.dataFoodDetail;
      this.$store.dispatch("carts/postDataCarts", this.order);
      this.$router.push("/cart");
      this.$root.$bvToast.toast(
        `${this.order.quantity} pcs ${this.order.product.nama} succesfully added to cart`,
        {
          title: "MP Food Notification",
          toaster: "b-toaster-top-center",
          variant: "success",
          autoHideDelay: 5000,
        }
      );
    },
  },
  computed: {
    ...mapGetters("foods", {
      dataFoodDetail: "getDataFoods",
    }),
  },
  mounted() {
    this.$store.dispatch("foods/fetchDetailFood", {
      id_food: this.$route.params.id
    })
  },
};
</script>

<style>
</style>