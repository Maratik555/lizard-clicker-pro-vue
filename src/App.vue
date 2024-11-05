<template>
  <main class="game" v-if="loaded">
    <div class="page">
      <RouterView />
    </div>
    <TheMenu />
  </main>
</template>

<script setup>
import {useTelegram} from '@/services/telegram.js';
import {useAppStore} from '@/stores/app.js';
import {ref, onMounted} from 'vue';
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'

const loaded = ref(false);
const {tg} = useTelegram();
const app = useAppStore();

const urlParams = new URLSearchParams(window.location.search);


app.init(urlParams.get('ref')).then(() => loaded.value = true);

onMounted(() => {
  tg.ready()
  tg.expand()
})

</script>
