<template>
    <p class="title">{{name}}</p>
</template>
<script>
    export default{
        props: ['name']
    }
</script>
<style>
    .title{
        border-left: 4px solid #12c;
    }
</style>