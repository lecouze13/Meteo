<template>
  <h1 v-if="isFetching == true">{{ Name }}
    <div v-for="item in data.forecast" :key="item.datetime" class="divCarrer">
      {{ item.datetime }}
      <br>
      Min {{ item.tmin }}°c

      Max {{ item.tmax }} °c

      Weather : <span v-html="weatherSVGs[item.weatherSVG]"></span>

      <svg src={lik1}></svg>
      <br>
      Probabilité de gel : {{ item.probafrost }}% <br>
      Probabilité qu'il pleut {{ item.probarain }}% <br>

    </div>
  </h1>
</template>

<script setup>
import { ref } from 'vue'
import { svg1 } from './assets/animated/weather_sunset.svg'
//import { svg2 } from '.asset/s/animated/rainy-1.svg'
const Name = ref(undefined)
const isFetching = ref(false)
const data = ref(null)
var json = {
  "0": "Soleil",
  "1": "Peu nuageux",
  "2": "Ciel voilé",
  "3": "Nuageux",
  "4": "Très nuageux",
  "5": "Couvert",
  "6": "Brouillard",
  "7": "Brouillard givrant",
  "10": "Pluie faible",
  "11": "Pluie modérée",
  "12": "Pluie forte",
  "13": "Pluie faible verglaçante",
  "14": "Pluie modérée verglaçante",
  "15": "Pluie forte verglaçante",
  "16": "Bruine",
  "20": "Neige faible",
  "21": "Neige modérée",
  "22": "Neige forte",
  "30": "Pluie et neige mêlées faibles",
  "31": "Pluie et neige mêlées modérées",
  "32": "Pluie et neige mêlées fortes",
  "40": "Averses de pluie locales et faibles",
  "41": "Averses de pluie locales",
  "42": "Averses locales et fortes",
  "43": "Averses de pluie faibles",
  "44": "Averses de pluie",
  "45": "Averses de pluie fortes",
  "46": "Averses de pluie faibles et fréquentes",
  "47": "Averses de pluie fréquentes",
  "48": "Averses de pluie fortes et fréquentes",
  "60": "Averses de neige localisées et faibles",
  "61": "Averses de neige localisées",
  "62": "Averses de neige localisées et fortes",
  "63": "Averses de neige faibles",
  "64": "Averses de neige",
  "65": "Averses de neige fortes",
  "66": "Averses de neige faibles et fréquentes",
  "67": "Averses de neige fréquentes",
  "68": "Averses de neige fortes et fréquentes",
  "70": "Averses de pluie et neige mêlées localisées et faibles",
  "71": "Averses de pluie et neige mêlées localisées",
  "72": "Averses de pluie et neige mêlées localisées et fortes",
  "73": "Averses de pluie et neige mêlées faibles",
  "74": "Averses de pluie et neige mêlées",
  "75": "Averses de pluie et neige mêlées fortes",
  "76": "Averses de pluie et neige mêlées faibles et nombreuses",
  "77": "Averses de pluie et neige mêlées fréquentes",
  "78": "Averses de pluie et neige mêlées fortes et fréquentes",
  "100": "Orages faibles et locaux",
  "101": "Orages locaux",
  "102": "Orages fort et locaux",
  "103": "Orages faibles",
  "104": "Orages",
  "105": "Orages forts",
  "106": "Orages faibles et fréquents",
  "107": "Orages fréquents",
  "108": "Orages forts et fréquents",
  "120": "Orages faibles et locaux de neige ou grésil",
  "121": "Orages locaux de neige ou grésil",
  "122": "Orages locaux de neige ou grésil",
  "123": "Orages faibles de neige ou grésil",
  "124": "Orages de neige ou grésil",
  "125": "Orages de neige ou grésil",
  "126": "Orages faibles et fréquents de neige ou grésil",
  "127": "Orages fréquents de neige ou grésil",
  "128": "Orages fréquents de neige ou grésil",
  "130": "Orages faibles et locaux de pluie et neige mêlées ou grésil",
  "131": "Orages locaux de pluie et neige mêlées ou grésil",
  "132": "Orages fort et locaux de pluie et neige mêlées ou grésil",
  "133": "Orages faibles de pluie et neige mêlées ou grésil",
  "134": "Orages de pluie et neige mêlées ou grésil",
  "135": "Orages forts de pluie et neige mêlées ou grésil",
  "136": "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
  "137": "Orages fréquents de pluie et neige mêlées ou grésil",
  "138": "Orages forts et fréquents de pluie et neige mêlées ou grésil",
  "140": "Pluies orageuses",
  "141": "Pluie et neige mêlées à caractère orageux",
  "142": "Neige à caractère orageux",
  "210": "Pluie faible intermittente",
  "211": "Pluie modérée intermittente",
  "212": "Pluie forte intermittente",
  "220": "Neige faible intermittente",
  "221": "Neige modérée intermittente",
  "222": "Neige forte intermittente",
  "230": "Pluie et neige mêlées",
  "231": "Pluie et neige mêlées",
  "232": "Pluie et neige mêlées",
  "235": "Averses de grêle"
}
var lik1 = "./assets/animated/rainy-1.svg";
// Définition des catégories météorologiques avec les conditions correspondantes
const weatherCategories = {
  "Ensoleillé": ["Soleil", "Peu nuageux"],
  "Nuageux": ["Ciel voilé", "Nuageux", "Très nuageux", "Couvert"],
  "Brumeux": ["Brouillard", "Brouillard givrant"],
  "Pluvieux": ["Pluie faible", "Pluie modérée", "Pluie forte", "Pluie faible verglaçante", "Pluie modérée verglaçante", "Pluie forte verglaçante", "Bruine"],
  "Neigeux": ["Neige faible", "Neige modérée", "Neige forte", "Pluie et neige mêlées faibles", "Pluie et neige mêlées modérées", "Pluie et neige mêlées fortes", "Averses de neige localisées et faibles", "Averses de neige localisées", "Averses de neige localisées et fortes", "Averses de neige faibles", "Averses de neige", "Averses de neige fortes", "Averses de neige faibles et fréquentes", "Averses de neige fréquentes", "Averses de neige fortes et fréquentes", "Orages faibles et locaux de neige ou grésil", "Orages locaux de neige ou grésil", "Orages faibles de neige ou grésil", "Orages de neige ou grésil", "Orages de neige ou grésil", "Orages faibles et fréquents de neige ou grésil", "Orages fréquents de neige ou grésil", "Orages fréquents de neige ou grésil", "Averses de pluie et neige mêlées localisées et faibles", "Averses de pluie et neige mêlées localisées", "Averses de pluie et neige mêlées localisées et fortes", "Averses de pluie et neige mêlées faibles", "Averses de pluie et neige mêlées", "Averses de pluie et neige mêlées fortes", "Averses de pluie et neige mêlées faibles et nombreuses", "Averses de pluie et neige mêlées fréquentes", "Averses de pluie et neige mêlées fortes et fréquentes", "Pluie et neige mêlées", "Pluie et neige mêlées", "Pluie et neige mêlées", "Orages faibles et locaux de pluie et neige mêlées ou grésil", "Orages locaux de pluie et neige mêlées ou grésil", "Orages fort et locaux de pluie et neige mêlées ou grésil", "Orages faibles de pluie et neige mêlées ou grésil", "Orages de pluie et neige mêlées ou grésil", "Orages forts de pluie et neige mêlées ou grésil", "Orages faibles et fréquents de pluie et neige mêlées ou grésil", "Orages fréquents de pluie et neige mêlées ou grésil", "Orages forts et fréquents de pluie et neige mêlées ou grésil"],
  "Orageux": ["Orages faibles et locaux", "Orages locaux", "Orages fort et locaux", "Orages faibles", "Orages", "Orages forts", "Orages faibles et fréquents", "Orages fréquents", "Orages forts et fréquents", "Pluies orageuses", "Pluie et neige mêlées à caractère orageux", "Neige à caractère orageux"],
  "Précipitations": ["Pluie faible intermittente", "Pluie modérée intermittente", "Pluie forte intermittente", "Neige faible intermittente", "Neige modérée intermittente", "Neige forte intermittente", "Pluie et neige mêlées"]
};

// Définition des SVG correspondants à chaque catégorie météorologique
const weatherSVGs = {
  "Ensoleillé": svg1,
  "Nuageux": `<img src="${lik1}"></img>`,
  "Brumeux": `<img src="${lik1}"></img>`,
  "Pluvieux": `<img src="${lik1}"></img>`,
  "Neigeux": `<img src="${lik1}"></img>`,
  "Orageux": `<img src="${lik1}"></img>`,
  "Précipitations": `<img src="${lik1}"></img>`
};

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
    console.log()
    data.value.forecast.forEach(item => {
      const dateObject = new Date(item.datetime);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      item.datetime = dateObject.toLocaleDateString('fr-FR', options);
      const weatherCode = item.weather;
      item.weather = json[weatherCode];
      item.weatherSVG = getWeatherSVG(json[weatherCode]);
      console.log(item.weather)
    });
  }

  // Fonction pour obtenir la catégorie météorologique d'une condition météorologique donnée
  function getWeatherCategory(weather) {
    for (const category in weatherCategories) {
      if (weatherCategories[category].includes(weather)) {
        return category;
      }
    }
    return "Autre";
  }

  // Fonction pour obtenir le SVG correspondant à une condition météorologique donnée
  function getWeatherSVG(weather) {
    const category = getWeatherCategory(weather);
    return weatherSVGs[category];
  }

  // Utilisation de la fonction getWeatherSVG pour obtenir le SVG correspondant à une condition météorologique donnée

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
