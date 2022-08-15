<template>
  <p>{{ showcount }}</p>
  <el-button @click="addBtn">增加</el-button>
</template>
<script setup lang="ts">
import { ref, computed } from "vue"
import { useStore } from "@/store/index"
const store = useStore()
const count = ref(0)
const showcount = computed(() => {
  return store.getters["getCount"]
})
const addBtn = () => {
  store.commit("setCount", ++count.value)
}
</script>

<style scoped></style>
