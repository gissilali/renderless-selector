<template>
  <div>
    <renderless-selector
        :search-keys='["name", "email"]'
        v-model="selectedClient"
        search-input-id="employee_attendance_user"
        :options="[
                            {'name': 'Gibson', 'email': 'gibsonsilali@gmail.com'}
                        ]"
        :multiple="false"
    >
      <div
          style="max-width: 300px"
          class="position-relative"
          slot-scope="{
                        selectableItems,
                        searchResults,
                        selectedItems,
                        hasPermission,
                        searchInputId,
                        addItemToSelection,
                        deleteItemFromSelection,
                        search,
                        highlightedIndex,
                        highlightNext,
                        highlightPrev,
                        selectItem
                    }"
      >
        <div style="display:flex" class=" align-items-center">
          <div class="flex-1">
            <input
                :id="searchInputId"
                @keyup.prevent="search"
                @keydown.down.prevent="highlightNext"
                @keydown.up.prevent="highlightPrev"
                @keydown.enter.prevent="selectItem"
                placeholder="type in employee name and select"
                autocomplete="npe"
                type="text"
                class="form-control form-control-sm"
            />
            <div
                v-show="searchResults.length > 0"
                class="dropdown-list px-2 py-2  shadow-sm border mt-1 position-absolute bg-white"
                style="z-index:100; width: 100%"
            >
              <div

                  class="dropdown-list-item rounded"
                  :key="index"
                  v-for="(result, index) in searchResults"
              >
                <a
                    href="#"
                    @click.prevent="
                                            addItemToSelection(result.item)
                                        "
                    :class="{'bg-azure-dim': index == highlightedIndex }"
                    class="user-card mb-2 p-1   rounded hoverable"
                >
                  <div
                      class="user-avatar user-avatar-sm flex-grow-0 bg-primary"
                  >
                                            <span>
                                                {{ result.item.name[0] }}
                                            </span>
                  </div>
                  <div class="user-info flex-1">
                                            <span class="tb-lead"
                                            >{{
                                                result.item.name
                                              }}

                                                <span
                                                    class="dot dot-success d-md-none ml-1"
                                                ></span>
                                            </span>
                  </div>
                </a>
              </div>
            </div>
            <ul>
              <li :key="index"  v-for="(selectedItem, index) in selectedItems">{{ selectedItem.name }}</li>
            </ul>
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
  components: {RenderlessSelector},
  data() {
    return {
      selectedClient: null
    }
  }
}
</script>

<style scoped>

</style>