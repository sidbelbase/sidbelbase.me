<template>
  <section class="resume-content p-3 p-lg-5 d-flex justify-content-center" id="projects">
    <div class="w-100">
      <h2 class="mb-5 text-darker">Projects</h2>
      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(repo, index) in projects"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ repo.name }}</h3>
          <div class="subheading mb-3 text-darker">
            <span>
              <i :class="getIconFrom(repo.language)"></i>
              <span class="mx-2">{{ repo.language }}</span>
            </span>
          </div>
          <p>{{ repo.description }}</p>
          <a :href="repo.url" class="links text-decoration-none font-weight-bold">Github</a>
          <span v-if="repo.homepage" class="mx-1 font-weight-bold">&middot;</span>
          <a
            :href="repo.homepage"
            v-if="repo.homepage"
            class="links text-decoration-none font-weight-bold"
          >Website</a>
          <span :title="countStars(repo.stargazers_count)">
            <span class="mx-1 font-weight-bold">&middot;</span>
            <span>
              <i class="fa fa-star text-darker"></i>
            </span>
            <span class="mx-1 text-darker font-weight-bold">{{repo.stargazers_count}}</span>
          </span>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-darker font-weight-bold">{{ formatDate(repo.created_at) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import relativeTime from "dayjs/plugin/relativeTime";
import icons from "@/data/icons.json";
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import axios from "axios";
export default {
  setup() {
    let projects = ref([]);
    const username = ref("sidbelbase");
    const url = ref(`https://api.github.com/users/${username.value}/repos`);

    function humanize(givendate) {
      dayjs.extend(relativeTime);
      return dayjs(givendate).fromNow();
    }

    function formatDate(givendate) {
      return dayjs(givendate).format("MMMM, YYYY");
    }

    function getIconFrom(language) {
      for (let lang in icons) {
        if (icons.hasOwnProperty(lang) && language.toLowerCase() === lang) {
          return icons[lang];
        }
      }
    }

    function countStars(stars) {
      return +stars + " stars on Github!";
    }

    function fetchRepos() {
      axios
        .get(url.value)
        .then((responses) => {
          responses.data.forEach((repo) => {
            projects.value.push({
              name: repo.name,
              description: repo.description,
              created_at: repo.created_at,
              stargazers_count: repo.stargazers_count,
              language: repo.language,
              homepage: repo.homepage,
              url: repo.html_url,
              fork: repo.fork,
            });
          });
          projects.value = projects.value
            .filter((repo) => !repo.fork && repo.language)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          console.log(projects);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    onMounted(() => fetchRepos());
    return { projects, url, humanize, formatDate, getIconFrom, countStars };
  },
};
</script>