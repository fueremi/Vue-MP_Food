<template>
  <b-card
    :title="product.nama"
    :img-src="'../assets/images/' + product.gambar"
    img-alt="Image"
    img-height="200"
    img-top
    class="shadow"
  >
    <hr />
    <b-card-text>
      Price: <strong>{{ changeCurrency(product.harga) }}</strong>
    </b-card-text>

    <b-button to="/" variant="success" block>
      <b-icon-cart></b-icon-cart> Order
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    changeCurrency(product) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      return formatter.format(product)
    },
  },
};
</script>

<style>
</style>