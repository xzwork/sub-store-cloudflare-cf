<template>
  <div class="script-action">
    <template v-if="metadata">
      <p class="script-description">{{ localized(metadata.description, metadata.descriptionZh) }}</p>
      <p class="script-compatibility">
        {{ metadata.compatibility === 'free' ? $t('editorPage.subConfig.actions.script.freeVerified') : $t('editorPage.subConfig.actions.script.personal') }}
      </p>
      <nut-form>
        <nut-form-item v-for="parameter in metadata.parameters" :key="parameter.key">
          <p class="options-label">{{ localized(parameter.label, parameter.labelZh) }}</p>
          <nut-checkbox
            v-if="parameter.type === 'boolean'"
            :model-value="Boolean(argumentsValue[parameter.key])"
            @update:model-value="value => setArgument(parameter, value)"
          >
            {{ Boolean(argumentsValue[parameter.key]) ? $t('editorPage.subConfig.actions.enable') : $t('editorPage.subConfig.actions.disable') }}
          </nut-checkbox>
          <nut-textarea
            v-else-if="parameter.type === 'string-list'"
            :model-value="formatList(argumentsValue[parameter.key])"
            :placeholder="parameter.placeholder || ''"
            :autosize="{ minHeight: 48, maxHeight: 120 }"
            @update:model-value="value => setArgument(parameter, value)"
          />
          <nut-input
            v-else
            :model-value="String(argumentsValue[parameter.key] ?? '')"
            :type="parameter.type === 'number' ? 'number' : 'text'"
            :placeholder="parameter.placeholder || ''"
            @update:model-value="value => setArgument(parameter, value)"
          />
        </nut-form-item>
      </nut-form>
    </template>
    <p v-else class="script-unavailable">{{ $t('editorPage.subConfig.actions.script.unavailable') }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, ref } from 'vue';
import { useCloudflareApi } from '@/api/app';
import { useI18n } from 'vue-i18n';

type Parameter = {
  key: string;
  label: string;
  labelZh?: string;
  type: 'string' | 'number' | 'boolean' | 'string-list';
  default?: unknown;
  placeholder?: string;
};
type Metadata = {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  descriptionZh?: string;
  kind: 'filter' | 'operator';
  compatibility: 'free' | 'personal';
  parameters: Parameter[];
};

const { id } = defineProps<{ id: string }>();
const { locale } = useI18n();
const form = inject<any>('form');
const scripts = ref<Metadata[]>([]);
const item = computed(() => form?.process?.find(process => process.id === id));
const argumentsValue = computed<Record<string, unknown>>(() => {
  if (!item.value.args || typeof item.value.args !== 'object') item.value.args = {};
  if (!item.value.args.arguments || typeof item.value.args.arguments !== 'object') item.value.args.arguments = {};
  return item.value.args.arguments;
});
const metadata = computed(() => scripts.value.find(script => script.id === item.value?.args?.scriptId));

onMounted(async () => {
  const response = await useCloudflareApi().getScripts();
  const payload: any = response?.data;
  scripts.value = Array.isArray(payload?.data) ? payload.data : [];
  for (const parameter of metadata.value?.parameters || []) {
    if (argumentsValue.value[parameter.key] === undefined && parameter.default !== undefined) {
      argumentsValue.value[parameter.key] = parameter.default;
    }
  }
});

const setArgument = (parameter: Parameter, value: unknown) => {
  if (parameter.type === 'number') {
    const number = Number(value);
    argumentsValue.value[parameter.key] = Number.isFinite(number) ? number : parameter.default;
  } else if (parameter.type === 'string-list') {
    argumentsValue.value[parameter.key] = String(value || '').split(/\r?\n/).map(item => item.trim()).filter(Boolean);
  } else {
    argumentsValue.value[parameter.key] = value;
  }
};

const formatList = (value: unknown) => Array.isArray(value) ? value.join('\n') : '';
const localized = (english: string, chinese?: string) => locale.value.startsWith('zh') && chinese ? chinese : english;
</script>

<style lang="scss" scoped>
.script-action {
  width: 100%;
}

.script-description,
.script-compatibility,
.script-unavailable {
  color: var(--comment-text-color);
  font-size: 12px;
  line-height: 1.5;
  margin: 0 0 8px;
}

.script-compatibility {
  color: var(--primary-color);
}

.options-label {
  color: var(--second-text-color);
  font-size: 12px;
  margin-right: 12px;
}
</style>
