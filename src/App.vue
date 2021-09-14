<template>
  <div>
    <vuetify-datatable :posts="posts"></vuetify-datatable>
  </div>
</template>

<script>
import VuetifyDatatable from "./components/VuetifyDatatable";
export default {
  name: "App",
  components: {
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
