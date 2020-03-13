<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon v-if="delay === 'readyToMount'">
            <v-switch v-model="isDarkThemeOn" @change="switchTheme" :prepend-icon="item.preIcon" :append-icon="item.postIcon"></v-switch>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{year}}</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
    props: {
      source: String,
    },
    data() {
      return {
        drawer: true,
        items: [
              { title: 'About', preIcon: '', postIcon: ''  },
            ],
            isDarkThemeOn: false,
            miniVariant: false,
            expandOnHover: false,
            background: false,
            delay: '',
            year: 0
      }
    },
    mounted(){
      const currentYear = new Date();
      this.year = currentYear.getFullYear(); 
      if(localStorage.userSelectedTheme === "dark"){
        window.setTimeout(() => {   
          this.$vuetify.theme.dark = true;
          this.isDarkThemeOn = true;
          this.delay = 'readyToMount';
          this.items[0].postIcon = 'mdi-moon-waning-crescent';
          this.items[0].preIcon = '';
          }, 0);
      }else{
        this.$vuetify.theme.dark = false;
        this.isDarkThemeOn = false;
        this.delay = 'readyToMount';
        this.items[0].postIcon = '';
        this.items[0].preIcon = 'mdi-white-balance-sunny';
      }
    },
    methods: {
      switchTheme(){
        if(this.$vuetify.theme.dark == false){
          this.$vuetify.theme.dark = true;  
          window.localStorage.setItem('userSelectedTheme', 'dark');
          this.items[0].postIcon = 'mdi-moon-waning-crescent';
          this.items[0].preIcon = '';
        }else{
          this.$vuetify.theme.dark = false;
          window.localStorage.setItem('userSelectedTheme', 'light');
          this.items[0].postIcon = '';
          this.items[0].preIcon = 'mdi-white-balance-sunny';
        }
      }
    }
  }
</script>
