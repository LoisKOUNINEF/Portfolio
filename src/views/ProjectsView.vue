<template>
  <MainCard />
  <ProjectsCard />
</template>

<script>

import ProjectsCard from '@/components/ProjectsCard.vue'
import MainCard from '@/components/MainCard.vue'

export default {
  name: 'ResumeView',
  components: {
    MainCard,
    ProjectsCard
  }
}
</script>
