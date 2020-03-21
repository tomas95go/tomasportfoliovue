<template>
  <v-col>
    <v-col>
      <v-row align="center" justify="center">
        <h1>{{ title }}</h1>
        <h1>{{ $t("home.title") }}</h1>
      </v-row>
      <v-row align="center" justify="center">
        <h2>I'm a {{ profession }}</h2>
      </v-row>
    </v-col>
    <v-row align="center" justify="center">
      <Projects :show-case="showCase"></Projects>
    </v-row>
  </v-col>
</template>

<script>
import Projects from "../../components/Projects";
export default {
  components: {
    Projects
  },
  data() {
    return {
      title: `González Oviedo Tomás Emiliano`,
      profession: `Web Developer`,
      showCase: `Projects`
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: Helvetica sans-serif;
}
</style>
