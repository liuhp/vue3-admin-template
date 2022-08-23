<template>
  <div>
    header
    <!-- <el-switch
      v-model="themeMode"
      class="switch-theme"
      inline-prompt
      :active-icon="Sunny"
      :inactive-icon="Moon"
      active-value="auto"
      inactive-value="dark"
      @click="switchThemes"
    /> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
// import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = useDark()
const themeMode = ref()

const old = localStorage.getItem('vueuse-color-scheme') || 'dark'
onMounted(() => {
  themeMode.value = old
})

// const switchThemes = (val:string) => {
//   console.log('switchThemes', val)
//   const toggleDark = useToggle(isDark)
//   console.log(toggleDark())
// }
</script>
<style lang="scss" scoped></style>
