<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Content Management System</h2>
        <v-row>
          <v-col md="3">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="posts"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  props: ["posts"],
  data: () => ({
    search: "",
    headers: [
      { text: "Last Name", value: "FirstName" },
      { text: "First Name", value: "LastName" },
      { text: "Email", value: "Email" },
      { text: "Sex", value: "Sex" },
      { text: "Birthday", value: "Birthday" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    deleteItem(item) {
      let id = item.id;
      let idx = this.posts.findIndex((item) => item.id === id);
      if (confirm("Are you sure you want to delete this?")) {
        axios
          .delete(
            `https://localhost:44348/api/employees/${id}` 
          )
          .then((response) => {
            this.posts.splice(idx, 1);
            return response;
          });
      }
    },
  },
};
</script>
