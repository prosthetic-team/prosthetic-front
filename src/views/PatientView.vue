<template>
    <ContentLayout>
        <router-link :to="'/pacientes'">
            <div class="flex items-center gap-2 mt-2 text-zinc-700">
                <Icon :icon="['fas', 'chevron-left']" />
                <h1>Vista de paciente epica</h1>
            </div>
        </router-link>
        <div class="flex items-center">
            <TitleB>Vista de paciente</TitleB>
        </div>
        <div class="bg-white h-xlgx rounded-lg">

        </div>
    </ContentLayout>
</template>

<script setup>
import ContentLayout from '@/layout/ContentLayout.vue';
import TitleB from '@/atoms/TitleB.vue';
import Icon from '@/atoms/Icon.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});

</script>