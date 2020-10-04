<template>
  <div>
    <renderless-selector :search-keys='["name"]' v-model="selectedClient" search-input-id="employee_attendance_user"
      :options="options" :multiple="true">
      <div class="position-relative"
        slot-scope="{ selectableItems, searchResults, selectedItems, hasPermission, searchInputId, addItemToSelection, deleteItemFromSelection, search, highlightedIndex, highlightNext, highlightPrev, selectItem }">
        <div class=" align-items-center">
          <div class="flex-1">
            <input :id="searchInputId" @keyup.prevent="search" @keydown.down.prevent="highlightNext"
              @keydown.up.prevent="highlightPrev" @keydown.enter.prevent="selectItem"
              placeholder="type in employee name and select" autocomplete="npe" type="text" class="form-control" />
            <div v-show="searchResults.length > 0"
              class="dropdown-list px-2 py-2  shadow-sm border mt-1 position-absolute bg-white"
              style="z-index:100; width: 100%">
              <div class="dropdown-list-item rounded" :key="index" v-for="(result, index) in searchResults">
                <a href="#" @click.prevent="addItemToSelection(result.item)"
                  :class="{'bg-azure-dim': index == highlightedIndex }" class="user-card mb-2 p-1   rounded hoverable">
                  <div class="user-avatar user-avatar-sm flex-grow-0 bg-primary">
                    <span>
                      {{ result.item.name[0] }}
                    </span>
                  </div>
                  <div class="user-info flex-1">
                    <span class="tb-lead">{{ result.item.name
                                                }}

                      <span class="dot dot-success d-md-none ml-1"></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </renderless-selector>
  </div>
</template>

<script>
  import RenderlessSelector from "./src/entry";
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

<style scoped>

</style>