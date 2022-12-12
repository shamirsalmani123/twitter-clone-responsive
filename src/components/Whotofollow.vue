<template>
  <div 
      class="
      w-full
      rounded-lg
      bg-lightest
      my-4"
    >
      <div class="p-3">
        <p class="text-xl font-bold">Who to follow</p>
      </div>
      <button 
        v-for="friend in allFriends"
        :key="friend.src"
        class="
        w-full flex  
        hover:bg-lighter 
        p-3 
        border-t 
        border-lighter"
      >
        <img 
          :src="friend.src"
          class="w-12 h-12 rounded-full border border-lighter"
        />
        <div class="ml-4">
          <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
          <p class="text-sm text-gray-500 leading-tight">{{ friend.handle }}</p>
        </div>
        <button 
          class="
          text-sm 
          text-blue 
          py-2 
          px-4 
          rounded-full 
          border-2 
          border-blue 
          ml-auto"
        >
          Follow
        </button>
      </button>

      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show more
      </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Whotofollow",
  computed: mapGetters(["allFriends"])
}
</script>

<style scoped>

</style>