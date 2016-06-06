<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Create a new project</h1>

      <form v-if="step == 1">
        <fieldset class="form-group">
          <label for="project-name">Project name</label>
          <input type="text" id="project-name" class="form-control" v-model="project" autofocus>
        </fieldset>

        <button type="submit" class="btn btn-primary" @click="next">But who are you?</button>
      </form>

      <form v-if="step == 2">
        <fieldset class="form-group">
          <label for="name">Your name</label>
          <input type="text" id="name" class="form-control" v-model="name">
        </fieldset>

        <fieldset class="form-group">
          <label for="email">Your Email Address</label>
          <input type="email" id="email" class="form-control" v-model="email">
        </fieldset>

        <button type="submit" class="btn btn-primary" @click="next">Thanks! Mind choosing a password?</button>
      </form>

      <form v-if="step == 3">
        <fieldset class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" v-model="password">
        </fieldset>

        <button type="submit" class="btn btn-primary" @click="create">All good!</button>
      </form>

      <p v-if="step == 4">
        Thanks, you'll be redirected in a few milliseconds!
      </p>
    </div>
  </div>
</template>

<script>
  import Process from '../Processes/NewProjectAndRegister'
  import Vue from 'vue'
  import router from 'vue-router'

  export default {
    data: function () {
      return {
        project: '',
        name: '',
        email: '',
        password: '',
        step: 1
      }
    },

    methods: {
      next: function (event) {
        event.preventDefault()
        this.step += 1

        Vue.nextTick(() => document.getElementsByTagName('input')[0].focus())
      },

      create: function (event) {
        event.preventDefault()
        this.step += 1

        Process(this.name, this.email, this.password, this.project)
          .then(() => router.go('/' + this.project))
      }
    }
  }
</script>
