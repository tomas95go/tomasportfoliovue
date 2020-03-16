import colors from 'vuetify/es5/util/colors';
import IconSpa from '../../components/Icons/IconSpa.vue';
import IconEng from '../../components/Icons/IconEng.vue';

export default {
	name: 'vuetifyoptions',
	theme: {
		themes: {
	    	light: {
		        primary: '#3f51b5',
		        secondary: '#b0bec5',
		        accent: '#8c9eff',
		        error: '#b71c1c',
		      	},
	      	dark: {
	      		primary: '#1976D2',
  				secondary: '#424242',
  				accent: '#82B1FF',
  				error: '#FF5252',
  				info: '#2196F3',
  				success: '#4CAF50',
  				warning: '#FFC107'
	      	}
		}
	  },
	  font: {
		  family: 'Roboto'
	  },
	  icons: {
		iconfont: 'mdi',
		values: {
		  spflag:{
			component: IconSpa
		  },
		  ukflag: {
			component: IconEng
		  }
		},
	  },
}