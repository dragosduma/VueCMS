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
import db from '@/firebase'
export default {
  props: ["posts"],
  data: () => ({
    search: "",
    headers: [
      { text: "First Name", value: "fname" },
      { text: "Last Name", value: "lname" },
      { text: "Email", value: "email"},
      { text: "Sex", value: "sex"},
      { text: "Birthday", value: "date"},
      { text: "Actions", value: "actions", sortable: false},
    ],
  }),
  methods: {
    deleteItem(item) {
      const index = this.posts.indexOf((x) => x.id === item.id);
      this.posts.splice(index, 1);
    },
  },
  created() {
    db.collection('users').onSnapshot(res => { 
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added') {
          this.posts.push({
            ...change.doc.data()
          })
        }
      })
    })
  }
};
</script>