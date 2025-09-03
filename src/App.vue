<template>
  <Layout>
    <div class=" mt-3 card flex items-center">
      <FloatLabel>
        <InputText id="over_label" size="small" v-model="value1" />
        <label for="over_label">Add new task</label>
      </FloatLabel>
      <Button label="Create task" />
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
