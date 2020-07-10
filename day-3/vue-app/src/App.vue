<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <h2>Cadastro de filme</h2>
        <Form v-on:add-movie="addMovie" :categories="categories" />
      </div>
      <div class="col-sm-12 col-md-9">
        <div id="cards_container" class="card-columns">
          <Card
            v-for="movie in normalizedMovies"
            v-bind:title="movie.title"
            v-bind:image="movie.image"
            v-bind:categories="movie.categories"
            v-bind:key="movie.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue';
import Card from './components/Card.vue';
import movies from './static/movies';
import categories from './static/categories';
import getCategoryTitles from './utils/getCategoryTitles';

export default {
  name: 'App',
  components: {
    Form,
    Card,
  },
  data() {
    return {
      movies,
      categories,
    };
  },
  methods: {
    addMovie(movie) {
      this.movies = [
        ...this.movies,
        movie,
      ];
    }
  },
  computed: {
    normalizedMovies() {
      return this.movies.map((movie) => ({
        ...movie,
        categories: getCategoryTitles(movie.categories),
      }));
    },
  },
};
</script>
