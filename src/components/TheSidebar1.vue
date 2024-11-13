<template>
    <div>
        <RouterLink :to="{name: 'Home'}">Home</RouterLink>
        <RouterLink :to="{name: 'Home2'}">Home2</RouterLink>
        <RouterLink :to="{name: 'About'}">About</RouterLink>
        <RouterLink :to="{name: 'Test'}">Test</RouterLink>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
a{
    margin-right: 10px;
}
</style>