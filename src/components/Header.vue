import { RouterLink } from 'vue-router'


<template>
  <nav role="navigation">
    <div class="group">
      <div class="item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <title>brainstorm-sheep-one-color</title>
          <!-- Designed by Metafizzy, 2017 -->
          <path
            d="M495,415H470.6L510,520H450L410.6,415h-45L405,520H325l-22.5-60h30l-16.9-45h-45l16.9,45h-30L325,520H240L200.6,415h-45L195,520H105V415a105,105,0,0,1-4.9-209.9,105,105,0,0,1,140-50A165,165,0,0,1,524.9,181a73.9,73.9,0,0,0-9.9-.7,72.6,72.6,0,0,0-22.1,3.8A135,135,0,0,0,258,182.7l-8,13.9-13.3-8.9a75,75,0,0,0-112.4,37.5l-3.7,10.6-11.2-.6H105a75,75,0,0,0,0,150H495a75,75,0,0,0,55.1-125.9,49.9,49.9,0,0,0,13.5-9.2,36.7,36.7,0,0,0,7.9-11.8A105,105,0,0,1,495,415Zm53.7-202.5c-6.2-6.2-21.4-11.2-33.7-11.2-9.2,0-21.2,4-30.3,9.6-6.2-9.5-15.5-17.4-25.9-20.9-18.6-6.2-48.9-6.2-67.5,0-10.4,3.5-19.7,11.4-26,20.9-9.1-5.7-21.1-9.6-30.3-9.6-12.4,0-27.6,5.1-33.7,11.3a16,16,0,0,0,0,22.5c6.2,6.2,21.4,11.3,33.8,11.3h23.5c2.8,18,11.4,41.1,21.5,56.3,12.4,18.6,32.6,33.8,45,33.8s32.6-15.2,45-33.7c10.1-15.2,18.7-38.2,21.5-56.2H515c12.4,0,27.6-5.1,33.8-11.2A16,16,0,0,0,548.7,212.5Z"
            fill="#333"
          />
        </svg>
      </div>
      <div class="v-item">
        <p>Linkerd</p>
        <p>Linked. Everywhere.</p>
      </div>
    </div>
    <div class="group">
      <RouterLink class="router-link" to="/login">Login</RouterLink>
      <RouterLink class="router-link" to="/signup">Signup</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin: 0 auto;
  background-color: var(--color-background);
  font-size: 3rem;
  line-height: 0.9em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border-bottom: solid var(--color-border) 4px;

  position: fixed;
  width: 100%;
  top: 0;
  overflow: hidden;

  z-index: 1000;
}

.group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item {
    width:100px;
    height:100px; 
}

.item svg path {
    fill: var(--color-text);
}
.v-item {
  display: flex;
  flex-direction: column;
}

.router-link {
  color: var(--color-text);
}

.router-link:first-child {
  margin-right: 0.25em;
  border-right: solid var(--color-background) 2px;
  padding-right: 0.25em;
}
.router-link:hover {
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>