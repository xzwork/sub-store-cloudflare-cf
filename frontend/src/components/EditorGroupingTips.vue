<template>
  <button
    type="button"
    class="editor-grouping-tips-button"
    :aria-label="t('editorPage.groupingTips.open')"
    :title="t('editorPage.groupingTips.open')"
    @click.stop="openTips"
  >
    <font-awesome-icon icon="fa-solid fa-circle-question" />
  </button>
</template>

<script setup lang="ts">
import { Dialog } from "@nutui/nutui";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const openTips = () => {
  Dialog({
    title: t("editorPage.groupingTips.title"),
    content: t("editorPage.groupingTips.content"),
    popClass: "auto-dialog",
    textAlign: "left",
    okText: "OK",
    noCancelBtn: true,
    closeOnPopstate: true,
    lockScroll: false,
  });
};
</script>
