<template>
  <div id="resume-top">
    <navbar />
    <div class="container-fluid p-0">
      <about />
      <hr class="line m-0" />
      <skills />
      <hr class="line m-0" />
      <interests />
      <hr class="line m-0" />
      <projects />
      <hr class="line m-0" />
      <education />
      <hr class="line m-0" />
      <experiences />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/portfolio/navbar";
import about from "@/components/portfolio/about";
import skills from "@/components/portfolio/skills";
import interests from "@/components/portfolio/interests";
import projects from "@/components/portfolio/projects";
import education from "@/components/portfolio/education";
import experiences from "@/components/portfolio/experiences";

export default {
  name: "resume",
  components: {
    navbar,
    about,
    skills,
    interests,
    projects,
    education,
    experiences,
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i");
@import url("https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700");

@media screen {
  body {
    padding-top: 54px;
  }

  * {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: #d39000;
    box-sizing: border-box;
  }

  #resume-top {
    font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    color: #acabab;
    background-color: #000b1f;
  }

  .darker {
    background-color: #003668;
  }

  .text-darker {
    color: #d39000;
  }

  .text-modern {
    color: #5672a1;
  }

  .text-primary {
    color: #1e1f26 !important;
  }

  .line {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    background-color: #000b1f;
  }

  @media (min-width: 992px) {
    body {
      padding-top: 0;
      padding-left: 17rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-weight: 700 !important;
    text-transform: uppercase;
    color: #acacac;
  }

  h1 {
    font-size: 6rem !important;
    line-height: 5.5rem !important;
  }

  h2 {
    font-size: 3.5rem !important;
  }

  h3 {
    font-size: 2rem !important;
  }

  p.lead {
    font-size: 1.15rem;
    font-weight: 400;
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1.5rem;
  }

  .normal {
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1.6rem;
  }

  .texts {
    font-weight: 500;
    font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.5rem;
  }

  .icons a {
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #003668;
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
  }

  .icons a:last-child {
    margin-right: 0;
  }

  .icons a:hover {
    background-color: #d39000;
  }

  .dev-icons {
    font-size: 3rem;
  }

  .dev-icons .list-inline-item i:hover {
    color: #d39000;
  }

  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  #sideNav .navbar-toggler {
    border: none !important;
    color: #d39000;
  }

  #sideNav .navbar-toggler:focus {
    outline: none !important;
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }

    #sideNav .navbar-brand {
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }

    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }

    #sideNav .navbar-collapse {
      display: flex;
      align-items: flex-start;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }

    #sideNav .navbar-collapse .navbar-nav {
      flex-direction: column;
      width: 100%;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }
  }

  section.resume-content {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
  }

  section.resume-content .resume-item .resume-date {
    min-width: none;
  }

  @media (min-width: 768px) {
    section.resume-content {
      min-height: 100vh;
    }

    section.resume-content .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-content {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  a.links {
    color: #d39000 !important;
  }

  a.links:hover,
  a.links:focus,
  a.links:active {
    color: #996300 !important;
  }
}

@media print {
  html,
  body {
    font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    padding: 54px 20px;
    color: #acabab;
    background-color: #000b1f;
  }

  .darker {
    background-color: #003668;
  }

  .text-darker {
    color: #d39000;
  }

  .text-primary {
    color: #1e1f26 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-weight: 700;
    text-transform: uppercase;
    color: #acacac;
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p.lead {
    font-size: 1.15rem;
    font-weight: 400;
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1.5rem;
  }

  .normal {
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1.6rem;
  }

  .texts {
    font-weight: 500;
    font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.5rem;
  }

  .icons a {
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #003668;
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
  }

  .icons a:last-child {
    margin-right: 0;
  }

  .dev-icons {
    font-size: 3rem;
    color: #d8d8d8;
  }

  section.resume-content {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
  }

  section.resume-content .resume-item .resume-date {
    min-width: 18rem;
  }

  a {
    color: #d39000;
  }

  #about {
    page-break-after: avoid;
  }

  #skills,
  #interests {
    page-break-before: avoid;
  }

  #projects {
    page-break-inside: avoid;
  }

  #education {
    page-break-before: always;
  }
}
</style>

