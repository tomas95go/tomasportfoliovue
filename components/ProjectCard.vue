<template>
  <v-column>
    <v-row align="center" justify="center">
      <v-column>
        <v-card tile class="mt-3">
          <v-card-title> {{ projectName }}</v-card-title>
          <v-divider></v-divider>
          <v-row align="center" justify="center" class="mt-3">
            <v-img :src="imgSrc" :max-height="imgSize" :max-width="imgSize"></v-img>
          </v-row>
          <v-card-text> Sistema capaz de gestionar alumnos </v-card-text>
          <v-divider></v-divider>
          <ProjectTechStack :techStack="techStack"></ProjectTechStack>
        </v-card>
      </v-column>
    </v-row>
  </v-column>
</template>

<script>
  import ProjectTechStack from '../components/ProjectTechStack';
  export default {
    name: 'ProjectCard',
    props: {
      projectName: String,
      techStack: Array,
      imgSrc: String,
      imgSize: String
    },
    data() {
      return {
        projectDescription: String,
      }
    },
    components: {
      ProjectTechStack
    }
  }
</script>

<style>

</style>
