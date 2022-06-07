<template>
  <HeaderCard />
  <ProjectsCard />
</template>

<script>

  import ProjectsCard from '@/components/ProjectsCard.vue'
  import HeaderCard from '@/components/HeaderCard.vue'

  export default {
    name: 'ProjectView',
    components: {
      HeaderCard,
      ProjectsCard
    }
  }
</script>
