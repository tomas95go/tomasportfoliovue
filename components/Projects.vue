<template>
  <v-col>
    <v-col>
      <v-row align="center" justify="center">
        <h3> My {{ showCase }}</h3>
      </v-row>
    </v-col>
    <v-row align="center" justify="center">
      <v-col v-for="key in projectsToDisplay" :key="key.id">
        <ProjectCard :hrefLink="key.hrefLink" 
          :projectDescription="key.ipvDesc" 
          :imgSrc="key.imgSource" :imgSize="key.imgSize" 
          :techStack="key.techStack" 
          :projectName="key.project"></ProjectCard>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  import ProjectCard from '../components/ProjectCard';
  export default {
    name: 'Projects',
    data() {
      return {
        projectsToDisplay: [
          {
            id: 1, 
            project: `Inventory Management System`, 
            imgSource: "/checklist.png", 
            imgSize: "250px",
            ipvDesc: `My first university intership.`, 
            hrefLink: `/book-store`,
            techStack: [
              { id: 1, src: 'mdi-laravel'},
              { id: 2, src: 'mdi-jquery'},
              { id: 3, src: 'mdi-database'},
              { id: 4, src: 'mdi-github'},
              { id: 5, src: 'mdi-bootstrap'}
            ]
          },
          {
            id: 2, 
            project: `Inventory Management System`, 
            imgSource: "/shipping-and-delivery.png", 
            imgSize: "250px",
            ipvDesc: `This was my second university intership.`,
            hrefLink: `/ipv`,
            techStack: [
              { id: 1, src: 'mdi-language-php'},
              { id: 2, src: 'mdi-language-javascript'},
              { id: 3, src: 'mdi-database'},
              { id: 4, src: 'mdi-github'},
              { id: 5, src: 'mdi-bootstrap'}
            ]
          },
          {
            id: 3, 
            project: `Student Management System`, 
            imgSource: "/certificate.png", 
            imgSize: "250px",
            ipvDesc: `My final project to graduate from university.`,
            hrefLink: `/isfd`,
            techStack: [
              { id: 1, src: 'mdi-language-php'},
              { id: 2, src: 'mdi-jquery'},
              { id: 3, src: 'mdi-database'},
              { id: 4, src: 'mdi-github'},
              { id: 5, src: 'mdi-bootstrap'}
            ]
          }
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
