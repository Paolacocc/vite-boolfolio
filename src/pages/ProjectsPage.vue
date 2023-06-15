<script>
import axios from 'axios';

export default {
    name: "ProjectsPage",


    data() {
        return {
            projects: []

        };
    },
    mounted() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8007/api/projects').then(resp => {
                this.projects = resp.data.results;
            })
        }

    }
}
</script>

<template>
<div class="bk-main">

    <div class="container">
      <h2 class="text-center m-4">Projects list</h2>

      <div class="row row-col-4 g-4">
        <div class="col" v-for="project in projects" :key="'project.id'">
        <div class="card h-100 p-3">
          <h5>{{ project.title }}</h5>
        </div> 
      </div>
      </div>
    </div>
  </div>

  </template>

<style lang="scss" scoped></style>
