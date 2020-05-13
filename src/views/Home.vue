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
  
  <td ><form v-bind:serie="serie" @event_delete="deleteserie"><router-link :to="{ name: 'deleteserie', params: { SerieID: serie.SerieID }}"><input src="kisspng-button-computer-icons-.png" type="image"></router-link></form>
  <button><Serie v-bind:serie="serie" @event_update="updateserie" ></Serie></button>
  </td>
  </tr>

  </table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Serie from "./updateserie.vue";
export default {
  name: 'home',
  components:{Serie},
    data() {
      return{   
          serie:{
           SerieID:0,
             Title:"Title",
             Note:0,
             Description:"Description",
             Statut:"Statut",
             FK_CatégorieID:0,
             FK_iduser:0,
         },
         series:[],
         url:"http://localhost:8000/Api/mainpage/",
         url2: "http://localhost:8000/Api/updateserie/",
         showCreate: false
      }
     },
     methods: {
     get_serieList() {
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
     updateserie(serie){
       console.log(serie)
       axios.put(this.url2 + serie.SerieID, serie)
         .then((response) => {
             console.log(response.data);
         })
                  .catch((error) => {
             console.log(error);
         });
         console.log("update item " + serie.SerieID);
     }
     },
     mounted() {
     this.get_serieList();
     
     }
}
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