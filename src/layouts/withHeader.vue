<template>
    <div>
        <TheSidebar1 />
        <div>
            Header
        </div>
        <div>
            <slot></slot>
        </div>
    </div>

</template>
<script lang="ts" setup>
import TheSidebar1 from '../components/TheSidebar1.vue';

</script>
<style>
</style>