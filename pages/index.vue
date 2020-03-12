<template>
	<v-column>
		<v-row align="center" justify="center">
			<v-column>
			<h1> {{ title }} </h1>
			<h2>I'm a {{ profession }} </h2>
			</v-column>
		</v-row>
		<projects :showCase="showCase"> </projects>
	</v-column>
</template>

<script>
	import Projects from '../components/Projects';
	export default {
		data(){
			return {
				title: `González Oviedo Tomás Emiliano`,
				profession: `Web Developer`,
				showCase: `Projects`
			}
		},
		components: {
			Projects
		}
	}
</script>

<style scoped>
h1 {
  font-family:  Helvetica sans-serif;
}
</style>