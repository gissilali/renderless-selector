<template>
  <div id="app" class="container container mx-auto">
    <div class="max-w-sm">
      <renderless-selector
          :search-keys='["name"]'
          v-model="selectedClient"
          search-input-id="employee_attendance_user"
          :options="options"
          :multiple="false">
        <template v-slot="{  searchResults,  searchInputId, addItemToSelection, search, highlightedIndex, highlightNext, highlightPrev, selectItem }">
          <div class="relative bg-gray-100 w-full">
            <input :id="searchInputId" @keyup.prevent="search" @keydown.down.prevent="highlightNext"
                   @keydown.up.prevent="highlightPrev" @keydown.enter.prevent="selectItem"
                   placeholder="type in employee name and select" autocomplete="npe" type="text" class="w-full border border-gray-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" />
            <div v-show="searchResults.length > 0"
                 class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div class="relative hover:bg-gray-200 cursor-default select-none py-2 pl-10 pr-4" :key="index" v-for="(result, index) in searchResults">
                <a href="#" @click.prevent="addItemToSelection(result.item)"
                   :class="{'bg-azure-dim': index === highlightedIndex }" class="">
                  <div class="flex items-center justify-between">
                    <span class="tb-lead">{{ result.item.name }}</span>
                    <span class="w-1 h-1 bg-green-500 rounded-full"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </template>
      </renderless-selector>
    </div>
  </div>
</template>

<script>
import RenderlessSelector from "../../src/RenderlessSelector.vue";
export default {
  name: "App",
  components: {
    RenderlessSelector
  },
  data() {
    return {
      selectedClient: null,
      options: [{"id":1,"specialty_id":null,"name":"Allergy & Immunology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":2,"specialty_id":null,"name":"Anesthesiology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":3,"specialty_id":null,"name":"Dermatology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":4,"specialty_id":null,"name":"Diagnostic Radiology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":5,"specialty_id":null,"name":"Emergency Medicine","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":6,"specialty_id":null,"name":"Family Medicine","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":7,"specialty_id":null,"name":"Internal Medicine","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":8,"specialty_id":null,"name":"Medical Genetics","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":9,"specialty_id":null,"name":"Neurology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":10,"specialty_id":null,"name":"Nuclear Medicine","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":11,"specialty_id":null,"name":"Obstetrics And Gynecology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":12,"specialty_id":null,"name":"Ophthalmology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":13,"specialty_id":null,"name":"Pathology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":14,"specialty_id":null,"name":"Pediatrics","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":15,"specialty_id":null,"name":"Physical Medicine & Rehabilitation","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":16,"specialty_id":null,"name":"Preventive Medicine","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":17,"specialty_id":null,"name":"Psychiatry","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":18,"specialty_id":null,"name":"Radiation Oncology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":19,"specialty_id":null,"name":"Surgery","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"},{"id":20,"specialty_id":null,"name":"Urology","is_active":true,"created_at":"2020-10-04T18:35:37.000000Z","updated_at":"2020-10-04T18:35:37.000000Z"}]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
