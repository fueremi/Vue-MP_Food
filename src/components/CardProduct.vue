<template>
  <b-card
    :title="product.nama"
    :img-src="`../assets/images/${product.gambar}`"
    img-alt="Image"
    img-height="200"
    img-top
    class="shadow"
  >
    <hr />
    <b-card-text>
      Price:
      <strong>{{
        Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(product.harga)
      }}</strong>
    </b-card-text>

    <b-button :to="'/foods/' + product.id" variant="success" block>
      <b-icon-cart></b-icon-cart> Order
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>