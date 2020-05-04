<template>
  <div class="deleteserie">
    <h1>Supprimer la serie?</h1>
  </div>
</template>
<script>
export default {
  name: 'deleteserie',
    data() {
      return{
         series:{
           SerieID:"",
             Title:"",
             Note:"",
             Description:"",
             FK_CatégorieID:"",
         },
         url:"http://localhost:8000/Api/newserie"
      }
     },
     methods: {
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