<template>
  <v-app>
    <v-app-bar app color="indigo" dark :dense="dense">
      <v-btn text @click="switchTheme">
        <v-icon v-text="items[0].icon"></v-icon>
        {{ items[0].title }}
      </v-btn>
        <v-row justify="center">
          <v-btn 
            v-for="item in items" 
            :key="item.title" 
            v-if="item.id !== 0 && item.id !== 3" 
            text 
            :nuxt="link" 
            :to="item.link">
          <v-icon v-text="item.icon"></v-icon>
          {{ item.title }}
          </v-btn>
        </v-row>
      <v-btn text @click.stop="dense = !dense">
        <v-icon v-text="items[3].icon"></v-icon>
        {{ items[3].title }}
      </v-btn>
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
        items: [
              { id: 0, title: 'Dark Theme', icon: ''},
              { id: 1, title: 'Spanish', icon: '$vuetify.icons.spflag', link: '/spanish'},
              { id: 2, title: 'English', icon: '$vuetify.icons.ukflag', link: '/english'},
              { id: 3, title: 'About me', icon: 'mdi-account-tie', link: '/book-store'},
              { id: 4, title: 'Resume', icon: 'mdi-file-account', link: '/book-store'},
        ],
        link: true,
        dense: true,
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
          this.items[0].icon = 'mdi-white-balance-sunny';
          this.items[0].title = 'Light Theme';
          }, 0);
      }else{
        window.setTimeout(() => {
        this.$vuetify.theme.dark = false;
        this.isDarkThemeOn = false;
        this.delay = 'readyToMount';
        this.items[0].icon = 'mdi-moon-waning-crescent';
        this.items[0].title = 'Dark Theme';
        }, 0);
      }
    },
    methods: {
      switchTheme(){
        if(this.$vuetify.theme.dark === false){
          this.$vuetify.theme.dark = true;  
          window.localStorage.setItem('userSelectedTheme', 'dark');
          this.items[0].icon = 'mdi-white-balance-sunny';
          this.items[0].title = 'Light Theme';
        }else{
          this.$vuetify.theme.dark = false;
          window.localStorage.setItem('userSelectedTheme', 'light');
          this.items[0].icon = 'mdi-moon-waning-crescent';
          this.items[0].title = 'Dark Theme';
        }
      }
    }
  }
</script>
