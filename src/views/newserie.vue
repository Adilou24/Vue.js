<template>
  <div class="newserie">
    <h1>Ajouter une nouvelle serie</h1>
       <table>
        <tr>
            <th>1</th>
            <td>Action</td>
            <th>2</th>
            <td>Aventure</td>
            <th>3</th>
            <td>Comédie</td>
            <th>4</th>
            <td>Horreur</td>
            <th>5</th>
            <td>Drama</td>
        </tr>
    </table>
<p> CatégorieID <input type="int" v-model="serie.FK_CatégorieID"></p>
<p>  Titre  <input type="text" v-model="serie.Title"></p>
<p>  Note  <input type="int" v-model="serie.Note"></P>
<p>  Description  <input type="text" v-model="serie.Description"></p>
<p><button v-on:click="createserie">Ajouter</button>
   </p>

  </div>
</template>
<script>
export default {
  name: 'newserie',
    data() {
      return{
         serie:{
             Title:"",
             Note:"",
             Description:"",
             FK_CatégorieID:"",
         },
         url:"http://localhost:8000/Api/newserie"
      }
     },
     methods: {
     createserie() {
         axios
         .post(this.url, this.serie)
         .then((response) => {
             this.serie = response.data.serie;
             console.log(this.series);
          
         })
         .catch((error) => {
             console.log(error);
         })
         this.$router.push({name : "home"})
     }
     }, 
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