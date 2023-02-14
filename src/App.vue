<template>
  <v-app>
    <appBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import appBar from '@/components/core/appBar/index.vue'
export default {
  name: 'App',
  components: {appBar},
  data: () => ({
    //
  }),
}
</script>
