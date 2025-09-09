<template>
  <div class="row">
    <a v-for="link in linkList" :key="link.url" target="_blank" rel="noopener noreferrer" :href="link.url"
      class="shortcut">
      <div>
        <img class="icon" :src="getIcon(link)" alt="Icon" @error="onIconError($event, link)">
        <span>{{ getLinkName(link) }}</span>
      </div>
    </a>
  </div>
  <div>
    <hr class="divisor">
    <div class="row">
      <a target="_blank" rel="noopener noreferrer"
        href="https://www.linkedin.com/search/results/content/?keywords=%22hyperf%22&origin=FACETED_SEARCH&sid=gtA&sortBy=%22date_posted%22"
        class="shortcut">
        <div>
          <img class="icon" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="Icon">
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import links from '@/assets/links.json'
function getLinkName(link) {
  if (link.name) return link.name
  const hostname = new URL(link.url).hostname;
  return hostname.replace('www.', '').split('.')[0];
}
function getIcon(link) {
  if (link.icon) return link.icon
  return link.url + '/favicon.ico'
}

function onIconError(event, link) {
  if (event.target.dataset.fallback === 'svg') {
    event.target.src = require('@/assets/img/icon.png')
    event.target.dataset.fallback = 'generic'
    return
  }
  if (event.target.dataset.fallback) return
  event.target.src = link.url + '/favicon.svg'
  event.target.dataset.fallback = 'svg'
}


const linkList = ref(links)

</script>

<style scoped>
.divisor {
  border-style: groove;
  margin: 36px auto;
  border-color: #ffffff47;
}

.none {
  display: none;
}

.shortcut {
  position: relative;
  top: 20px;
  width: 100px;
  left: 20px;
  color: white;
  height: 100px;
  display: inline-flex;
  text-align: center;
  font-family: sans-serif;
  align-items: flex-end;
  text-shadow: -1px 1px 0px #00000054;
  border-radius: 10px;
  border-radius: 10px;
  justify-content: center;
  text-decoration: none;
  text-transform: capitalize;
}

.shortcut div {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}

.shortcut span {
  font-size: 14px;
  margin-top: 8px;
}

.shortcut:hover {
  background: #ffffff33;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  /* position: absolute; */
  left: 50%;
  top: 50%;
  /* transform: translate(-50%, -50%); */
}
</style>
