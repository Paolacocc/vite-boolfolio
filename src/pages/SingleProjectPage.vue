<script>
import axios from 'axios';


export default {
    name: "SinglePostPage",
    data() {
        return {
            //salviamo i dati del nostro project
            project: null,
           
        }
    },
    mounted() {
        //possiamo accedere a $route in tutto il programma e ci dice precisamente dove ci troviamo, possiamo vedere il parametro della rotta che sto utilizzando
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8007/api/projects/${slug}`).then((resp) => {
            //status 200
                this.project = resp.data.results
                console.log(resp);
            //error
        })
    }
}
</script>

<template>
    <section class="container">
        <router-link :to="{ name: 'projects' }" class="btn btn-success mb-3">Back</router-link>
        <!-- controllo per vedere se il prject esiste -->
        <div v-if="project">
            <h2>{{ project.title }}</h2>
            
            <div class="types my-4">
                <span >{{ project.type.name }} </span>
            </div>
            <p v-if="project.technologies.length > 0">
                <span class="me-1" v-for="technology in project.technologies">#{{ technology.name }} </span>
            </p>
            <p v-else>{{ "no technology found" }}</p>
            <p>
                {{ project.content }}
            </p>
            <p>
                {{ project.description }}
            </p>
        </div>
        
    </section>
</template>

<style lang="scss" scoped></style>