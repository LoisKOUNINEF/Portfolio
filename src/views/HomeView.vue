<template>
  <HeaderCard />
  <MainCard />
</template>

<script>
import MainCard from '@/components/MainCard.vue'
import HeaderCard from '@/components/HeaderCard.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderCard,
    MainCard
  }
}
</script>
