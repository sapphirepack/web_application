import { RouterLink } from 'vue-router'


<template>
  <nav class="navbar navbar-light navbar-expand-md py-3">
    <div class="container">
      <img
        src="~@/assets/bootstrap/img/brainstorm-sheep.svg?h=ff0e682366acef193d644871e82c87ae"
        width="100"
        height="100"
      />
      <div class="row text-center">
        <div class="col-sm-12 offset-sm-1">
          <span><strong>Linkerd</strong></span>
          <div class="row">
            <div class="col">
              <span class="text-muted">Linked. Everywhere</span>
            </div>
          </div>
        </div>
      </div>
      <button
        data-bs-toggle="collapse"
        class="navbar-toggler"
        data-bs-target="#navcol-2"
      >
        <span class="visually-hidden">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navcol-2">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
        </ul>
        <a
          class="btn btn-outline-primary ms-md-2"
          role="button"
          href="/login"
          style="margin-right: 5px; padding-right: 8px; padding-left: 10px"
          >Login</a
        ><a class="btn btn-primary ms-md-2" role="button" href="/signup"
          >Signup</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>