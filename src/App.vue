<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Poinabel</h1>
      <!--{{ taskStore.name }} -->
    </header>

    <!-- new task form-->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
        All tasks
      </button>
      <button :class="{ active: filter === 'favs' }" @click="filter = 'favs'">
        All favs
      </button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks ...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks">
        <!-- task = a name we give to call -->
        <!-- taskStore = defineStore(" this ") -->
        <!-- tasks = array -->
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ favCount }} fav tasks</p>
      <div v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- resetting state -->
    <button @click="taskStore.$reset" style="margin-left: 1180px">
      reset state
    </button>
  </main>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia"; //No need to type taskStore.loading or etc, all of the time
export default {
  components: { TaskDetails, TaskForm }, //register components in export default
  setup() {
    const taskStore = useTaskStore(); //using this function from another file, so we import, then put in a variable

    // put in all the properties and getters - making them as refs
    const { tasks, favs, loading, totalCount, favCount } =
      storeToRefs(taskStore);

    // fetch tasks
    taskStore.getTask(); //from TaskStore.js - getTask

    const filter = ref("all");

    return { taskStore, filter, tasks, favs, loading, totalCount, favCount }; //return the value to the template above
  },
};
</script>
