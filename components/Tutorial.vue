<template>
  <div>
    <p>現在の数値</p>
    <p>{{ currentValue }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>名前</p>
    <p>{{ name }}</p>
    <p>
      <input type="text" @input="setName" />
    </p>
    <nuxt-link to="/second_view">次に行く</nuxt-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useSampleStore } from '@/store/sampleStore';

export default defineComponent({
  name: 'NuxtTutorial',
  setup() {
    const store = useSampleStore();

    const currentValue = computed((): number => store.incrementalValue);

    const increment = () => {
      store.incrementalValue++;
    };

    const decrement = () => {
      store.incrementalValue--;
    };

    const name = computed((): string => store.name);

    const setName = (event: InputEvent) => {
      if (!(event instanceof HTMLInputElement)) return;
      console.log(event);
      store.name = event.value;
    };

    return {
      name,
      setName,
      increment,
      decrement,
      currentValue,
    };
  },
});
</script>
