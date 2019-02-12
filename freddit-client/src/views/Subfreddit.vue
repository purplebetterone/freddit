<template>
  <section>

  <h1>{{subfreddit.name}}</h1>
  <form @submit.prevent="onCreatePost()">
    <b-field label="Title">
      <b-input v-model="post.title" required></b-input>
      </b-field>
      <b-field label="Description">
      <b-input type="textarea" v-model="post.description"></b-input>
      </b-field>
      <b-field label="URL">
      <b-input v-model="post.URL" type="url"></b-input>
      </b-field>
      <button class="button is-success">Add Post</button>
  </form>
  </section>
    
</template>

<script>


import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
      post: {
        title: '',
        description: '',
        URL: '',
      }
    }),
    mounted(){
        //this.init();
        this.initSubfreddit(this.$route.params.name);
    },
    computed: {
      ...mapState('subfreddit', ['posts']),
      ...mapGetters('subfreddit', ['subfreddit'])
    },
    methods: {
     ...mapActions('subfreddit', ['createPost', 'initSubfreddit', 'initPosts']),
     async onCreatePost() {
       if (this.post.title && (this.post.description || this.post.URL)) {
         await this.createPost(this.post);
       }
     }
  }, 
};
</script>