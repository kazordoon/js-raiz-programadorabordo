<template>
  <form id="movie_form" v-on:submit.prevent="addMovie">
    <div class="form-group">
      <label for="title">Título</label>
      <input type="text" v-model="title" name="title" class="form-control" id="title" />
    </div>

    <div class="form-group">
      <label for="image">Link da imagem</label>
      <input type="url" v-model="image" name="image" class="form-control" id="image" />
    </div>

    <div class="form-group">
      <label for="categoria">Categoria</label>
      <select v-model="categoryIds" name="categories" class="form-control" multiple>
        <option
          v-for="category in categories"
          :value="category.id"
          :key="category.id"
        >{{category.title}}</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Cadastrar</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      image: '',
      categoryIds: [],
    };
  },
  methods: {
    addMovie() {
      console.log(this.title, this.image, this.categoryIds);
      this.$emit('add-movie', {
        title: this.title,
        image: this.image,
        categories: this.categoryIds,
      });
    },
  },
};
</script>
