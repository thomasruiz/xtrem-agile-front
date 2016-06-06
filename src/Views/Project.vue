<template>
  Welcome to the project <b>{{ project.name }}</b>!
</template>

<script>
  import Process from '../Processes/GetProject'

  export default {
    data: function () {
      return {
        project: {}
      }
    },
    ready: function () {
      Process(this.$route.params.project).then((json) => {
        this.project = json.project
      })
    },
    methods: function () {

    }
  }
</script>
