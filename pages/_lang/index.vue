<template>
  <v-col>
    <v-col>
      <v-row align="center" justify="center">
        <h1>{{ $t('home.title') }}</h1>
      </v-row>
      <v-row align="center" justify="center">
        <h2>{{ $t('home.introduction') }}</h2>
      </v-row>
    </v-col>
    <v-row align="center" justify="center">
      <Projects></Projects>
    </v-row>
  </v-col>
</template>

<script>
import Projects from '../../components/Projects';
export default {
  components: {
    Projects
  }
};
</script>

<style scoped>
h1 {
  font-family: Helvetica sans-serif;
}
</style>
