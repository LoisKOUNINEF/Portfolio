<template>
  <NavbarCard />
  <ProjectsCard />
</template>

<script>

import ProjectsCard from '@/components/ProjectsCard.vue'
import NavbarCard from '@/components/NavbarCard.vue'

export default {
  name: 'ProjectView',
  components: {
    NavbarCard,
    ProjectsCard
  }
}
</script>
