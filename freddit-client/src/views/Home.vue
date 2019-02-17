<template>
  <div class="home">


  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'home',
  methods: mapActions('auth', ['login']),
};
</script>
