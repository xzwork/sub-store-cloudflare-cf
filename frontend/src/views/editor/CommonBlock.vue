<template>
  <div class="form-block-wrapper">
    <div class="sticky-title-wrapper">
      <div class="common-title-row">
        <div class="title" @click="toggleFold">
          <p>
            {{ $t(`editorPage.subConfig.commonOptions.label`) }}
          </p>
          <nut-icon v-if="!isFold" name="rect-down" size="12px"></nut-icon>
          <nut-icon v-else name="rect-right" size="12px"></nut-icon>
        </div>
        <EditorCommonTips />
      </div>
    </div>
    <nut-form v-if="!isFold" class="form common-options-form">
      <div class="quick-option-palette">
        <button
          v-for="option in quickOptions"
          :key="option.key"
          type="button"
          class="quick-option-chip"
          :class="{ 'quick-option-chip--active': isConfigured(option.key) }"
          @click="toggleQuickOption(option.key)"
        >
          {{ $t(`editorPage.subConfig.commonOptions${option.localePath}.label`) }}
        </button>
      </div>

      <nut-form-item
        v-for="option in configuredQuickOptions"
        :key="option.key"
        class="configured-option-item"
      >
        <p class="options-label configured-option-label">
          {{ $t(`editorPage.subConfig.commonOptions${option.localePath}.label`) }}
        </p>
        <div class="radio-wrapper options-radio configured-option-control">
          <nut-radiogroup
            direction="horizontal"
            v-model="quickArgs[option.key]"
          >
            <nut-radio
              v-for="radioOption in getRadioOptions(option)"
              :key="radioOption.value"
              :label="radioOption.value"
            >
              {{ $t(`editorPage.subConfig.commonOptions${option.localePath}.${radioOption.labelKey}`) }}
            </nut-radio>
          </nut-radiogroup>
        </div>
        <button
          type="button"
          class="quick-option-remove"
          :aria-label="$t('editorPage.subConfig.pop.deleteConfirm')"
          @click="removeQuickOption(option.key)"
        >
          <nut-icon name="mask-close" />
        </button>
      </nut-form-item>
    </nut-form>
  </div>
  <!--<div class="form-block-wrapper">-->
  <!--  <div class="sticky-title-wrapper">-->
  <!--    <p>-->
  <!--      {{ $t(`editorPage.subConfig.surgeOptions.label`) }}-->
  <!--    </p>-->
  <!--  </div>-->
  <!--  <nut-form class="form">-->
  <!--    <nut-form-item>-->
  <!--      <p class="options-label">-->
  <!--        {{ $t(`editorPage.subConfig.surgeOptions.hybrid.label`) }}-->
  <!--      </p>-->
  <!--      <div class="radio-wrapper options-radio">-->
  <!--        <nut-radiogroup-->
  <!--          direction="horizontal"-->
  <!--          v-model="options['surge-hybrid']"-->
  <!--        >-->
  <!--          <nut-radio label="DEFAULT"-->
  <!--            >{{ $t(`editorPage.subConfig.surgeOptions.hybrid.default`) }}-->
  <!--          </nut-radio>-->
  <!--          <nut-radio label="FORCE_OPEN"-->
  <!--            >{{ $t(`editorPage.subConfig.surgeOptions.hybrid.open`) }}-->
  <!--          </nut-radio>-->
  <!--          <nut-radio label="FORCE_CLOSE"-->
  <!--            >{{ $t(`editorPage.subConfig.surgeOptions.hybrid.close`) }}-->
  <!--          </nut-radio>-->
  <!--        </nut-radiogroup>-->
  <!--      </div>-->
  <!--    </nut-form-item>-->
  <!--  </nut-form>-->
  <!--</div>-->
</template>

<script lang="ts" setup>
  import EditorCommonTips from '@/components/EditorCommonTips.vue';
  import { useRoute } from 'vue-router';
  import { computed, inject, watchEffect, ref, watch } from 'vue';
  import {
    getEditorFoldState,
    getEditorIsFolded,
    setEditorFoldState,
  } from '@/utils/editorFoldState';
  const route = useRoute();
  const props = withDefaults(defineProps<{
    defaultFolded?: boolean
  }>(), {
    defaultFolded: false,
  });

  const storageKey = 'common-block-fold';

  function getFoldState() {
    return getEditorIsFolded(storageKey, route.path, props.defaultFolded);
  }
  function setFoldState(isFold) {
    setEditorFoldState(storageKey, route.path, isFold);
  }
  const isFold = ref(getFoldState());

  type QuickOptionKey =
    | 'useless'
    | 'udp'
    | 'scert'
    | 'tfo'
    | 'vmess aead';
  type QuickOptionRadio = {
    value: string;
    labelKey: string;
  };
  type QuickOption = {
    key: QuickOptionKey;
    localePath: string;
    emptyValue: string;
    defaultValue?: string;
    radioOptions?: QuickOptionRadio[];
  };

  const quickOptions: QuickOption[] = [
    {
      key: 'useless',
      localePath: '.useless',
      emptyValue: 'DISABLED',
      radioOptions: [
        { value: 'DISABLED', labelKey: 'disabled' },
        { value: 'ENABLED', labelKey: 'enabled' },
      ],
    },
    { key: 'udp', localePath: '.udp', emptyValue: 'DEFAULT' },
    { key: 'scert', localePath: '.scert', emptyValue: 'DEFAULT' },
    { key: 'tfo', localePath: '.tfo', emptyValue: 'DEFAULT' },
    { key: 'vmess aead', localePath: "['vmess aead']", emptyValue: 'DEFAULT' },
  ];
  const defaultRadioOptions: QuickOptionRadio[] = [
    { value: 'ENABLED', labelKey: 'enabled' },
    { value: 'DISABLED', labelKey: 'disabled' },
  ];
  const createDefaultQuickArgs = () => ({
    useless: 'DISABLED',
    udp: 'DEFAULT',
    scert: 'DEFAULT',
    tfo: 'DEFAULT',
    'vmess aead': 'DEFAULT',
  });

  const form = inject<Sub | Collection>('form');
  const quickSettingType = 'Quick Setting Operator';
  const getQuickSetting = () => {
    if (!Array.isArray(form.process)) {
      form.process = [];
    }

    let operator = form.process.find(item => item.type === quickSettingType);
    if (!operator) {
      form.process.unshift({
        type: quickSettingType,
        args: createDefaultQuickArgs(),
      });
      operator = form.process.find(item => item.type === quickSettingType);
    }

    return operator;
  };
  const getQuickOption = (key: QuickOptionKey) => quickOptions.find(item => item.key === key);
  const getRadioOptions = (option: QuickOption) => option.radioOptions || defaultRadioOptions;
  const ensureQuickArgs = () => {
    const quick = getQuickSetting();
    const defaults = createDefaultQuickArgs();
    if (!quick.args || typeof quick.args !== 'object') {
      quick.args = defaults;
    }

    Object.entries(defaults).forEach(([key, value]) => {
      if (!quick.args[key]) {
        quick.args[key] = value;
      }
    });

    return quick.args as Record<QuickOptionKey, string>;
  };
  const quickArgs = computed(() => ensureQuickArgs());
  ensureQuickArgs();

  const isConfigured = (key: QuickOptionKey) => {
    const option = getQuickOption(key);
    if (!option) return false;

    const value = ensureQuickArgs()[key];
    return Boolean(value) && value !== option.emptyValue;
  };
  const configuredQuickOptions = computed(() => quickOptions.filter(option => isConfigured(option.key)));
  const addQuickOption = (key: QuickOptionKey) => {
    const args = ensureQuickArgs();
    if (isConfigured(key)) return;

    args[key] = getQuickOption(key)?.defaultValue || 'ENABLED';
  };
  const removeQuickOption = (key: QuickOptionKey) => {
    const option = getQuickOption(key);
    if (!option) return;

    ensureQuickArgs()[key] = option.emptyValue;
  };
  const toggleQuickOption = (key: QuickOptionKey) => {
    if (isConfigured(key)) {
      removeQuickOption(key);
      return;
    }

    addQuickOption(key);
  };
  const toggleFold = () => {
    isFold.value = !isFold.value;
    setFoldState(isFold.value)
  };
  watch(
    () => props.defaultFolded,
    (defaultFolded) => {
      if (getEditorFoldState(storageKey, route.path) === undefined) {
        isFold.value = defaultFolded;
      }
    },
  );
  watchEffect(() => {
    ensureQuickArgs();
  });
</script>

<style lang="scss" scoped>
  .form-block-wrapper {
    .sticky-title-wrapper {
      .common-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .title {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        min-width: 0;
        cursor: pointer;
        p {
          margin-right: 6px;
        }
        :deep(.nut-icon) {
          // transform: rotate(270deg);
          font-size: 12px;
          height: 12px;
        }
      }
    }
  }
  .options-label {
    font-size: 12px;
    margin: 0 0 16px;
    color: var(--comment-text-color);
  }

  .quick-option-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 14px 16px;
  }

  .quick-option-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 30px;
    padding: 0 9px;
    border: 1px solid transparent;
    border-radius: 999px;
    background: var(--divider-color);
    color: var(--second-text-color);
    cursor: pointer;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    white-space: nowrap;

    &--active {
      border-color: var(--primary-color);
      background: transparent;
      color: var(--primary-color);
    }
  }

  .configured-option-item {
    :deep(.nut-form-item__body__slots) {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto 22px;
      align-items: center;
      column-gap: 12px;
      width: 100%;
    }
  }

  .configured-option-label {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .configured-option-control {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-self: end;
    min-width: 0;
  }

  .quick-option-remove {
    display: inline-flex;
    width: 22px;
    height: 22px;
    align-items: center;
    justify-content: center;
    justify-self: end;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--lowest-text-color);
    cursor: pointer;
    opacity: 0.72;

    &:hover {
      color: var(--danger-color);
      opacity: 1;
    }

    :deep(.nut-icon) {
      font-size: 14px;
    }
  }

  .radio-wrapper.options-radio {
    :deep(.nut-radiogroup) {
      width: auto;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    :deep(.nut-radio) {
      display: inline-flex;
      align-items: center;
      margin: 0;
      line-height: 1;
    }
  }
</style>
