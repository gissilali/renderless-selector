<script>
import Fuse from "fuse.js";
import {handleClickOutside} from "./utils/clickOutsideHandler";

export default {
  name: "RenderlessSelector",
  props: {
    resultLimit: {
      default: 5
    },
    searchKeys: {
      required: true,
      type: Array
    },
    options: {
      required: true,
      type: Array
    },
    multiple: {
      default: true
    },
    searchInputId: {
      required: true
    },
    allowDuplicates: {
      default: false
    }
  },
  created() {
    if (this.multiple) {
      this.selectedItems = this.$attrs.value;
    } else {
      if (this.$attrs.value) {
        this.selectedItems = [this.$attrs.value];
      } else {
        this.selectedItems = [];
      }
    }

  },
  mounted() {
    this.$nextTick(() => {
      this.searchInput = this.$el.querySelector(`#${this.searchInputId}`);
      handleClickOutside(this.searchInput, () => {
        this.searchResults = []
        this.searchInput.value = ''
      });

      this.searchInput.addEventListener('focus', () => {
        this.searchResults = this.options.map((item, index) => {
          return {item, refIndex: index}
        })
      })
    });
  },
  data() {
    return {
      selectableItems: [],
      fuseSearch: null,
      searchResults: [],
      selectedItems: [],
      hasPermission: true,
      searchInput: null,
      highlightedIndex: 0
    };
  },
  methods: {
    getSelectableItems() {
      this.selectableItems = this.options;
      console.log(this.selectableItems);

      this.fuseSearch = new Fuse(this.selectableItems, {
        shouldSort: true,
        minMatchCharLength: 3,
        threshold: 1.0,
        keys: [...this.searchKeys]
      });
    },
    search(event) {
      if (this.fuseSearch) {
        console.log(this.fuseSearch.search(event.target.value));
        this.searchResults = this.fuseSearch.search(event.target.value);
        return;
      }

      return [];
    },
    addItemToSelection(item) {
      if (this.multiple) {
        if (this.allowDuplicates) {
          this.selectedItems.push(item);
        } else {
          let hasSelectedItem = false;
          if (Array.isArray(this.selectedItems) === false && this.selectedItems == null) {
            this.selectedItems = [];
          }

          for (let i = 0; i < this.selectedItems.length; i++) {
            if (this.selectedItems[i].id == item.id) {
              hasSelectedItem = true;
              break;
            }
          }


          if (!hasSelectedItem) {
            this.selectedItems.push(item);
          }
        }
      } else {
        this.selectedItems = [];
        this.selectedItems.push(item);
      }
      this.searchResults = [];
      this.searchInput.value = "";
      this.$emit('item-added', item)
    },
    selectItem() {
      this.addItemToSelection(this.searchResults[this.highlightedIndex].item)
    },
    deleteItemFromSelection(item) {
      this.selectedItems.filter(selectedItem => {
        return selectedItem.id !== item.id;
      })
      this.$emit('item-removed', item)
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.searchResults.length - 1
      }
      if (this.highlightedIndex > this.searchResults.length - 1) {
        this.highlightedIndex = 0
      }

      this.input = this.searchResults[this.highlightedIndex]
    },
    handleEvent() {
      this.$emit('items-modified',)
    },
    containsObject(obj, list) {
      let i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    }
  },
  watch: {
    selectedItems: {
      handler: function (value) {
        if (this.multiple) {
          this.$emit("input", value);
        } else {
          if (value.length > 0) {
            this.$emit("input", value[0])
          }
        }
      }
    },
    selectableItems: {
      handler: function (items) {
        let options = {
          shouldSort: true,
          minMatchCharLength: 3,
          keys: [...this.searchKeys]
        };
        this.fuseSearch = new Fuse(items, options);
      }
    },
    '$attrs.value': {
      handler: function (selectedItems) {
        if (selectedItems) {
          if (Array.isArray(selectedItems)) {
            this.selectedItems = selectedItems;
          } else {
            if (!this.containsObject(selectedItems, this.selectableItems)) {
              this.selectableItems.push(selectedItems);

            }
            this.selectedItems = [selectedItems];
          }
        } else {
          this.selectedItems = [];
        }
      },
      immediate: true
    },
    'options': {
      handler: function () {
        this.getSelectableItems();
      },
      immediate: true
    }
  },
  render() {
    return this.$scopedSlots.default({
      selectableItems: this.selectableItems,
      searchResults: this.searchResults,
      selectedItems: this.selectedItems,
      hasPermission: this.hasPermission,
      searchInputId: this.searchInputId,
      addItemToSelection: this.addItemToSelection,
      deleteItemFromSelection: this.deleteItemFromSelection,
      search: this.search,
      highlightNext: this.highlightNext,
      highlightPrev: this.highlightPrev,
      selectItem: this.selectItem,
      highlightedIndex: this.highlightedIndex,
    });
  }
};
</script>