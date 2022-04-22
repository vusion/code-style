<template>
  <article
    v-if="abc"
    :class="$style.root"
    disabled
    style="width: 100%"
    @click="test"
  >
    <slot></slot>
    <div v-if="foo"></div>
  </article>
</template>

<script>
export default {
    name: 'UArticle',
    methods: {
        test(e) {
            switch (e) {
                case 'abc':
                    break;
                case 'ddd':
                    break;
                default:
                    return 1;
            }

            return 0;
        },
    },
};
</script>

<style module>
.root {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  width: 960px;
}
</style>
