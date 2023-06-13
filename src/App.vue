<script>

import axios from 'axios';

export default {
  data() {
    return {
      projects: []

    };
  },
  mounted() {
    this.getproject();
  },
  methods: {
    getProject() {
      axios.get('http://127.0.0.1:8007/api/projects').then(resp=> {
        this.projects = resp.data.results;
      })
    }
  
  }
}
</script>

<template>
  <div class="container">
    <div class="col-4">
      <div class="col" v-for="project in projects" :key="'project.id'">
      <div class="card">
        <h5>{{ project.title }}</h5>
      </div> 
    </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

</style>