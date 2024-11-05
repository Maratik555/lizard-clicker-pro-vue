import {completeTask, fetchTasks, getOrCreaateUser, registerRef} from '@/api/app.js';
import {useTelegram} from '@/services/telegram.js';
import {useScoreStore} from '@/stores/score.js';
import {defineStore} from 'pinia';

const {user} = useTelegram();

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {},
    tasks: [],
  }),
  actions: {
    async init(ref) {
      this.user = await getOrCreaateUser();
      const score = useScoreStore();
      score.setScore(this.user.score);

      if(ref && +ref !== +this.user.telegram) {
          await registerRef(user?.first_name ?? 'User God', ref);
    }
  },
    async completeTask(task) {
      await completeTask(this.user, task);
    },

    async fetchTasks() {
      this.tasks = await fetchTasks();
    }
}
});