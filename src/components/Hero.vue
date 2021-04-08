<template>
  <b-row>
    <b-col md="6" class="mt-3">
      <img src="assets/images/hero.png" alt="" width="100%" />
    </b-col>
    <b-col md="6" class="mt-3">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Delicious Food Menu, </strong><br />
            in Your Gadget
          </h2>
          <p>Let's choose and order your favourite food!</p>
          <b-button variant="success" size="lg" to="/foods">
            <b-icon-arrow-right></b-icon-arrow-right> Order
          </b-button>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>