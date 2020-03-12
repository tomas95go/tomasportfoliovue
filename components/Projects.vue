<template>
  <v-column>
    <v-row align="center" justify="center">
      <v-column>
        <h3> My {{ showCase }}</h3>
      </v-column>
    </v-row>
    <ProjectCard :projectName='`Sistema para Gestión de Stock`'></ProjectCard>
    <ProjectCard :projectName='`Sistema para Gestión de Stock   `'></ProjectCard>
    <ProjectCard :projectName='`Sistema de Gestión Estudiantil`'></ProjectCard>
  </v-column>
</template>

<script>
  import ProjectCard from '../components/ProjectCard';
  export default {
    name: 'Projects',
    props: {
      showCase: String
    },
    data() {
      return {
        isfdProject: `Sistema de Gestion Estudiantil`,
        source: '/pencil.png'
      }
    },
    components: {
      ProjectCard
    }
  }
</script>

<style>

</style>
