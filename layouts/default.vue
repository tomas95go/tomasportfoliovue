<template>
  <v-app>
    <v-app-bar
      v-if="hideOnSmallScreen === 'hidden-sm-and-down'"
      color="indigo"
      dark
      :dense="dense"
      :class="hideOnSmallScreen"
      app
    >
      <NuxtLink
        v-if="$i18n.locale === 'en'"
        :to="`/es` + $route.fullPath"
        class="Header__Link"
        active-class="none"
        exact
      >
        {{ $t("links.about", { msg: "no es lo que parece" }) }}
      </NuxtLink>
      <v-btn text @click="switchTheme">
        <v-icon v-text="items[0].icon"></v-icon>
        {{ items[0].title }}
      </v-btn>
      <v-row justify="center">
        <v-btn
          v-for="item in items"
          v-if="item.id !== 0 && item.id !== 3"
          :key="item.title"
          text
          :nuxt="link"
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-row>
      <v-btn text @click.stop="dense = !dense">
        <v-icon v-text="items[3].icon"></v-icon>
        {{ items[3].title }}
      </v-btn>
    </v-app-bar>
    <v-app-bar dark class="hidden-lg-and-up" app :hide-on-scroll="true">
      <v-spacer></v-spacer>
      <v-toolbar-title> Portfolio </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation
      v-model="bottomNav"
      class="hidden-md-and-up"
      :absolute="absolute"
      grow
      app
    >
      <v-btn @click="switchTheme">
        <span>{{ items[0].title }}</span>
        <v-icon v-text="items[0].icon"></v-icon>
      </v-btn>
      <v-btn
        v-for="item in items"
        v-if="item.id !== 0 && item.id !== 2"
        :key="item.title"
        :nuxt="link"
        :to="item.link"
      >
        <span>{{ item.title }}</span>
        <v-icon v-text="item.icon"></v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      v-if="hideOnSmallScreen !== 'hide-sm-and-down'"
      color="indigo"
      :class="hideOnSmallScreen"
      app
    >
      <span class="white--text">&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  props: {
    source: String
  },
  data() {
    return {
      items: [
        {
          id: 0,
          icon: ""
        },
        {
          id: 1,
          icon: "$vuetify.icons.spflag",
          link: "/spanish"
        },
        {
          id: 2,
          icon: "$vuetify.icons.ukflag",
          link: "/english"
        },
        {
          id: 3,
          icon: "mdi-account-tie",
          link: "/book-store"
        },
        {
          id: 4,
          title: "",
          icon: "mdi-file-account",
          link: "/book-store"
        }
      ],
      hideOnSmallScreen: "hidden-sm-and-down",
      link: true,
      dense: true,
      absolute: false,
      bottomNav: "recent",
      isDarkThemeOn: false,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      delay: "",
      year: 0,
      inset: false
    };
  },
  mounted() {
    const currentYear = new Date();
    this.year = currentYear.getFullYear();
    axios
      .get("http://localhost:3001/links")
      .then(response => {
        console.log("response" + response.data.resume);
        let testObj = {
          resume: response.data.resume
        };
        console.log(this.items[4].title);
        this.items[4].title = testObj.resume;
      })
      .catch(error => console.log(error));
    if (localStorage.userSelectedTheme === "dark") {
      window.setTimeout(() => {
        this.$vuetify.theme.dark = true;
        this.isDarkThemeOn = true;
        this.delay = "readyToMount";
        this.items[0].icon = "mdi-white-balance-sunny";
        this.items[0].title = "Light Theme";
      }, 0);
    } else {
      window.setTimeout(() => {
        this.$vuetify.theme.dark = false;
        this.isDarkThemeOn = false;
        this.delay = "readyToMount";
        this.items[0].icon = "mdi-moon-waning-crescent";
        this.items[0].title = "Dark Theme";
      }, 0);
    }
  },
  methods: {
    switchTheme() {
      if (this.$vuetify.theme.dark === false) {
        this.$vuetify.theme.dark = true;
        window.localStorage.setItem("userSelectedTheme", "dark");
        this.items[0].icon = "mdi-white-balance-sunny";
        this.items[0].title = "Light Theme";
      } else {
        this.$vuetify.theme.dark = false;
        window.localStorage.setItem("userSelectedTheme", "light");
        this.items[0].icon = "mdi-moon-waning-crescent";
        this.items[0].title = "Dark Theme";
      }
    }
  }
};
</script>
