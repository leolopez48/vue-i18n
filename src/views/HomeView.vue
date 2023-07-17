<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { between, required } from "@/lang/i18n";

const state = ref({
    name: ''
})

const rules = {
    name: {
        required,
        between: between(1, 10)
    }
}

const v$ = useVuelidate(rules, state)

const submitForm = async () => {
    const result = await v$.value.$validate();

    console.log(result)

    if (result) {
        alert("validation passed");
    }
}
</script>

<template>
    <h1>{{ $t('homeTitle') }}</h1>

    <input v-model="v$.name.$model" className="form-control" placeholder="Insert your name.." />
    <p v-for="error of v$.name.$errors" :key="error.$uid">
        {{ error.$message }}
    </p>

    <button class="btn btn-primary btn-sm" type="button" @click="submitForm">
        Next
    </button>
</template>

<style scoped></style>