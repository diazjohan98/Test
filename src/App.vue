<template>
  <Layout>
    <!-- Input para nueva tarea -->
    <div class="mt-5 card flex justify-center items-center gap-7">
      <FloatLabel>
        <InputText id="over_label" size="small" v-model="taskName" />
        <label for="over_label">Add new task</label>
      </FloatLabel>
      <Button
        size="small"
        label="Create task"
        severity="info"
        @click="createTask"
        :disabled="todoStore.loading"
      />
    </div>

    <!-- Mensaje cuando no hay tareas -->
    <div class="no-result mt-5 justify-center" v-if="todoStore.tasks.length === 0">
      <strong>No item layout...</strong>
    </div>

    <!-- Lista de tareas -->
    <div class="w-full mt-5" v-else>
      <div
        v-for="task in todoStore.tasks"
        :key="task.id"
        class="card-task bg-gray-200 rounded-md p-4 mb-4 flex items-center"
        :class="{ done: task.done }"
      >
        <!-- Checkbox de PrimeVue -->
        <Checkbox
          :model-value="task.done"
          @update:model-value="updateTask(task.id!)"
          binary
          class="mr-2"
        />

        <!-- Nombre tarea -->
        <strong class="ml-4 uppercase" :class="{ 'line-through': task.done }">
          {{ task.name }}
        </strong>

        <!-- Botón eliminar -->
        <button
          type="button"
          class="ml-auto text-red-500 font-bold hover:text-red-700"
          @click="deleteTask(task.id!)"
        >
          x
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div class="loading-container mt-5" v-if="todoStore.loading">
      <strong>Loading...</strong>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Layout from "./layouts/Default.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Checkbox from "primevue/checkbox";
import { useTodoStore } from "./store/todo";

const taskName = ref();
const todoStore = useTodoStore();

const createTask = () => {
  todoStore.addTask(taskName.value);
  taskName.value = "";
};

const deleteTask = (id: string) => {
    todoStore.deletedTask(id)
}

const updateTask = (id: string) => {
  todoStore.updateTask(id)
}


</script>

<style scoped>
.done strong {
  text-decoration: line-through;
}
</style>
