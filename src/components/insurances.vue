<template>
  <div class="hello">
    <h1>Verzekeringen</h1>
    <ul>
      <li v-for="insurance in insurances" :key="insurance.id">
        <h2>{{insurance.id}}</h2>
        <p>{{ insurance.name }}</p>
        <button>Afsluiten</button>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "insurances",
  data() {
    return {
      insurances: []
    };
  },
  mounted () {
    axios 
      .get('https://jsonblob.com/api/jsonBlob/48dd6a3e-db65-11e8-893a-47d36e570923')
      .then(response => (this.insurances = response.data.insurances))
  }
  //
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {text-align:left;}
h1,
h2 {font-weight: normal;color:#004078;}
h2 {font-size:24px;font-weight:bold;text-transform:capitalize;
margin-bottom:5px;}
h2 + p {margin-top:0;}
ul {list-style-type: none;
  padding: 0;
  display:grid;
  grid-gap:25px;
  grid-template-columns:repeat(auto-fill, minmax(270px, 1fr));}
li {display: inline-block;
background:#deecf5;padding:5px 25px 25px;}
a {color: #42b983;}
button {background:#159933;margin-top:20px;border:none;box-shadow:none;padding:10px 20px;border-radius:6px;color:#fff;font-size:18px;}
</style>
