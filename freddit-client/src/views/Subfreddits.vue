<template>

  <aside class="menu">
    <p class="menu-label">
        SUBFREDDITS
  </p>
  
  <ul class="menu-list">
    <li v-for="subfreddit in subfreddits" :key="subfreddit.id">
         <router-link 
         :to="{name:'subfreddit', params: { name: subfreddit.name } }">
             {{subfreddit.name}}</router-link>
        </li>
    </ul>
  
</aside>


</template>

<script>


import { mapState, mapActions } from 'vuex';
export default {
    mounted(){
        this.init();
    },
    computed: mapState('subfreddits', ['subfreddits']),
    methods: mapActions('subfreddits', ['init']),
};




</script>