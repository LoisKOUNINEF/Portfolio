<template>
  <MainCard />
  <ProjectsCard />
</template>

<script>
import MainCard from '@/components/MainCard.vue'
import ProjectsCard from '@/components/ProjectsCard.vue'

export default {
  name: 'HomeView',
  components: {
    MainCard,
    ProjectsCard
  }
}
</script>
