<template>
  <div id="app" class="flex container h-screen w-full ml-10">
    <!-- side nav -->
    <Sidenav  />
    
    <!-- Tweets -->
    <Tweets />

    <!-- Trending -->
    <Trending />

    <!-- Who To Follow -->
    <Whotofollow />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidenav from './components/Sidenav.vue';
import Tweets from './components/Tweets.vue';
import Trending from './components/Trending.vue';

export default {
  name: 'app',
  computed: mapGetters(['allTabs']),
  components: {
    Sidenav,
    Tweets,
    Trending,
  },
  methods: {
    addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push (newTweet)
    }
  }
}
</script>
