<template>
  <div>
    <Popup />
    <vuetify-datatable :posts="posts"></vuetify-datatable>    
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import Popup from "./components/Popup";
import VuetifyDatatable from "./components/VuetifyDatatable";
window.axios = require('axios');

export default {
  name: "App",
  components: {
    Popup,
    VuetifyDatatable,
  },

  data: () => ({
    posts: [],
  }),
  mounted: function() {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => this.posts = response.data);
 }
};
</script>
