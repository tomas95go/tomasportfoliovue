<template>
	<v-col>
		<v-col>
			<v-row align="center" justify="center">
				<h1> {{ title }} </h1>
			</v-row>
			<v-row align="center" justify="center">
				<h2>I'm a {{ profession }} </h2>
			</v-row>
		</v-col>
		<v-row align="center" justify="center">
			<projects :showCase="showCase"></projects>
		</v-row>
	</v-col>
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