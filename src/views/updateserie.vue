<template>
  <div class="updateserie">
    <h1>Modifier la serie</h1>
<p> CatégorieID <input type="int" v-model="serie.FK_CatégorieID"></p>
<p>  Titre  <input type="text" v-model="serie.Title"></p>
<p>  Note  <input type="int" v-model="serie.Note"></P>
<p>  Description  <input type="text" v-model="serie.Description"></p>
<p>  Statut  <input type="text" v-model="serie.Statut"></p>
<p><button v-on:click="updateserie(serie)"> Modifier</button></p>
</div>
</template>
<script>
export default {
  name: 'updateserie',
    data() {
      return{
         serie:{
           SerieID:"",
             Title:"",
             Note:"",
             Description:"",
             FK_CatégorieID:"",
             Statut:""
         },
         url:"http://localhost:8000/Api/updateserie/:SerieID"
      }
     },
     methods: {
     },
          updateSerie(serie){
       axios
         .put(this.url + serie.SerieID, serie)
         .then((response) => {
             console.log(response.data);
         })
                  .catch((error) => {
             console.log(error);
         });
     }
};
</script>
<style scoped>
p{
  font-family: Arial, Helvetica, sans-serif;
  color : white;
}
table
{
margin: auto;
}
td
{
text-align :center;
}
</style>