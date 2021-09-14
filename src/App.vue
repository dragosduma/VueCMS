<template>
  <div>
    <Popup />
    <vuetify-datatable :posts="posts"></vuetify-datatable>    
  </div>
</template>

<script>
import Popup from "./components/Popup";
import VuetifyDatatable from "./components/VuetifyDatatable";

export default {
  name: "App",
  components: {
    Popup,
    VuetifyDatatable,
  },

  data: () => ({
    posts: [
      {
        lastName:"Duma",
        firstName:"Dragos",
        email:"dragos.duma@gmail.com",
        sex:"male",
        birthday:"2000-21-02"
      },
    ],
  }),
};
</script>
