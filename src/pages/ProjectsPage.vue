<script>
import axios from 'axios';
import Pagination from '../components/Pagination.vue';

export default {
    name: "ProjectsPage",


    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: 0,

        };
    },
    components: {
        Pagination
    },
    mounted() {
        this.getProject();
    },
    methods: {
        getProject(pageNumber = 1) {

            const params = {
                page: pageNumber,
            }
            axios.get('http://127.0.0.1:8007/api/projects', { params }).then(resp => {
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
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
    <!-- pagination -->
    <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePage="getProject" />
</template>

<style lang="scss" scoped></style>
