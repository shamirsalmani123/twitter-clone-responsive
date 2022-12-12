import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs: [
      {
        icon: "fa-regular fa-house",
        title: "Home",
        id: "home"
      },
      {
        icon: "fas fa-hashtag",
        title: "Explore",
        id: "explore"
      },
      {
        icon: "fa-regular fa-bell",
        title: "Notifications",
        id: "notification"
      },
      {
        icon: "fa-regular fa-envelope",
        title: "Messages",
        id: "messages"
      },
      {
        icon: "fa-regular fa-bookmark",
        title: "Bookmarks",
        id: "bookmarks"
      },
      {
        icon: "fa-regular fa-clipboard-list",
        title: "Lists",
        id: "lists"
      },
      {
        icon: "fa-regular fa-user",
        title: "Profile",
        id: "profile"
      },
      {
        icon: "fa-regular fa-circle-info",
        title: "More",
        id: "more"
      },
    ],

    Trending: [
      {
        top: "Trending in Tx",
        title: "Gigi",
        bottom: "Trending with: Rip Gigi"
      },
      {
        top: "Trending in Tx",
        title: "Gigi",
        bottom: "Trending with: Rip Gigi"
      },
      {
        top: "Trending in Tx",
        title: "Gigi",
        bottom: "Trending with: Rip Gigi"
      },
      {
        top: "Trending in Tx",
        title: "Gigi",
        bottom: "Trending with: Rip Gigi"
      },
      {
        top: "Trending in Tx",
        title: "Gigi",
        bottom: "Trending with: Rip Gigi"
      },
    ],

    Friends: [
      {
        src: "profile.jpg",
        name: "Mukul Jangra",
        handle: "@Itachi_2021"
      },
      {
        src: "profile.jpg",
        name: "Mukul Jangra",
        handle: "@Itachi_2021"
      },
      {
        src: "profile.jpg",
        name: "Mukul Jangra",
        handle: "@Itachi_2021"
      },
    ],

    Followings: [
      {
        src: "profile.jpg",
        name: "Elon Musk",
        handle: "@elon_tesla",
        time: "20 min",
        tweet: "Next I'm going to buy Disney and save Childhood",
        comments: "1,000",
        retweets: "550",
        likes: "27,878"
      },
      {
        src: "profile.jpg",
        name: "Elon Musk",
        handle: "@elon_tesla",
        time: "20 min",
        tweet: "Next I'm going to buy Disney and save Childhood",
        comments: "1,000",
        retweets: "550",
        likes: "27,878"
      },
      {
        src: "profile.jpg",
        name: "Elon Musk",
        handle: "@elon_tesla",
        time: "20 min",
        tweet: "Next I'm going to buy Disney and save Childhood",
        comments: "1,000",
        retweets: "550",
        likes: "27,878"
      },
    ],
    Tweets: [
      {content: "This is a tweet"}
    ],
    Tweet: [
      {content: ""}
    ],
    Tab: "home"
    
  },
  getters: {
    allTabs: (state) => state.tabs,
    GetTab: (state) => state.Tab,
    allTrends: (state) => state.Trending,
    allFriends: (state) => state.Friends,
    allFollowings: (state) => state.Followings,
    allTweets: (state) => state.Tweets,
    Tweet: (state) => state.Tweet
  },
  mutations: {
    CHANGE_ROUTE(state, payload) {
      const index = state.tabs.find((search) => search.id == payload)
      if(index !== null) {
        state.Tab = index.id
      }
    }

  },
  actions: {
    changeRoute: ({commit}, payload) => commit('CHANGE_ROUTE', payload)
  },
  modules: {
  }
})
