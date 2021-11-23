<template>
  <div class="about">
    <h1>Event List page</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard,
  },
}
</script>
