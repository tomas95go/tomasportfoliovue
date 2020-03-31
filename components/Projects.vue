<template>
  <v-col>
    <v-col>
      <v-row align="center" justify="center">
        <h3>{{ $t('projects.title') }}</h3>
      </v-row>
    </v-col>
    <v-row align="center" justify="center">
      <v-col v-for="key in projectsToDisplay" :key="key.id">
        <ProjectCard
          :href-link="key.hrefLink"
          :project-description="key.ipvDesc"
          :img-src="key.imgSource"
          :img-size="key.imgSize"
          :tech-stack="key.techStack"
          :project-name="key.project"
        ></ProjectCard>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import ProjectCard from '../components/ProjectCard';
import axios from 'axios';
export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projectsToDisplay: [
        {
          id: 1,
          project: `projects.projectList[0].firstProject.title`,
          imgSource: '/checklist.png',
          imgSize: '250px',
          ipvDesc: `projects.projectList[0].firstProject.description`,
          hrefLink: `/book-store`,
          techStack: [
            { id: 1, src: 'mdi-laravel' },
            { id: 2, src: 'mdi-jquery' },
            { id: 3, src: 'mdi-database' },
            { id: 4, src: 'mdi-github' },
            { id: 5, src: 'mdi-bootstrap' }
          ]
        },
        {
          id: 2,
          project: `projects.projectList[0].secondProject.title`,
          imgSource: '/shipping-and-delivery.png',
          imgSize: '250px',
          ipvDesc: `projects.projectList[0].secondProject.description`,
          hrefLink: `/ipv`,
          techStack: [
            { id: 1, src: 'mdi-language-php' },
            { id: 2, src: 'mdi-language-javascript' },
            { id: 3, src: 'mdi-database' },
            { id: 4, src: 'mdi-github' },
            { id: 5, src: 'mdi-bootstrap' }
          ]
        },
        {
          id: 3,
          project: `projects.projectList[0].thirdProject.title`,
          imgSource: '/certificate.png',
          imgSize: '250px',
          ipvDesc: `projects.projectList[0].thirdProject.description`,
          hrefLink: `/isfd`,
          techStack: [
            { id: 1, src: 'mdi-language-php' },
            { id: 2, src: 'mdi-jquery' },
            { id: 3, src: 'mdi-database' },
            { id: 4, src: 'mdi-github' },
            { id: 5, src: 'mdi-bootstrap' }
          ]
        }
      ]
    };
  },
  mounted() {
    axios({
      method: 'get',
      url: 'http://localhost:3002/home'
    }).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style></style>
