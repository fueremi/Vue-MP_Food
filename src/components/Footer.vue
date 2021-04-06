<template>
  <footer class="my-5">
      <hr>
      <b-container>
          <b-row>
              <b-col class="text-center">
                  {{year}} | &#169; Fueremi Corp.
              </b-col>
          </b-row>
      </b-container>
  </footer>
</template>

<script>
import moment from "moment";

export default {
    name: 'Footer',
    data(){
        return{
            year: moment().format('YYYY')
        }
    }
}
</script>

<style>

</style>