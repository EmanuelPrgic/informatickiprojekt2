<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><img src="https://png.pngitem.com/pimgs/s/172-1722617_yu-gi-oh-cards-logo-hd-png-download.png" height="60px" @click="goToHome()"></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
    home: '/',
        items: [
          { title: 'Home Page', icon: 'mdi-view-dashboard', route: "/"},
          { title: 'Search', icon: 'mdi-image', route: "/search"},
          { title: 'Contact Form', icon: 'mdi-help-box', route: "/contact"},
        ],
        right: null,
      }),
    methods: {
      goTo: function(route) {
        this.$router.push(route)
      },
      goToHome: function() {
        this.$router.push(this.home)
      }
    }
  }
</script>