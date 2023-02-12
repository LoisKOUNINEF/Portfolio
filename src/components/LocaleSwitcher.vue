<template>
  <select v-model="$i18n.locale">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ localesFlag[i] }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { 
      locales: ["fr", "en"],
      localesFlag: ["🇫🇷", "🇬🇧"]
     };
  }
};
</script>

<style scoped>

  select {
    background-color: var(--text-color);
    color: var(--background-color);
    height: 50%;
    border-radius: 6em;
  }
</style>