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
        <b-col>
          <h2><strong>My</strong> Cart</h2>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col>
          <div>
            <b-table fluid striped hover :fields="fields" :items="dataCarts">
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>

              <template #cell(product)="data">
                <img
                  :src="`../assets/images/${data.item.product.gambar}`"
                  height="100"
                />
              </template>

              <template #cell(price)="data">
                {{
                  Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(data.item.product.harga)
                }}
              </template>

              <template #cell(quantity)="data">
                {{ data.item.quantity }} pcs
              </template>

              <template #cell(total)="data">
                {{
                  Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(data.item.product.harga * data.item.quantity)
                }}
              </template>

              <template #cell(delete)="data">
                <b-button @click="deleteDataCart(data.item)" variant="transparent" class="text-danger"
                  ><b-icon-trash></b-icon-trash
                ></b-button>
              </template>

              <template #custom-foot>
                <b-tr>
                  <b-th colspan="5"></b-th>
                  <b-th >Total Price: </b-th>
                  <b-th variant="success" colspan="2">
                    {{
                      Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(
                        dataCarts.reduce((item, data) => {
                          return item + data.product.harga * data.quantity;
                        }, 0)
                      )
                    }}
                  </b-th>
                </b-tr>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
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
          text: "Cart",
          active: true,
        },
      ],
      fields: [
        // A virtual column that doesn't exist in items
        "index",
        { key: "product", label: "Image" },
        { key: "product.nama", label: "Food" },
        "price",
        "quantity",
        "notes",
        "total",
        "delete",
      ],
      style: {
        "text-align": "center",
      },
    };
  },
  methods: {
    deleteDataCart(item) {
      this.$store.dispatch("deleteDataCart", {
        cart_id: item.id,
      });
      this.$root.$bvToast.toast(
        `${item.product.nama} succesfully deleted from cart!`,
        {
          title: "MP Food Notification",
          toaster: "b-toaster-top-center",
          variant: "danger",
          autoHideDelay: 5000,
        }
      );
    },
  },
  computed: {
    ...mapGetters({
      dataCarts: "getDataCarts",
    }),
  },
  mounted() {
    this.$store.dispatch("fetchDataCarts");
  },
};
</script>

<style>
</style>