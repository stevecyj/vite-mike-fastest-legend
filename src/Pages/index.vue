<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()
const { name } = storeToRefs(countStore)
const { setName } = countStore
</script>

<template>
  <main>
    <TheWelcome />
    <!-- <h1>{{ countStore.name }}</h1> -->
    <h1>{{ name }}</h1>
    <!-- <button @click="countStore.setName">Click it</button> -->
    <button @click="setName('Jotaro')">Click it</button>
  </main>
</template>
