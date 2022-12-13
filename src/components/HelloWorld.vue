<template>
    <PrimeAccordion :toggleable="true" :active-index="0" class="text-left">
        <PrimeAccordionTab>
            <template #header>
                <span>Header</span>
            </template>
            <div>
                <h2>Step</h2>
                <ol>
                    <li>click toggle button</li>
                    <li>click header twice</li>
                    <li>click toggle button again</li>
                </ol>
                <button @click="flag = !flag">toggle</button>
                <!-- flag1 -->
                <div v-if="flag">{{ flag }}</div>
                <!-- flag2 -->
                <div v-if="flag">{{ flag }}</div>
                <!-- flag3 -->
                <div v-if="!flag">{{ flag }}</div>
            </div>
        </PrimeAccordionTab>
    </PrimeAccordion>
</template>
<script setup>
import { ref } from "vue";

const flag = ref(true);
</script>
