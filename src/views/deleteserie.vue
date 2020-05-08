<template>
  <div class="deleteserie">
    <h1>Supprimer la serie?</h1>

    <button v-on:click="deleteserie(idserie)">Effacer</button>
  </div>
</template>
<script>
export default {
  name: 'deleteserie',
    data() {
      return{
        idserie:0,
        url:"http://localhost:8000/Api/deleteserie/"
      }

     },
     methods: {
       deleteserie(idserie){
                axios
         .delete(this.url + idserie)
         .then((response) => {
             console.log(response.data);
         })
         .catch((error) => {
             console.log(error);
         })
         this.$router.push({name : "home"})
       }
     } ,
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