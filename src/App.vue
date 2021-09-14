<template>
  <div>
    <bootstrap-vue-datatable :posts="posts"></bootstrap-vue-datatable>
    <vuetify-datatable :posts="posts"></vuetify-datatable>
  </div>
</template>

<script>
import BootstrapVueDatatable from "./components/BootstrapVueDatatable";
import VuetifyDatatable from "./components/VuetifyDatatable";
export default {
  name: "App",
  components: {
    BootstrapVueDatatable,
    VuetifyDatatable,
  },

  data: () => ({
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
      },
    ],
  }),
};
</script>
