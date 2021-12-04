<template>
  <q-page padding>
    <div v-for="category in categories" :key="category">
      <div class="q-col-gutter-md row items-start">
        <category-type-card-component :category="category" />
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
      await $store.dispatch("category/fetchCategories")
    }

    onMounted(fetchCategories);

    const categories = computed(() => {
      return $store.state.category.categories
    })

    return {
      categories: categories,
    };
  },
};
</script>
