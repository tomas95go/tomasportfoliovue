<template>
  <v-sheet class="mx-auto" max-width="250">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="key in techStack" :key="key.id">
        <v-btn class="mx-2">
          Options {{ key.id }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    name: 'ProjectTechStack',
    data: () => ({
      techStack: [
        { id: 1, icon: 'language-php'},
        { id: 2, icon: 'language-javascript'},
        { id: 3, icon: 'aa'},
        { id: 4, icon: 'aa'},
        { id: 5, icon: 'aa'},
        { id: 6, icon: 'aa'}
      ]
    })
  }
</script>
