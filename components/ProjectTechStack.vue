<template>
  <v-sheet class="mx-auto" max-width="250">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="key in techStack" :key="key.id">
        <v-icon :size="iconSize">{{key.src}}</v-icon>
      </v-slide-item>
    </v-slide-group>

  </v-sheet>
</template>

<script>
  export default {
    name: 'ProjectTechStack',
    props: {
      techStack: Array
    },
    data() {
      return {
        iconSize: '55px'       
      }
    }
  }
</script>
