<template>
  <Layout>
    <div class="card flex justify-center">
      <FloatLabel>
        <InputText id="over_label" v-model="value1" />
        <label for="over_label">Over Label</label>
      </FloatLabel>
      <Button label="Submit" />
    </div>

    <div class="no-result">
      <strong>No item layout...</strong>
    </div>

    <template>
      <div class="task-container">
        <div class="card-task">
          <InputText type="checkbox" class="card-task_checkbox" />

          <strong class="card-task_name"></strong>

          <button type="button" class="card-task_button">x</button>
        </div>
      </div>
    </template>

    <div class="loading-container">
      <strong>Loading...</strong>
    </div>
  </Layout>
</template>
<script setup>
import Layout from "./layouts/Default.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/FloatLabel";
import { ref } from "vue";

const value = ref(null);
</script>
