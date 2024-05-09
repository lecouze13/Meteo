<template>
  <div v-if="isFetching" >
    <h1>{{ Name }}</h1>
   Dernière mise à jour: {{dateLastMesure}}
  <div class="main_div">
     
    <div v-for="item in data.forecast" :key="item.datetime" class="divCarrer">
     

     
      <br /><br />
      <br /><br />
       <br />
      

      <div v-if="item.weatherSVG == 'NuageuxFaible'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="cloudy-day-1">
            <g transform="translate(20,10)">
              <g transform="translate(0,16)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#C6DEFF"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'Soleil'">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="0" y1="47" x2="64" y2="47"/>
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="10" y1="37" x2="0" y2="37"/>
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="64" y1="37" x2="54" y2="37"/>
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="15" x2="32" y2="4"/>
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="14" y1="23" x2="6" y2="15"/>
        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="50" y1="23" x2="58" y2="15"/>
        <path fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M48.159,47C49.96,44.096,51,40.669,51,37
          c0-10.493-8.506-19-19-19s-19,8.507-19,19c0,3.668,1.04,7.094,2.841,9.998"/>
        </svg>

      </div>
      <div v-else-if="item.weatherSVG == 'NuageuxMoyen'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="cloudy-day-2">
            <g transform="translate(20,10)">
              <g transform="translate(0,16)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#91C0F8"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'NuageuxFort'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="cloudy-day-3">
            <g transform="translate(20,10)">
              <g transform="translate(0,16)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div v-else-if="item.weatherSVG == 'Ensoleillé'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="cloudy-day-1">
            <g transform="translate(20,10)">
              <g transform="translate(0,16)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#C6DEFF"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'Brumeux'"></div>
      <div v-else-if="item.weatherSVG == 'Pluvieux'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="rainy-1">
            <g transform="translate(20,10)">
              <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  transform="translate(-15,-5), scale(0.85)"
                />
              </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
              <line
                class="am-weather-rain-1"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,7"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(-6,1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
              <line
                class="am-weather-rain-2"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,7"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(0,-1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'Neigeux'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="snowy-1">
            <g transform="translate(20,10)">
              <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                  <g>
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(45)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(90)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(135)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(180)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(225)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(270)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                  <g transform="rotate(315)">
                    <line
                      fill="none"
                      stroke="orange"
                      stroke-linecap="round"
                      stroke-width="2"
                      transform="translate(0,9)"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="3"
                    />
                  </g>
                </g>
                <circle
                  cx="0"
                  cy="0"
                  fill="orange"
                  r="5"
                  stroke="orange"
                  stroke-width="2"
                />
              </g>
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  transform="translate(-15,-5), scale(0.85)"
                />
              </g>
            </g>
            <g transform="translate(20,9)">
              <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
              <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'Orageux'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="thunder">
            <g transform="translate(20,10)">
              <g class="am-weather-cloud-1">
                <path
                  d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#91C0F8"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-10,-6), scale(0.6)"
                />
              </g>
              <g>
                <path
                  d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
              <g transform="translate(-9,28), scale(1.2)">
                <polygon
                  class="am-weather-stroke"
                  fill="orange"
                  stroke="white"
                  stroke-width="1"
                  points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'PrécipitationsFaible'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="rainy-4">
            <g transform="translate(20,10)">
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
            <g transform="translate(37,45), rotate(10)">
              <line
                class="am-weather-rain-1"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,7"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(-6,1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'PrécipitationsMoyens'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="rainy-5">
            <g transform="translate(20,10)">
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
              <line
                class="am-weather-rain-1"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,7"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(-6,1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
              <line
                class="am-weather-rain-2"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,7"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(0,-1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'PrécipitationsForte'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="rainy-6">
            <g transform="translate(20,10)">
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
            </g>
            <g transform="translate(31,46), rotate(10)">
              <line
                class="am-weather-rain-1"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,4"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(-4,1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
              <line
                class="am-weather-rain-2"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,4"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(0,-1)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
              <line
                class="am-weather-rain-1"
                fill="none"
                stroke="#91C0F8"
                stroke-dasharray="4,4"
                stroke-linecap="round"
                stroke-width="2"
                transform="translate(4,0)"
                x1="0"
                x2="0"
                y1="0"
                y2="8"
              />
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'neige_forte'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="snowy-6">
            <g transform="translate(20,10)">
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
              <g class="am-weather-snow-1">
                <g transform="translate(3,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
              <g class="am-weather-snow-2">
                <g transform="translate(11,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
              <g class="am-weather-snow-3">
                <g transform="translate(20,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == 'neige_moyenne'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="snowy-5">
            <g transform="translate(20,10)">
              <g class="am-weather-cloud-2">
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
              <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
              <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div v-else-if="item.weatherSVG == ' neige_faible'">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="64"
          height="64"
          viewbox="0 0 64 64"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blur)" id="snowy-4">
            <g transform="translate(20,10)">
              <g>
                <path
                  d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                  fill="#57A0EE"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  transform="translate(-20,-11)"
                />
              </g>
              <g class="am-weather-snow-1">
                <g transform="translate(11,28)">
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    transform="translate(0,9), rotate(0)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(45)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(90)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                  <line
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="1"
                    transform="translate(0,9), rotate(135)"
                    x1="0"
                    x2="0"
                    y1="-2.5"
                    y2="2.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <br /><br />
      <br /><br />
    <h2> Méteo du {{ item.datetime }}</h2>
     
 <h2>{{ item.tmin }}° | {{ item.tmax }} °
    <br/>
    </h2>
   <h3>  Weather: {{ item.weather }} <br/>
       Probabilité de gel : {{ item.probafrost }}% <br />
      Probabilité qu'il pleut : {{ item.probarain }}% <br /></h3>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import { svg2 } from '.asset/s/animated/rainy-1.svg'
const Name = ref(undefined);
const isFetching = ref(false);
const data = ref(null);
const dateLastMesure=ref(null)
var json = {
  0: "Soleil",
  1: "Peu nuageux",
  2: "Ciel voilé",
  3: "Nuageux",
  4: "Très nuageux",
  5: "Couvert",
  6: "Brouillard",
  7: "Brouillard givrant",
  10: "Pluie faible",
  11: "Pluie modérée",
  12: "Pluie forte",
  13: "Pluie faible verglaçante",
  14: "Pluie modérée verglaçante",
  15: "Pluie forte verglaçante",
  16: "Bruine",
  20: "Neige faible",
  21: "Neige modérée",
  22: "Neige forte",
  30: "Pluie et neige mêlées faibles",
  31: "Pluie et neige mêlées modérées",
  32: "Pluie et neige mêlées fortes",
  40: "Averses de pluie locales et faibles",
  41: "Averses de pluie locales",
  42: "Averses locales et fortes",
  43: "Averses de pluie faibles",
  44: "Averses de pluie",
  45: "Averses de pluie fortes",
  46: "Averses de pluie faibles et fréquentes",
  47: "Averses de pluie fréquentes",
  48: "Averses de pluie fortes et fréquentes",
  60: "Averses de neige localisées et faibles",
  61: "Averses de neige localisées",
  62: "Averses de neige localisées et fortes",
  63: "Averses de neige faibles",
  64: "Averses de neige",
  65: "Averses de neige fortes",
  66: "Averses de neige faibles et fréquentes",
  67: "Averses de neige fréquentes",
  68: "Averses de neige fortes et fréquentes",
  70: "Averses de pluie et neige mêlées localisées et faibles",
  71: "Averses de pluie et neige mêlées localisées",
  72: "Averses de pluie et neige mêlées localisées et fortes",
  73: "Averses de pluie et neige mêlées faibles",
  74: "Averses de pluie et neige mêlées",
  75: "Averses de pluie et neige mêlées fortes",
  76: "Averses de pluie et neige mêlées faibles et nombreuses",
  77: "Averses de pluie et neige mêlées fréquentes",
  78: "Averses de pluie et neige mêlées fortes et fréquentes",
  100: "Orages faibles et locaux",
  101: "Orages locaux",
  102: "Orages fort et locaux",
  103: "Orages faibles",
  104: "Orages",
  105: "Orages forts",
  106: "Orages faibles et fréquents",
  107: "Orages fréquents",
  108: "Orages forts et fréquents",
  120: "Orages faibles et locaux de neige ou grésil",
  121: "Orages locaux de neige ou grésil",
  122: "Orages locaux de neige ou grésil",
  123: "Orages faibles de neige ou grésil",
  124: "Orages de neige ou grésil",
  125: "Orages de neige ou grésil",
  126: "Orages faibles et fréquents de neige ou grésil",
  127: "Orages fréquents de neige ou grésil",
  128: "Orages fréquents de neige ou grésil",
  130: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
  131: "Orages locaux de pluie et neige mêlées ou grésil",
  132: "Orages fort et locaux de pluie et neige mêlées ou grésil",
  133: "Orages faibles de pluie et neige mêlées ou grésil",
  134: "Orages de pluie et neige mêlées ou grésil",
  135: "Orages forts de pluie et neige mêlées ou grésil",
  136: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
  137: "Orages fréquents de pluie et neige mêlées ou grésil",
  138: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
  140: "Pluies orageuses",
  141: "Pluie et neige mêlées à caractère orageux",
  142: "Neige à caractère orageux",
  210: "Pluie faible intermittente",
  211: "Pluie modérée intermittente",
  212: "Pluie forte intermittente",
  220: "Neige faible intermittente",
  221: "Neige modérée intermittente",
  222: "Neige forte intermittente",
  230: "Pluie et neige mêlées",
  231: "Pluie et neige mêlées",
  232: "Pluie et neige mêlées",
  235: "Averses de grêle",
};
 function getWeatherCategory(weather) {
    for (const category in weatherCategories) {
      if (weatherCategories[category].includes(weather)) {
        return category;
      }
    }
    return "Autre";
  }
// Définition des catégories météorologiques avec les conditions correspondantes
const weatherCategories = {
  Ensoleillé: ["Peu nuageux"],
  Soleil:["Soleil"],
  NuageuxMoyen: ["Nuageux"],
  NuageuxFaible: ["Ciel voilé"],
  NuageuxFort: ["Très nuageux", "Couvert"],

  Brumeux: ["Brouillard", "Brouillard givrant"],
  // Pluvieux: [
  //   "Pluie faible",
  //   "Pluie modérée",
  //   "Pluie forte",
  //   "Pluie faible verglaçante",
  //   "Pluie modérée verglaçante",
  //   "Pluie forte verglaçante",
  //   "Bruine",
  // ],

  neige_moyenne: [
    "Neige modérée",
    "Averses de neige",
    "Averses de neige modérées",
    "Averses de neige fréquentes",
    "Orages locaux de neige ou grésil",
    "Orages de neige ou grésil",
    "Orages fréquents de neige ou grésil",
    "Averses de pluie et neige mêlées modérées",
    "Averses de pluie et neige mêlées",
    "Averses de pluie et neige mêlées fréquentes",
    "Pluie et neige mêlées",
    "Orages locaux de pluie et neige mêlées ou grésil",
    "Orages de pluie et neige mêlées ou grésil",
    "Orages fréquents de pluie et neige mêlées ou grésil",
  ],
  neige_forte: [
    "Neige forte",
    "Pluie et neige mêlées fortes",
    "Averses de neige localisées et fortes",
    "Averses de neige fortes",
    "Averses de neige fortes et fréquentes",
    "Orages faibles et fréquents de neige ou grésil",
    "Orages fréquents de neige ou grésil",
    "Orages forts et fréquents de neige ou grésil",
    "Averses de pluie et neige mêlées fortes",
    "Averses de pluie et neige mêlées fortes et fréquentes",
    "Orages forts de pluie et neige mêlées ou grésil",
    "Orages forts et fréquents de pluie et neige mêlées ou grésil",
  ],
  neige_faible: [
    "Neige faible",
    "Pluie et neige mêlées faibles",
    "Averses de neige localisées et faibles",
    "Averses de neige faibles",
    "Averses de neige",
    "Averses de neige faibles et fréquentes",
    "Orages faibles et locaux de neige ou grésil",
    "Orages faibles de neige ou grésil",
    "Orages faibles et fréquents de neige ou grésil",
    "Averses de pluie et neige mêlées localisées et faibles",
    "Averses de pluie et neige mêlées faibles",
    "Averses de pluie et neige mêlées faibles et nombreuses",
    "Pluie et neige mêlées",
    "Orages faibles et locaux de pluie et neige mêlées ou grésil",
    "Orages faibles de pluie et neige mêlées ou grésil",
    "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
  ],

  Orageux: [
    "Orages faibles et locaux",
    "Orages locaux",
    "Orages fort et locaux",
    "Orages faibles",
    "Orages",
    "Orages forts",
    "Orages faibles et fréquents",
    "Orages fréquents",
    "Orages forts et fréquents",
    "Pluies orageuses",
    "Pluie et neige mêlées à caractère orageux",
    "Neige à caractère orageux",
  ],
  PrécipitationsFaible: [
    "Pluie faible intermittente",
    "Pluie faible",
    "Pluie faible verglaçante",
    "Bruine",
    "Averses de pluie locales et faibles",
    "Averses de pluie faibles",
    "Averses de pluie faibles et fréquentes",
  ],
  PrécipitationsMoyens: [
    "Pluie modérée intermittente",
    "Pluie modérée",
    "Pluie modérée verglaçante",
    "Averses de pluie locales",
    "Averses de pluie",
    "Averses de pluie fréquentes",
  ],
  PrécipitationsForte: [
    "Pluie forte intermittente",
    "Pluie forte",
    "Pluie forte verglaçante",
    "Averses locales et fortes",
    "Averses de pluie fortes",
    "Averses de pluie fortes et fréquentes",
  ],

  Précipitations: [],
};

navigator.geolocation.getCurrentPosition(geoSuccess);
// async function loadSVG() {
//   try {
//     const svgCloudyDay1Content = await import(
//       "./assets/animated/weather_sunset.svg"
//     );
//     // Chargez d'autres fichiers SVG si nécessaire

//     // Associez les contenus des fichiers SVG aux valeurs météorologiques correspondantes
//     weatherSVGs["Ensoleillé"] = svgCloudyDay1Content.default;
//     weatherSVGs["Nuageux"] = svgCloudyDay1Content.default;
//     weatherSVGs["Brumeux"] = svgCloudyDay1Content.default;
//     weatherSVGs["Pluvieux"] = "svgCloudyDay1Content.default";
//     weatherSVGs["Neigeux"] = svgCloudyDay1Content.default;
//     weatherSVGs["Orageux"] = svgCloudyDay1Content.default;
//     weatherSVGs["Précipitations"] = svgCloudyDay1Content.default;

//     // Associez d'autres contenus SVG aux valeurs météorologiques correspondantes
//   } catch (error) {
//     console.error("Erreur lors du chargement des fichiers SVG :", error);
//   }
// }
 async function fetchData(insee) {

const rep2 = await fetch(
    "https://api.meteo-concept.com/api/forecast/daily?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&insee=" +
      insee
  );
  const res2 = await rep2.json();

  data.value = res2;
  console.log(data.value);
  console.log(isFetching);
  if (data.value && data.value.forecast) {
    console.log();
    data.value.forecast.forEach((item) => {
      const dateObject = new Date(item.datetime);
      const options = { year: "numeric", month: "long", day: "numeric" };
      item.datetime = dateObject.toLocaleDateString("fr-FR", options);
      const weatherCode = item.weather;
      item.weather = json[weatherCode];
      item.weatherSVG = getWeatherCategory(json[weatherCode]);
      console.log(item.weather);
    });
  }
  localStorage.setItem("data",JSON.stringify(data.value))
   localStorage.setItem("lastUpdate", Date.now());
         console.log(localStorage.getItem("lastUpdate"))


}
async function geoSuccess(position) {
  if(localStorage.getItem("lastUpdate"))
  {
   const timestamp = parseInt(localStorage.getItem("lastUpdate"));

    // Convertir le timestamp en date
     dateLastMesure.value = new Date(timestamp);
 const options = {  };
       dateLastMesure.value = dateLastMesure.value.toLocaleDateString("fr-FR", options);
       }
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const resp = await fetch(
    "https://api.meteo-concept.com/api/location/city?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&latlng=" +
      position.coords.latitude +
      "," +
      position.coords.longitude
  );
  const insee = await resp.json();
  console.log(insee.city.name);
  isFetching.value = true;
  Name.value = insee.city.name;
  const lastUpdate = localStorage.getItem("lastUpdate");
      if (!lastUpdate) {
fetchData(insee.city.insee);

    }
  

  // localStorage.setItem("")

      
      else {
         const oneHour = 60 * 60 * 1000; // 1 heure en millisecondes
        const currentTime = Date.now();
        if (currentTime - lastUpdate >= oneHour) {
          // Si une heure s'est écoulée depuis la dernière mise à jour, récupérer et stocker les données
          fetchData(insee.city.insee);
        }
        data.value= JSON.parse(localStorage.getItem("data"))
      }
 

  // Fonction pour obtenir la catégorie météorologique d'une condition météorologique donnée
 

  // Fonction pour obtenir le SVG correspondant à une condition météorologique donnée
  // function getWeatherSVG(weather) {
  //   const category = getWeatherCategory(weather);
  //   return weatherSVGs[category];
  // }
  // loadSVG();
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
  width: 600px;

}
.divCarrer svg {
  /* width: 105px; */
  /* height: 105px; */
  transform: scale(5);
}
.main_div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
      justify-content: center;
}
</style>
