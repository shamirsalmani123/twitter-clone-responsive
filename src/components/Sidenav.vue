<template>
  <div 
    class="
    flex 
    flex-col
    justify-between
    lg:w-1/5
    border-r
    border-lighter
    px-2
    lg:px-6
    py-4
  ">
    <div>
      <button 
        class="
        h-12
        w-12
        hover:bg-lightblue
        text-3xl 
        text-blue
        rounded-full
      ">
        <i class="fab fa-twitter"></i>
      </button>
      <!-- Tabs -->
      <div>
        <button 
          v-for="tab in allTabs"
          :key="tab.id"
          @click="changeRoute(tab.id)"
          :class="`
          flex
          items-center
          my-2
          py-2
          px-4
          rounded-full
          mr-auto
          hover:text-blue
          hover:bg-lightblue
          ${GetTab === tab.id ? 'text-blue' :''}
        `">
          <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
          <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
        </button>
      </div>
      <button class="
        text-white
        bg-blue
        rounded-full
        font-semibold
        focus:outline-none
        w-12
        h-12
        lg:h-auto
        lg:w-full
        p-3
        hover:bg-darkblue
      ">
        <p class="hidden lg:block">Tweet</p> 
        <i class="fas fa-plus lg:hidden"></i>
      </button>
    </div>

    <div class="lg:w-full ">
      <button class="flex items-center w-full hover:bg-lightblue rounded-full p-2">
        <img 
          src="profile.jpg"
          class="w-10 h-10 rounded-full border border-lighter"
        />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-bold leading-tight">Sameer Salmani</p>
          <p class="text-sm text-gray-500 leading-tight">@sameeer_salmani</p>
        </div>
        <!-- <i class="hidden lg:block fas fa-angle-down ml-auto text-lg "></i> -->
      </button>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Sidenav",
  computed: mapGetters(['allTabs', 'GetTab']),
  methods: {
    changeRoute(id) {
      this.$store.dispatch('changeRoute', id)
    }
  }
}
</script>

style