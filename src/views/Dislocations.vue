<template>
  <main class="dislocations-page">
    <div class="container table-responsive">
      <Table :fields="fields" :carriage-data="carriageData" />
    </div>
  </main>
</template>
<script setup>
import Table from "../components/Table.vue";
const carriageData = [
  {
    ID: "01",
    Number: "ЭШ345678",
    Carriage: "3456789",
    Date: "2024-04-21T12:34:00",
    Branch: "Азов Цемент",
  },
  {
    ID: "02",
    Number: "ЭШ345679",
    Carriage: "34567893",
    Date: "2024-04-22T12:34:00",
    Branch: "Кавказ Цемент",
  },
  {
    ID: "03",
    Number: "ЭШ345680",
    Carriage: "34567894",
    Date: "2024-04-23T12:34:00",
    Branch: "Волга Цемент",
  },
];
const fields = ["ID", "Number", "Carriage", "Date", "Branch"];
</script>
<style lang="scss" scoped></style>
