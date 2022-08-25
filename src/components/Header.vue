import { RouterLink } from 'vue-router'


<template>
    <nav role="navigation">
        <div class="group">
            <div class="item">
                <img alt="Linkerd logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
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
    background-color: white;
    font-size: 3rem;
    line-height:0.9em;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    border-bottom: solid black 4px;

    position:fixed;
    width: 100%;
    top: 0;
    overflow: hidden;

    z-index:1000;
 }

 .group {
    display: flex;
    flex-direction: row;
    align-items: center;
 }

 .v-item {
    display: flex;
    flex-direction: column;
 }

.router-link {
    color:black;
}

.router-link:first-child {
    margin-right: 0.25em;
    border-right: solid black 2px;
    padding-right: 0.25em;
}
.router-link:hover{
    background-color:black;
    color:white;
}
</style>