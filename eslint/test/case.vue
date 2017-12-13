<template>
    <article :class="$style.root">
        <slot></slot>
        <div v-if="foo"></div>
    </article>
</template>

<script>
export default {
    name: 'u-article',
    methods: {
        test() {
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
