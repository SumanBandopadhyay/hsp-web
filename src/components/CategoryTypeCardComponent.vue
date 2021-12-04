<template>
  <div class="col-6 q-pa-sm justify-center">
    <q-card bordered square>
      <div class="q-pa-sm self-center text-center">
        <q-card-section>
          <div class="text-h5">{{ title }}</div>
        </q-card-section>
        <q-card-section>
          <div class="col-4">
            <q-img
              :src="img"
              :ratio="16 / 9"
              fit="fill"
            />
          </div>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  name: "CategoryTypeCardCompoenent",
  props: {
    category: {
      title: String,
      img: String
    }
  },
  setup(props) {
    const { category } = toRefs(props)
    return {
      title: category.value.title,
      img: category.value.img
    };
  },
};
</script>
