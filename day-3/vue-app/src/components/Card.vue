<template>
  <div class="card">
    <img class="card-img-top" :src="image" :alt="title" />
    <div class="card-body">
      <h3 class="card-title">{{title}}</h3>
      <p class="card-text">
        <a
          v-for="category in categories"
          href="#"
          class="badge badge-secondary mr-1"
          :key="category.id"
        >
        {{ category }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    categories: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>
