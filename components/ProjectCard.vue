<template>
  <v-row align="center" justify="center">
    <v-card outlined class="mt-3">
      <v-card-title class="justify-center">{{ $t(projectName) }}</v-card-title>
      <v-divider></v-divider>
      <v-row align="center" justify="center" class="mt-3">
        <v-img :src="imgSrc" :max-height="imgSize" :max-width="imgSize"></v-img>
      </v-row>
      <v-col>
        <v-row align="center" justify="center" class="mt-3">
          <v-card-text class="text-center">
            {{ $t(projectDescription) }}
          </v-card-text>
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
        <ProjectTechStack :tech-stack="techStack"></ProjectTechStack>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
import ProjectTechStack from '../components/ProjectTechStack';
export default {
  name: 'ProjectCard',
  components: {
    ProjectTechStack
  },
  props: {
    projectName: String,
    techStack: Array,
    imgSrc: String,
    imgSize: String,
    projectDescription: String,
    hrefLink: String
  },
  data() {
    return {
      infoIcon: 'mdi-information-outline',
      nuxtComponent: true
    };
  }
};
</script>

<style></style>
