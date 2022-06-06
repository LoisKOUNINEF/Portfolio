<template>
  <HeaderCard />
  <NavbarCard />
  <ProjectsCard />
</template>

<script>

  import ProjectsCard from '@/components/ProjectsCard.vue'
  import NavbarCard from '@/components/NavbarCard.vue'
  import HeaderCard from '@/components/HeaderCard.vue'

  export default {
    name: 'ProjectView',
    components: {
      HeaderCard,
      NavbarCard,
      ProjectsCard
    }
  }
</script>
