<template>
  <div>
    <p>現在の値</p>
    <p>{{ currentValue }}</p>
    <p>名前</p>
    <p>{{ currentName }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useSampleStore } from '~/store/sampleStore';

export default defineComponent({
  name: 'SecondViewPage',
  setup() {
    const store = useSampleStore();
    const currentValue = computed((): number => store.incrementalValue);
    const currentName = computed((): string => store.name);

    return { currentValue, currentName };
  },
});
</script>
