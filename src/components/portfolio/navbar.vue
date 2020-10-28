<template>
              <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Siddharth Belbase</span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../assets/img/profile.jpg"
                        alt="sidbelbase">
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#about' }" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#skills' }" class="nav-link">Skills</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#interests' }" class="nav-link">Interests</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#projects' }" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#education' }" class="nav-link">Education</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'resume', hash: '#experiences' }" class="nav-link">Experiences</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>