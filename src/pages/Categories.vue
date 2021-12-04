<template>
  <q-page padding>
    <div class="row">
      <div v-for="category in categories" :key="category" class="col-6">
        <div class="items-start">
          <category-type-card-component :category="category" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CategoryTypeCardComponent from "src/components/CategoryTypeCardComponent.vue";
export default {
  components: { CategoryTypeCardComponent },
  name: "Categories",
  setup() {
    const $store = useStore();

    const fetchCategories = async () => {
      await $store.dispatch("category/fetchCategories");
    };

    onMounted(fetchCategories);

    const categories = computed(() => {
      return $store.state.category.categories;
    });

    return {
      categories: categories,
    };
  },
};
</script>
