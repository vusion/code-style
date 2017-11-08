<template>
<article :class="$style.root">
    <slot></slot>
    {{z=1?x=1}}
</article>
<div v-if.bbb="foo"></div>
</template>

<script>
export default {
    name: 'u-article',
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
