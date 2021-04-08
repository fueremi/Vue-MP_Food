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
            <b-table fluid striped hover :fields="fields" :items="dataOrder">
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>

              <template #cell(product)="data">
                <img
                  :src="require('../assets/images/' + data.item.product.gambar)"
                  height="100"
                />
              </template>

              <template #cell(quantity_order)="data">
                {{ data.item.quantity_order }} pcs
              </template>

              <template #cell(total)="data">
                {{
                  Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(
                    +data.item.product.harga.replace(/,|IDR/g, "") *
                      data.item.quantity_order
                  )
                }}
              </template>

              <template #cell(delete)="data" :style="style">
                <b-button @click="removeOrder(data.item.id)"
                  ><b-icon-trash></b-icon-trash
                ></b-button>
              </template>

              <template #custom-foot>
                <b-tr>
                  <b-th colspan="5"></b-th>
                  <b-th variant="secondary">Total Price: </b-th>
                  <b-th variant="success" colspan="2"> {{ Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(dataOrder.reduce( (item, data) => {
                      return item+(+data.product.harga.replace(/,|IDR/g, "") * data.quantity_order)
                    }, 0)) }}
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
        { key: "product.harga", label: "Price" },
        "quantity_order",
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
    removeOrder(id) {
      this.$store.dispatch("removeOrder", {
        endpoints: "cart",
        id: id,
      });
    },
  },
  computed: {
    ...mapGetters({
      dataOrder: "getOrder",
    }),
  },
  mounted() {
    this.$store.dispatch("fetchDataOrder", {
      endpoints: "cart",
    });
  },
};
</script>

<style>
</style>