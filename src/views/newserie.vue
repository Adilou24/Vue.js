<template>
  <div class="newserie">
    <h1>Ajouter une nouvelle serie</h1>
<p>  Titre  <input type="text" v-model="series.Title"></p>
<p>  Note  <input type="int" v-model="series.Note"></P>
<p>  Description  <input type="text" v-model="series.Description"></p>
<p>  Statut  <input type="text" v-model="series.Statut">
<p><button v-on:click="createserie">Ajouter</button>
   </p>
  </div>
</template>
<script>
export default {
  name: 'newserie',
    data() {
      return{
         series:{
             Title:"",
             Note:"",
             Description:"",
             FK_CatégorieID:"",
             FK_iduser:"",
             Statut:"",
         },
         url:"http://localhost:8000/Api/newserie"
      }
     },
     methods: {
     createserie() {
         axios
         .post(this.url, this.series)
         .then((response) => {
             this.series = response.data.series;
             console.log(this.series);
         })
         .catch((error) => {
             console.log(error);
         })
     }
     }, 
};
</script>
<style scoped>
p{
  font-family: Arial, Helvetica, sans-serif;
  color : white;
}
</style>