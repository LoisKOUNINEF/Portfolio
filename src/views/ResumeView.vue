<template>
  <NavbarCard />
  <ResumeCard />
</template>

<script>

import ResumeCard from '@/components/ResumeCard.vue'
import NavbarCard from '@/components/NavbarCard.vue'

export default {
  name: 'ResumeView',
  components: {
    NavbarCard,
    ResumeCard
  }
}
</script>


