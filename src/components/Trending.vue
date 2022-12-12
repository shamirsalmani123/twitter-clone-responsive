<template>
  <div 
    class="
    w-1/3 
    h-full 
    border-l 
    border-lighter 
    py-2 
    px-4 
    overflow-y-scroll
    md:block
    hidden
    relative
  ">
    <!-- Search Input -->
    <input 
      class="
      w-full 
      rounded-full 
      pl-10 p-2 
      bg-lighter 
      text-sm"
      placeholder="Search Twitter"
    />
    <i class="fas fa-search absolute left-0 top-0 mt-5 ml-10 text-sm text-light focus:border-lightblue"></i>

    <!-- Trending Card -->
    <div 
      class="
      w-full
      rounded-lg
      bg-lightest
      my-4"
    >
      <div 
        class="
        flex
        items-center
        justify-between
        p-3
        "
      >
        <p class="text-xl font-bold">What's happening</p>
      </div>
      <button 
        class="
        w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
        v-for="trending in allTrends"
        :key="trending.title"
      >
        <div>
          <p class="text-sm text-left leading-tight text-dark">
            {{ trending.top }}
          </p>
          <p class="font-bold text-left leading-tight">
            {{ trending.title }}
          </p>
          <p class="text-left leading-tight text-dark">
            {{ trending.bottom }}
          </p>
        </div>
      </button>

      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show more
      </button>
    </div>

    <Whotofollow />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Whotofollow from './Whotofollow.vue';
export default {
  name: "Trending",
  components: {
    Whotofollow
  },
  computed: mapGetters(['allTrends', 'allFriends'])
}
</script>

<style scoped>

</style>