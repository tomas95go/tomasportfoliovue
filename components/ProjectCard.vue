<template>
  <v-column>
    <v-row align="center" justify="center">
      <v-column>
        <v-card tile class="mt-3">
          <v-card-title> {{ projectName }}</v-card-title>
          <v-divider></v-divider>
          <v-img :src="source" height="120px" width="120px" class="mx-auto"></v-img>
          <v-card-text> Sistema capaz de gestionar alumnos </v-card-text>
          <v-divider></v-divider>
          <ProjectTechStack></ProjectTechStack>
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
    },
    data() {
      return {
        source: '/pencil.png',
        imgSource: String,
        projectDescription: String,
        projectTechStack: Array
      }
    },
    components: {
      ProjectTechStack
    }
  }
</script>

<style>

</style>
