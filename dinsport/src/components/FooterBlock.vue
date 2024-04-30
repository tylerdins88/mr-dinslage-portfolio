<template>
  <div class="footer text-center">
    <router-link to="/contactme" class="emailMe text-lg align-middle"
      >Get in Contact with Me</router-link
    >
    <span class="text-lg align-middle">© Tyler Dinslage</span>
    <a :href="githubLink" target="_blank" rel="noopener noreferrer">
      <div class="footerGit">
        <img src="@/assets/viewphotos/github.png" alt="github icon" class="h-8 mb-2" />
      </div>
    </a>
    <a :href="linkedinLink" target="_blank" rel="noopener noreferrer">
      <div class="footerLink">
        <img src="@/assets/viewphotos/linkedin.webp" alt="linkedin icon" class="h-8 mb-2" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      githubLink: 'https://github.com/tylerdins88',
      linkedinLink: 'https://www.linkedin.com/in/tyler-dinslage/'
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 30px;
}
.footerGit,
.footerLink {
  border: solid 2px #006db0;
  border-radius: 30px;
  display: inline-block;
  padding-left: 16px;
  padding-right: 16px;
  margin: 8px;
  height: 60px;
}
img {
  margin-top: 10px;
}
.emailMe {
  border: solid 2px #006db0;
  border-radius: 30px;
  display: inline;
  padding: 10px;
}
.text-lg {
  font-size: 1.125rem;
  margin: 8px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 80px;
}

.emailMe.router-link-active {
  color: var(--color-text);
}

.emailMe-exact-active:hover,
.footerGit-exact-active:hover,
.footerLink-exact-active:hover {
  background-color: silver;
}

.emailMe:hover,
.footerGit:hover,
.footerLink:hover {
  background-color: silver;
}

@media screen and (max-width: 630px) {
  .footerGit,
  .footerLink,
  .emailMe {
    height: 30px;
    border-radius: 15px;
    padding: 5px 8px;
    margin: 4px;
  }

  img {
    margin-top: -1px;
    height: 100%;
    width: auto;
  }

  .text-lg {
    font-size: 0.875rem; /* half the original size */
    margin-bottom: 40px; /* half the original size */
  }
}
</style>
