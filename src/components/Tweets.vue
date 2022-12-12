<template>
  <div 
    class="
    w-full
    md:w-1/2 
    h-full
    overflow-y-scroll"
  >
    <div
      class="
      px-5
      py-3
      border-b
      border-lighter
      flex
      items-center
      justify-between"
    >
      <h1 class="text-xl font-bold">Home</h1>
      <i class="fa fa-star text-xl text-blue"></i>
    </div>
    <div 
      class="
      px-5
      py-3
      border-b
      border-lighter
      flex"
    >
      <div>
        <img
          src="profile.jpg"
          class="w-12 h-12 rounded-full border border-lighter" 
        />
      </div>
      <form 
        v-on:submit.prevent = "addNewTweet"
        action=""
        class="
        w-full
        px-4
        relative"
      >
        <textarea
          v-model="Tweet.content" 
          placeholder="What's happening?" 
          class="w-full h-24 mt-3 pb-3 focus:outline-none"
        />
        <div class="flex items-center">
          <i class="text-lg text-blue mr-6 far fa-image"></i>
          <i class="text-lg text-blue mr-6 fa fa-film"></i>
          <i class="text-lg text-blue mr-6 far fa-chart-bar"></i>
          <i class="text-lg text-blue mr-6 far fa-smile"></i>
        </div>
        <button
          type="submit"
          class="
          h-10 
          px-4 
          text-white 
          font-semibold 
          bg-blue 
          hover:bg-darkblue 
          focus:outline-none
          rounded-full
          absolute
          bottom-0
          right-0"
        >
          Tweet
        </button>
      </form>
    </div>

    <div class="flex flex-col-reverse">
        <div v-for="tweet in allTweets" :key="tweet.content" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img src="profile.jpg" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Sameer Salmani </p>
              <p class="text-sm text-dark ml-2"> @sameeer_salmani </p>
              <p class="text-sm text-dark ml-2"> 1 sec </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div v-for="follow in allFollowings" :key="follow.time" class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img
          :src="follow.src" 
          class="h-12 w-12 rounded-full flex-none"
        />
      </div>
      <div class="w-full">
        <div class="w-full flex items-center">
          <p class="font-semibold">
            {{follow.name}}
          </p>
          <p class="text-sm text-dark ml-2">
            {{follow.handle}}
          </p>
          <p class="text-sm text-dark ml-2">
            {{follow.time}}
          </p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{ follow.tweet }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center">
            <i class="mr-3 far fa-comment"></i>
            <p>{{ follow.comments }}</p>
          </div>
          <div class="flex items-center">
            <i class="mr-3 fas fa-retweet"></i>
            <p>{{ follow.retweets }}</p>
          </div>
          <div class="flex items-center">
            <i class="mr-3 fas fa-heart"></i>
            <p>{{ follow.likes }}</p>
          </div>
          <div class="flex items-center">
            <i class="mr-3 fas fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Tweets",
  computed: mapGetters(["allFollowings", "allTweets", "Tweet"]),
  methods: {
    addNewTweet() {
      const newTweet = {
        content: this.Tweet.content
      };
      this.allTweets.push(newTweet)
      this.Tweet.content = ""
    },
  }
}
</script>

<style scoped>

</style>