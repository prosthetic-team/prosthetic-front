<template>
    <div class="relative py-2">
        <input :type="type" :id="id"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " v-model="inputValue" @focus="isFocused = true" @blur="handleBlur" />
        <label :for="id"
            class="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:translate-x-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
            :class="{
                'peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4': isFocused || inputValue.length > 0
            }">
            {{ label }}
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    id: {
        type: String,
        required: true,
    },
});

const inputValue = ref('');
const isFocused = ref(false);

const handleBlur = () => {
    if (inputValue.value.length === 0) {
        isFocused.value = false;
    }
};
</script>

<style scoped></style>
