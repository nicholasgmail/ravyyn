<template>
    <footer class="main-footer bg-custom-light position-relative">
        <div id="back-to-top-arrow" class="position-absolute"><a href="#top"><img src="../assets/icons/arrow-short.svg" alt="up arrow icon"></a></div>

        <div class="container">
          <h3 class="text-uppercase text-center mb-5">
            Ravyyn
          </h3>
          <nav class="navbar px-0 mb-3 mb-md-5">
            <ul class="navbar-nav flex-row mx-auto justify-content-between w-75">
              <li class="nav-item">
                <router-link to="/faq" class="nav-link display-5 ls-3">
                  FAQ
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact-us" class="nav-link display-5 ls-3">
                  Contact
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog" class="nav-link text-capitalize display-5 ls-3">
                  Blog
                </router-link>
              </li>
              <li class="nav-item">
                <a href="https://www.instagram.com/ravyyn_/" target="_blank" class="nav-link display-5 ls-3">
                  <span class="sr-only">Instagram</span>
                  <img src="../assets/icons/ig-icon.svg" alt="instagram icon" class="ig-icon">
                </a>
              </li>
            </ul>
          </nav>

          <nav class="navbar px-0 pt-5" id="privacy-and-terms">
            <ul class="navbar-nav flex-row mx-auto justify-content-between">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>

        </div>
    </footer>
</template>