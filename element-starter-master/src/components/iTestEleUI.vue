
<template>
    <div class="title">
        <el-button @click="show = !show" type="primary" icon="el-icon-search">{{this.$root.name}}</el-button>
        <transition v-if="show">
            <i  class="el-icon-edit"></i>

        </transition>
        {{this.$root.name}}
        {{dname}}
    </div>
</template>

<script>
    export default{
        props: ['dname'],
        data: function(){
            return {
                show: true
            }
        },
        methods:{
            alertroot: function(){

            }
        }
    }
</script>
<style>
    .title{
        padding-left: 20px;
        border-left: 4px solid #12c;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>