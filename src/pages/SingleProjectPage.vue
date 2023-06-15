<script>
import axios from 'axios';


export default {
    name: "SinglePostPage",
    data() {
        return {
            
            project: null,
           
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8007/api/projects/${slug}`).then((resp) => {
            
                this.project = resp.data.results
                console.log(this.project);

        })
    }
}
</script>

<template>
    <section class="container">
        <router-link :to="{ name: 'projects' }" class="btn btn-success mb-3">Back</router-link>
        <div v-if="project">
            <h2>{{ project.title }}</h2>
            
            <div class="types my-4">
                <span v-for="(type, index) in project.types">{{ type.name }} </span>
            </div>
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