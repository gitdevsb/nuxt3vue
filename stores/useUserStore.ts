import { defineStore } from 'pinia'
import { getUserInfo } from "~/apis/user";

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
        age: 0,
        name: ""
    }
  }),
  actions: {
     loadUserInfo() {
      try {
        const userInfo =  getUserInfo() ?? {
            age: 0,
            name: ""
        };
        this.userInfo = userInfo ;
      } catch (error) {
        console.error('获取用户信息失败:', error);
      }
    }
  },
  getters: {
    hasUserInfo: (state) => state.userInfo !== null
  }
});