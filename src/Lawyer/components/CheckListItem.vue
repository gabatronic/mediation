<script lang="ts" setup>
import CheckIcon from '@/components/Icons/CheckIcon.vue';
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Amplíe su Cartera de Servicios'
    },
    description: {
        type: String,
        default: 'Ofrezca medi'         
    }})
</script>
<template>
    <div class="flex flex-col gap-0">
        <div class="inline-flex">
            <CheckIcon class="w-6 stroke-black "/>
            <span class="font-bold ml-1">{{ props.title }}</span>
                </div>
        <p class="text-gray-500 ml-7 ">{{  props.description }}</p>
    </div>  
</template>