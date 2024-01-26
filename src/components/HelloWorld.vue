<script setup lang="ts">
defineProps<{
  msg: string
}>()

const name = ref('Dio')

const { locale } = useI18n()
const handleChangeLanguage = (e: Event) => {
  const target = e.target as HTMLSelectElement | null
  if (target) {
    locale.value = target.value
  }
}
</script>

<template>
  <div class="greetings">
    <div class="card">
      <div>
        切換語言：
        <select @change="handleChangeLanguage">
          <option value="zh-TW">中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
      <p>{{ $t('edit') }} <code>components/HelloWorld.vue</code> {{ $t('__text-test-HMR__') }}</p>
    </div>
    <h1>{{ $t('edit') }}</h1>
    <h1>Hello {{ name }}</h1>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
