<template>
    <div id="serie">   
        <button class="modif" v-on:click="showInput = true" v-if="! showInput" >Modifier</button>
    <div v-if="showInput"> 
            <input type="text" v-model="serie.Title">
            <input type="text" v-model="serie.Description">
            <input type="number" v-model="serie.Note">
            <input type="text" v-model="serie.Statut">
            <input type="number" v-model="serie.FK_CatégorieID">
            <input type="hidden" v-model="serie.FK_iduser">
   <button v-on:click="updateserieee(serie)">Sauver</button>
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
        </div>
      </div>
</template>

<script>
    export default {
        name: "Serie",
        props:['serie'],
        data() {
            return {
              showInput:false
            }
        },
        methods: {
            updateserieee(serie) {
                this.$emit('event_update', serie);
                  this.showInput = false;
            }
     }
     }
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
.modif, button{
        border-radius: 12px;
        background-color: black;
        border: white;
        color: white;
        font-family: Georgia;
        font-size: 13px;
    }
</style>