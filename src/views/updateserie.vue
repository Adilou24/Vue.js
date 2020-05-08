<template>
    <div id="serie">   
        <button class="modif" v-on:click="showInput = true" v-if="! showInput" >Modifier</button>
    <div v-if="showInput"> 
            <input type="text" v-model="serie.Title">
            <input type="text" v-model="serie.Description">
            <input type="number" v-model="serie.Note">
            <input type="text" v-model="serie.Statut">
            <input type="number" v-model="serie.FK_CatégorieID">
   <button v-on:click="updateserieee(serie)">Sauver</button>
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