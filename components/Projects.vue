<template>
  <v-column>
    <v-row align="center" justify="center">
      <v-column>
        <h3> My {{ showCase }}</h3>
      </v-column>
    </v-row>
    <ProjectCard :imgSrc="imgBookStore" :imgSize="imgSize" :techStack="bookStoreTechStack" :projectName='`Sistema para Gestión de Stock`'></ProjectCard>
    <ProjectCard :imgSrc="imgIpv" :imgSize="imgSize" :techStack="ipvTechStack" :projectName='`Sistema para Gestión de Stock   `'></ProjectCard>
    <ProjectCard :imgSrc="imgIsfd" :imgSize="imgSize" :techStack="isfdTechStack" :projectName='`Sistema de Gestión Estudiantil`'></ProjectCard>
  </v-column>
</template>

<script>
  import ProjectCard from '../components/ProjectCard';
  export default {
    name: 'Projects',
    data() {
      return {
        imgBookStore: '/checklist.png',
        imgIpv: '/shipping-and-delivery.png',
        imgIsfd: '/certificate.png',
        imgSize: '250px',
        bookStoreTechStack: [
          { id: 1, src: 'mdi-laravel'},
          { id: 2, src: 'mdi-jquery'},
          { id: 3, src: 'mdi-database'},
          { id: 4, src: 'mdi-github'},
          { id: 5, src: 'mdi-bootstrap'}
        ],
        ipvTechStack: [
          { id: 1, src: 'mdi-language-php'},
          { id: 2, src: 'mdi-language-javascript'},
          { id: 3, src: 'mdi-database'},
          { id: 4, src: 'mdi-github'},
          { id: 5, src: 'mdi-bootstrap'}
        ],
        isfdTechStack: [
          { id: 1, src: 'mdi-language-php'},
          { id: 2, src: 'mdi-jquery'},
          { id: 3, src: 'mdi-database'},
          { id: 4, src: 'mdi-github'},
          { id: 5, src: 'mdi-bootstrap'}
        ]
      }
    },
    props: {
      showCase: String
    },
    components: {
      ProjectCard
    }
  }
</script>

<style>

</style>
