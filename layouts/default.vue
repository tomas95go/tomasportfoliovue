<template>
  <v-app :class="vuetify">
    <v-app-bar
      v-if="hideOnSmallScreen === 'hidden-sm-and-down'"
      color="teal darken-4"
      dark
      :dense="dense"
      :class="hideOnSmallScreen"
      app
    >
      <v-btn v-if="isDarkThemeOn" text @click="switchTheme">
        <v-icon>{{ $t("navbar.icons.lighttheme") }}</v-icon>
        <span> {{ $t("navbar.lighttheme") }} </span>
      </v-btn>
      <v-btn v-else text @click="switchTheme">
        <v-icon>{{ $t("navbar.icons.darktheme") }}</v-icon>
        <span> {{ $t("navbar.darktheme") }} </span>
      </v-btn>
      <v-row justify="center" align="center">
        <v-btn v-if="!this.$store.state.locale === 'es'" text>
          <v-icon> {{ $t("navbar.icons.spanish") }} </v-icon>
          <span>{{ $t("navbar.spanish") }}</span>
        </v-btn>
        <v-btn v-else text @click="this.$store.state.locale = 'en'">
          <v-icon> {{ $t("navbar.icons.english") }} </v-icon>
          <span>{{ $t("navbar.english") }}</span>
        </v-btn>
        <v-btn text>
          <v-icon> {{ $t("navbar.icons.resume") }} </v-icon>
          <span>{{ $t("navbar.resume") }}</span>
        </v-btn>
      </v-row>
      <v-btn text @click.stop="dense = !dense">
        <v-icon> {{ $t("navbar.icons.about") }} </v-icon>
        <span>{{ $t("navbar.about") }}</span>
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
      <v-btn v-if="isDarkThemeOn" text @click="switchTheme">
        <span> {{ $t("navbar.lighttheme") }} </span>
        <v-icon>{{ $t("navbar.icons.lighttheme") }}</v-icon>
      </v-btn>
      <v-btn v-else text @click="switchTheme">
        <span> {{ $t("navbar.darktheme") }} </span>
        <v-icon>{{ $t("navbar.icons.darktheme") }}</v-icon>
      </v-btn>
      <v-btn text>
        <span>{{ $t("navbar.english") }}</span>
        <v-icon> {{ $t("navbar.icons.english") }} </v-icon>
      </v-btn>
      <v-btn text>
        <span>{{ $t("navbar.resume") }}</span>
        <v-icon> {{ $t("navbar.icons.resume") }} </v-icon>
      </v-btn>
      <v-btn text>
        <span>{{ $t("navbar.about") }}</span>
        <v-icon> {{ $t("navbar.icons.about") }} </v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      v-if="hideOnSmallScreen !== 'hide-sm-and-down'"
      color="teal darken-4"
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
      disabled: true,
      year: 0,
      inset: false,
      vuetify: this.$vuetify.theme.dark
    };
  },
  watch: {
    isDarkThemeOn() {
      console.log(this.isDarkThemeOn);
    }
  },
  mounted() {
    const currentYear = new Date();
    this.year = currentYear.getFullYear();
    console.log(document.documentElement.getAttribute("data-theme"));
    let trying = document.documentElement.getAttribute("data-theme");
    if (localStorage.userSelectedTheme === "dark") {
      window.setTimeout(() => {
        this.$vuetify.theme.dark = true;
        this.isDarkThemeOn = true;
        this.delay = "readyToMount";
      }, 0);
    } else {
      window.setTimeout(() => {
        this.$vuetify.theme.dark = false;
        this.isDarkThemeOn = false;
        this.delay = "readyToMount";
      }, 0);
    }
  },
  methods: {
    switchTheme() {
      if (!this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        window.localStorage.setItem("userSelectedTheme", "dark");
        this.isDarkThemeOn = !this.isDarkThemeOn;
      } else {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        window.localStorage.setItem("userSelectedTheme", "light");
        this.isDarkThemeOn = !this.isDarkThemeOn;
      }
    }
  }
};
</script>
