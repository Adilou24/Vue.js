<template>
  <div class="home">
  <h1>Liste des séries</h1>
  <p>
    <button type="submit"><router-link to="/newserie">nouvelle serie</router-link>
    </button></p>
    
  <table>
                      <tr>
                        <th>Nom Série</th>
                        <th>Description</th>
                        <th>Note</th>
                        <th>Statut </th>
                        <th><img src="https://www.cjoint.com/doc/20_04/JDCkQDlcxGV_pngguru.com-1-.png"></th></tr>               
 <tr v-for="serie in series" :key="serie.series">
  <td>{{serie.Title}}</td>
  <td>{{serie.Description}}</td>
  <td>{{serie.Note}}</td>
  <td>{{serie.Statut}}</td>
  <td><form><router-link to="/deleteserie"><input src="kisspng-button-computer-icons-.png" type="image"></router-link></form>
  <form><router-link to="/updateserie"><input src="bouton-modifier.png" type="image"></router-link></form></td>
  </tr>
  </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
    data() {
      return{
          series:{
             Title:"",
             Note:"",
             Description:"",
             Statut:"",
         },
         series:[],
         url:"http://localhost:8000/Api/mainpage"
      }
     },
     methods: {},
     mounted() {
         axios
         .get(this.url)
         .then((response) => {
             this.series = response.data.series;
             console.log(this.series);
         })
         .catch((error) => {
             console.log(error);
         });
     },
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
     },
};
</script>
<style scoped>
.home{
  color:white;
}
th{
  text-align: center;
  border : solid 1px;
}
tr{
  border : solid 1px;
}
td{
  border : solid 1px;
}
input[type='image'] {
    width: 20px;
}
th img{
width: 20px;
height: 20px;
}
p{
  text-align: right;
  margin-right: 5px;
}
</style>
