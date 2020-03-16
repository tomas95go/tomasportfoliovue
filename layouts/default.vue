<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list flat>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon v-if="delay === 'readyToMount' && item.isSwitch">
              <v-switch v-if="item.isSwitch" v-model="isDarkThemeOn" @change="switchTheme" :prepend-icon="item.preIcon"></v-switch>
            </v-list-item-icon>
            <v-list-item-icon v-else>
              <nuxt-link to="/book-store">
                <v-btn text small> 
                  <v-icon v-text="item.icon"></v-icon>
                </v-btn>
              </nuxt-link>
            </v-list-item-icon>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item>    
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
              { title: 'Switch', preIcon: '', isSwitch: true  },
              { title: 'Spanish', icon: '$vuetify.icons.spflag', isSwitch: false},
              { title: 'English', icon: '$vuetify.icons.ukflag', isSwitch: false},
              { title: 'About me', icon: 'mdi-account-tie', isSwitch: false}
        ],
        isDarkThemeOn: false,
        miniVariant: false,
        expandOnHover: false,
        background: false,
        delay: '',
        year: 0,
        inset: false,
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
          this.items[0].preIcon = 'mdi-moon-waning-crescent';
        }else{
          this.$vuetify.theme.dark = false;
          window.localStorage.setItem('userSelectedTheme', 'light');
          this.items[0].preIcon = 'mdi-white-balance-sunny';
        }
      }
    }
  }
</script>
