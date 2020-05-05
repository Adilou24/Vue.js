<template>
  <div class="updateserie">
    <h1>Modifier la serie</h1>
<p> CatégorieID <input type="int" v-model="idserie.FK_CatégorieID"></p>
<p>  Titre  <input type="text" v-model="idserie.Title"></p>
<p>  Note  <input type="int" v-model="idserie.Note"></P>
<p>  Description  <input type="text" v-model="idserie.Description"></p>
<p>  Statut  <input type="text" v-model="idserie.Statut"></p>
<p><button v-on:click="updateserie(serie)"> Modifier</button></p>
</div>
</template>
<script>
export default {
  name: 'updateserie',
    data() {
      return{
        idserie:0,
        CatégorieID:"",
        Titre:"",
         url:"http://localhost:8000/Api/updateserie/"
      }
     },
     methods: {
     },
          updateserie(idserie){
       axios
         .put(this.url + idserie)
         .then((response) => {
             console.log(response.data);
         })
                  .catch((error) => {
             console.log(error);
         });
        this.$router.push({name : "home"})
     },
          created(){
       this.idserie=this.$route.params.SerieID;

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