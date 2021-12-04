<template>
  <q-page padding>
    <div class="q-col-gutter-md row items-start">
      <category-type-card-component :category="category"/>
    </div>
  </q-page>
</template>

<script>
import CategoryTypeCardComponent from 'src/components/CategoryTypeCardComponent.vue'
export default {
  components: { CategoryTypeCardComponent },
  name: 'Categories',
  setup() {
    const category = {
      title: 'Plumbing',
      img: 'https://placeimg.com/500/300/nature'
    }
    return {
      category
    }
  },
  
}
</script>
