<template>
  <v-row align="center" justify="center">
    <v-card outlined class="mt-3">
      <v-card-title class="justify-center">{{ projectName }}</v-card-title>
      <v-divider></v-divider>
      <v-row align="center" justify="center" class="mt-3">
        <v-img :src="imgSrc" :max-height="imgSize" :max-width="imgSize"></v-img>
      </v-row>
      <v-col>
        <v-row align="center" justify="center" class="mt-3">
          <v-card-text class="text-center"> {{ projectDescription }} </v-card-text>
        </v-row>
        <v-row align="center" justify="center" class="mt-3">
          <NuxtLink :to="hrefLink">
            <v-btn text small color="blue"> 
              Info 
              <v-icon> {{ infoIcon }} </v-icon>
            </v-btn>
          </NuxtLink>
        </v-row>
      </v-col>
      <v-divider></v-divider>
        <v-col align-self="center" justify="center">
          <ProjectTechStack :techStack="techStack"></ProjectTechStack>
        </v-col>
    </v-card>
  </v-row>
</template>

<script>
  import ProjectTechStack from '../components/ProjectTechStack';
  export default {
    name: 'ProjectCard',
    data(){
      return {
        infoIcon: 'mdi-information-outline',
        nuxtComponent: true,
      }
    },
    props: {
      projectName: String,
      techStack: Array,
      imgSrc: String,
      imgSize: String,
      projectDescription: String,
      hrefLink: String
    },
    components: {
      ProjectTechStack
    }
  }
</script>

<style>
</style>
