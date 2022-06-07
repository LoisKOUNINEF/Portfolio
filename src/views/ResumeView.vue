<template>
  <HeaderCard />
  <ResumeCard />
</template>

<script>

import ResumeCard from '@/components/ResumeCard.vue'
import HeaderCard from '@/components/HeaderCard.vue'

export default {
  name: 'ResumeView',
  components: {
    HeaderCard,
    ResumeCard
  }
}
</script>


