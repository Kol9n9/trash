<template>
    <div>
        <div style="background-color: white;">
            <TheSidebar2 />
        </div>
        <div>
            No Header
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import TheSidebar2 from '../components/TheSidebar2.vue';

</script>
<style>
</style>