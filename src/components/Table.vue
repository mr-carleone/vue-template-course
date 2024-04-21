<script setup>
import { computed, ref } from "vue";

import { sortBy } from "lodash";

const props = defineProps({
  fields: {
    type: Array,
  },
  carriageData: {
    type: Array,
  },
});

const sort = ref(true);
const searchQuery = ref("");
const updatedList = ref(props.carriageData);
const sortTable = (col) => {
  sort.value = !sort.value;
  if (!sort.value) {
    updatedList.value = sortBy(props.carriageData, col);
  } else {
    updatedList.value = props.carriageData;
  }
};

const filteredList = computed(() => {
  return updatedList.value.filter((railway) => {
    return (
      railway.Number.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
      -1
    );
  });
});
</script>

<template>
  <div class="searchBar mt-5">
    <div class="input-group mb-5">
      <input
        type="search"
        class="form-control"
        v-model="searchQuery"
        placeholder="Railway's Number"
        aria-label="Recipient's number"
        aria-describedby="button-addon2"
      />
    </div>
  </div>
  <table class="table caption-top">
    <caption>
      <h1 class="text-center">List of Carriage</h1>
    </caption>
    <thead>
      <tr>
        <th
          scope="col"
          v-for="field of props.fields"
          :key="field"
          @click="sortTable(field)"
        >
          {{ field }}
          <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="railway of filteredList" :key="railway.ID">
        <th scope="row">{{ railway.ID }}</th>
        <td>{{ railway.Number }}</td>
        <td>{{ railway.Carriage }}</td>
        <td>{{ railway.Date }}</td>
        <td>{{ railway.Branch }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table thead th:hover {
  background: var(--light);
}
</style>
