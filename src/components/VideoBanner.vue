<script lang="ts" setup>
import { defineProps, h } from 'vue'
const props = defineProps({
    video: {
        type: String,
        required: true
    },
    height: {
        type: String,
        default: 'h-190'
    }
})
</script>
<template>
    
    <div class="w-full bg-black relative" :class="props.height">        
        <div class="absolute mx-auto w-full text-white bg-black/50 font-inter flex flex-col gap-10 z-10 top-0 sm:pt-20" :class="props.height">
            <slot name="content" />
        </div>
        <div class="inset-0 absolute top-0 left-0 w-full z-0" :class="props.height">
            <video autoplay loop muted class="w-full h-full object-cover">                
                <source :src="props.video" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
            
    </div>
</template>