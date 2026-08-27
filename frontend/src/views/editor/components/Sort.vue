<template>
  <div class="editor-action-card">
    <p class="des-label">
      {{ $t(`editorPage.subConfig.nodeActions['Sort Operator'].des`) }}
    </p>
    <div class="radio-wrapper options-radio">
      <nut-radiogroup direction="horizontal" v-model="value">
        <nut-radio label="asc">
          {{ $t(`editorPage.subConfig.nodeActions['Sort Operator'].options[0]`) }}
        </nut-radio>
        <nut-radio label="desc">
          {{ $t(`editorPage.subConfig.nodeActions['Sort Operator'].options[1]`) }}
        </nut-radio>
        <nut-radio label="random">
          {{ $t(`editorPage.subConfig.nodeActions['Sort Operator'].options[2]`) }}
        </nut-radio>
      </nut-radiogroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { inject, onMounted, ref, watch } from 'vue';

  const { id } = defineProps<{
    id: string;
  }>();

  const form = inject<Sub | Collection>('form');
  const value = ref('asc');

  onMounted(() => {
    const item = form.process.find(item => item.id === id);
    if (item) {
      value.value = ['asc', 'desc', 'random'].includes(item.args) ? item.args : 'asc';
      item.args = value.value;
    }
  });

  watch(value, () => {
    const item = form.process.find(item => item.id === id);
    if (item) item.args = value.value;
  });
</script>

<style lang="scss" scoped>
  .des-label {
    font-size: 12px;
    margin-bottom: 8px;
    color: var(--comment-text-color);
  }

  .radio-wrapper.options-radio {
    justify-content: start;

    .nut-radiogroup {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
