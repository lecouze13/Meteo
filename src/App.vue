<template>
  <h1 v-if="isFetching == true">{{ Name }}
    <div v-for="item in data.forecast" :key="item" class="divCarrer">
      {{ item.datetime }}
      <br>
      Min {{ item.tmin }}°c
      <br>
      Max {{ item.tmax }} °c
      Weather {{ item.weather }}
      Probabilité de gel : {{ item.probafrost }}%
      Probabilité qu'il pleut {{ item.probarain }}%

    </div>



    <!-- <div v-for="day in data.value.forecast">
      <p>{{ day.datetime }}</p>
      <p>{{ day.tmax }}</p>
      <p>{{ day.tmin }}</p>
      <p>{{ day.probRain }}</p>
    </div> -->



  </h1>
</template>

<script setup>
import { ref } from 'vue'
const Name = ref(undefined)
const isFetching = ref(false)
const data = ref(null)
navigator.geolocation.getCurrentPosition(geoSuccess);

async function geoSuccess(position) {

  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const resp = await fetch('https://api.meteo-concept.com/api/location/city?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&latlng=' + position.coords.latitude + ',' + position.coords.longitude);

  const insee = await resp.json()
  console.log(insee.city.name);
  isFetching.value = true;
  Name.value = insee.city.name;
  const rep2 = await fetch('https://api.meteo-concept.com/api/forecast/daily?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&insee=' + insee.city.insee)
  const res2 = await rep2.json()

  data.value = res2
  console.log(data.value)
  console.log(isFetching)
  if (data.value && data.value.forecast) {
    data.value.forecast.map(item => {
      const dateObject = new Date(item.datetime);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      item.datetime = dateObject.toLocaleDateString('fr-FR', options);
    });
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.divCarrer {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
</style>
