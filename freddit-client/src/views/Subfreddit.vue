<template>
  <section>

 <button @click="showForm=!showForm" class="button is-primary">Toggle Form</button>
  <form v-if="showForm" @submit.prevent="onCreatePost()">
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

  <div class="posts columns  is-multiline">
    <div class="column is-4" v-for="post in posts" :key="post.id">
      <div class="card" >
  <div class="card-image"  v-if="isImage(post.URL)">
    <figure>
      <img :src="post.URL" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="loadedUsersById[post.user_id].image" alt="placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4" v-if="!post.URL">{{post.title}}</p>
        <p class="title is-4" v-if="post.URL"><a :href="post.URL" target="_blank">
          {{post.title}}</a></p>
        <p class="subtitle is-6">{{loadedUsersById[post.user_id].name}}</p>
      </div>
    </div>
    </div>

    <div class="content">
      {{post.description}}
      <br>
      <time datetime="2016-1-1">{{post.created_at}}</time>
    </div>
  </div>

</div>

  </div>


  </section>

</template>

<script>


import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    showForm: false,
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  mounted() {
    // this.init();
    this.initUsers();
    this.initSubfreddit(this.$route.params.name);
  },
  watch: {
    '$route.params.name': function () {
      this.initSubfreddit(this.$route.params.name);
    },
    subfreddit() {
      if (this.subfreddit.id) {
        this.initPosts(this.subfreddit.id);
      }
    },
  },
  computed: {
    ...mapState('subfreddit', ['posts']),
    ...mapState('auth', ['isLoggedIn', 'user']),
    ...mapGetters({
      subfreddit: 'subfreddit/subfreddit',
      usersById: 'users/usersById',  
    }),
    loadedUsersById(){
      return this.posts.reduce((byId, post)=> {
        byId[post.user_id] = this.usersById[post.user_id] || {
          name: 'Loading...',
          image: 'https://bulma.io/images/placeholders/48X48.png'
        };
        return byId;
      }, {})
    }
  },
  methods: {
    isImage(url) {
      return url.match(/(png|jpg|jpeg|gif)$/);
    },
    ...mapActions('subfreddit', ['createPost', 'initSubfreddit', 'initPosts']),
    ...mapActions('users', {initUsers: 'init'}),

    async onCreatePost() {
      if (this.post.title && (this.post.description || this.post.URL)) {
         this.createPost(this.post);
          this.post = {
            title: '',
            description: '',
            URL: '',
            };
            this.showForm = false;
      }
    },
  },
};
</script>

<style>
.posts {
  margin-top: 2em;
}
.card{
  height: 100%;
  margin: 1%;
  border-radius: 5px;
}
.card img {
  border-radius: 5px;
}
</style>
