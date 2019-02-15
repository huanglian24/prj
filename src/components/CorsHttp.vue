<template>
	<div>
		<h2>豆瓣电影前三十</h2>
		<div v-for="(movie, index) in movies" :key="index">
			<p>{{ movie.title }}，评分：{{ movie.score }}</p>
		</div>
		
	</div>
</template>
<script>

export default{
	name:"CorsHttp",
	data(){
		return{
			movies:[]
		}
	},
	created(){
    var url = "/api/movie/top250";
    console.log(url);
		this.$axios.get(url,{
			params:{
				count: 30,
				start: 0
			}
		})
		.then(res => {
      console.log(res.data);
			this.filterData(res.data);
		})
		.catch(error => {
			console.log(error)
		})
	},
	methods:{
		filterData(data){
			var finalMovies = [];
			for (var i = 0; i<data.subjects.length; i++) {
				var movieobj = {
					title: data.subjects[i].title,
					score: data.subjects[i].rating.average
				};
				finalMovies.push(movieobj);
			}
			
			this.movies = finalMovies;
		}
	}
}

</script>
<style>
	
</style>
