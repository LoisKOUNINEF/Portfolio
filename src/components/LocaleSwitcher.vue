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
    background: var(--background-color);
    color: var(--text-color);
    height: 50%;
    border-radius: 6em;
    transition: var(--transition);
  }

  select:hover {
    background: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    select {
      border-radius: 3em;
    }
  }
</style>