<template>
  <div class="row">

    <a target="_blank" rel="noopener noreferrer" href="https://chat.deepseek.com/" class="shortcut">
      <div>
        <img class="icon" src="https://chat.deepseek.com/favicon.svg" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://google.com/" class="shortcut">
      <div>
        <img class="icon" src="https://google.com/favicon.ico" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://chatgpt.com/" class="shortcut">
      <div>
        <img class="icon" src="https://chatgpt.com/favicon.ico" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://cursos.alura.com.br/" class="shortcut">
      <div>
        <img class="icon" src="https://cursos.alura.com.br/favicon.ico" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://cursos.aluralingua.com.br/" class="shortcut">
      <div>
        <img class="icon" src="https://cursos.aluralingua.com.br/favicon.ico" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/" class="shortcut">
      <div>
        <img class="icon" src="https://ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://jobs.workinlithuania.com/" class="shortcut">
      <div>
        <img class="icon" src="https://jobs.workinlithuania.com/favicon-32x32.png?v=2" alt="Icon">
      </div>
    </a>

    <a target="_blank" rel="noopener noreferrer" href="https://wellfound.com/" class="shortcut">
      <div>
        <img class="icon" src="https://wellfound.com/favicon.ico" alt="Icon">
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
import { onMounted } from 'vue';

onMounted(() => {
  addSiteNamesToLinks()
})

const addSiteNamesToLinks = () => {
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const hostname = new URL(link.href).hostname;
    // Remove www. e pega só a primeira parte antes do primeiro ponto
    const name = hostname.replace('www.', '').split('.')[0];
    if (name) {
      const span = document.createElement('span');
      span.textContent = name;
      link.querySelector('div').appendChild(span);
    }

  });
};

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
  left: 20px;
  width: 100px;
  color: white;
  text-shadow: -1px 1px 0px #00000054;
  height: 100px;
  border-radius: 10px;
  text-align: center;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  text-transform: capitalize;
  font-family: sans-serif;
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
