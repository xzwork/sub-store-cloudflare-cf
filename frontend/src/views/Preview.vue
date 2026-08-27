<template>
  <Teleport to="#app" :disabled="!!url">
    <div
      class="compare-page-wrapper"
      :class="{ 'compare-page-wrapper-overlay': !url }"
      :style="{ height: url ? 'calc(100vh - 80px)' : '100vh' }"
    >
      <header class="compare-page-header" :class="{ 'preview-popup-header': !url }">
        <template v-if="url">
          <h1>
            <span class="title" @click="copyUrl"><font-awesome-icon class="copy" icon="fa-solid fa-clone" @click="copyUrl" /><span class="titleText">{{ t("comparePage.subscriptionPreviewCopyLabel") }}</span></span>
            <span class="displayName">
              <a class="url" :href="url" target="_blank">{{ url }}</a>
            </span>
          </h1>
        </template>
        <template v-else>
          <div class="btn-groups preview-leading">
            <button type="button" class="btn close" @click="clickClose">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
            <button v-if="showRefresh" type="button" class="btn refresh" @click="emit('refresh')">
              <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
            </button>
          </div>
          <h1 class="preview-popup-title">{{ $t(`comparePage.title`) }}</h1>
          <div class="btn-groups preview-trailing" />
        </template>
      </header>
      <cmView :isReadOnly="false" id="subscriptionPreview" />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { computed, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useClipboard } from "@vueuse/core";
import useV3Clipboard from "vue-clipboard3";
import { useAppNotifyStore } from "@/store/appNotify";
import cmView from "@/views/editCode/cmView.vue";
import { useCodeStore } from "@/store/codeStore";
import { useRoute } from 'vue-router';

const cmStore = useCodeStore();
const { copy, isSupported } = useClipboard();
const { toClipboard: copyFallback } = useV3Clipboard();
const { showNotify } = useAppNotifyStore();

const { t } = useI18n();

const route = useRoute();
const { url } = route.query as { url: string };

watchEffect(async () => {
  if (url) {
    try {
      cmStore.setEditCode('subscriptionPreview', 'Loading...')
      const response = await axios.get(url as string, {
        responseType: 'text',
        transformResponse: [(data) => data],
      })
      cmStore.setEditCode('subscriptionPreview', response.data || '')
    } catch (error) {
      let data = error.response?.data
      if (data) {
        try {
          data = JSON.stringify(JSON.parse(error.response?.data), null, 2)
        } catch (e) {
          
        }
      }
      console.error('Error fetching URL:', error, data)
      cmStore.setEditCode('subscriptionPreview', `Error: ${
      error.response ? `${error.response.status} ${error.response.statusText}\n\n${data}` : error.message
      }`)
      showNotify({ title: t("comparePage.subscriptionPreviewLoadFailed", { e: error.message }) })
    }
  }
  if (route.query.name) {
    document.title = `${route.query.name} - Sub Store`
  }
})

const props = defineProps<{
  previewData: any;
  name: string;
  showRefresh?: boolean;
}>(); 

const showRefresh = computed(() => props.showRefresh !== false);

const emit = defineEmits(["closePreview", "refresh"]);

const displayName = computed(() => {
  if(route.query.name) return route.query.name
  return props.name;
});

watch(() => props.previewData?.processed, (val) => {
  if (!url && val != null) {
    cmStore.setEditCode('subscriptionPreview', val)
  }
}, { immediate: true });

 
const clickClose = () => {
  emit("closePreview");
};
const copyUrl = async () => {
  if (isSupported) {
    await copy(url);
  } else {
    await copyFallback(url);
  }
  showNotify({ title: t("comparePage.subscriptionPreviewCopied", { url }) });
};
</script>

<style lang="scss" scoped>
.compare-page-header {
  padding: env(safe-area-inset-top) var(--safe-area-side) 0;
  position: sticky;
  top: 0;
  z-index: 19;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  min-height: var(--compare-header-offset);
  box-sizing: border-box;
  border-bottom: 1px solid;
  color: var(--primary-text-color);
  background: var(--background-color);
  border-color: var(--divider-color);
  width: 100%;

  &.preview-popup-header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0;
  }

  .title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    cursor: pointer;
    min-width: 0;

    .titleText {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .displayName {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    overflow: hidden;
    flex: 1;
    .displayNameText,
    .url {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .displayNameText,
    .url {
      display: block;
    }
    > svg {
      flex-shrink: 0;
    }
    .copy {
      cursor: pointer;
      font-size: 16px;
      flex-shrink: 0;
    }
    .url {
      text-decoration: underline;
    }
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
    margin: 0;
    font-size: 20px;
    line-height: 1;
    font-weight: 500;

    > svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    span {
      font-size: 14px;
      color: var(--second-text-color);

      > svg {
        color: var(--comment-text-color);
      }
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    padding: 8px;
    color: var(--lowest-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    &.refresh {
      font-size: 18px;
    }
  }
  .btn-groups {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;
  }
}

.compare-page-header .preview-leading {
  gap: 0;
  justify-content: flex-start;
}

.compare-page-header .preview-trailing {
  grid-column: 3;
  justify-self: end;
  gap: 0;
  justify-content: flex-end;
}

.compare-page-header .preview-leading button,
.compare-page-header .preview-trailing button {
  width: 32px;
  height: 32px;
  padding: 0;
  color: var(--icon-nav-bar-right);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :deep(svg) {
    width: 14px;
    height: 14px;
    font-size: 14px;
  }
}

.compare-page-header .preview-popup-title {
  grid-column: 2;
  justify-self: center;
  display: block;
  flex: none;
  margin: 0;
  min-width: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  color: var(--primary-text-color);
  text-align: center;
  overflow: hidden;
}

.compare-page-wrapper {
  --compare-header-height: 56px;
  --compare-header-offset: calc(var(--compare-header-height) + env(safe-area-inset-top));
  width: 100%;
  height: 100vh;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-color);
  .cmviewRef {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .compare-page-header,
    .cmviewRef {
      width: 85%;
      max-width: 800px;
    }
  }
  
  @media screen and (min-width: 900px) {
    .compare-page-header,
    .cmviewRef {
      width: 80%;
      max-width: 900px;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .compare-page-header,
    .cmviewRef {
      width: 75%;
      max-width: 1000px;
    }
  }
}

.compare-page-wrapper-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
}

</style>
