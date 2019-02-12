<template>

  <h1>{{$route.params.name}}</h1>
    
  </template>

<script>


import { mapState, mapActions } from 'vuex';
export default {
    mounted(){
        //this.init();
    },
    computed: mapState('subfreddits', ['subfreddits']),
    methods: mapActions('subfreddits', ['init']),
};




</script>