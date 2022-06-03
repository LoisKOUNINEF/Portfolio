<template>
  <MainCard />
  <ResumeCard />
</template>

<script>
import MainCard from '@/components/MainCard.vue'
import ResumeCard from '@/components/ResumeCard.vue'

export default {
  name: 'ResumeView',
  components: {
    MainCard,
    ResumeCard
  }
}
</script>
