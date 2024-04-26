<template>
  <div class="credentialsSmall">
    <div>
      <h1>Resume</h1>
      <a @click="downloadResume">
        <img class="resumeSmall" alt="Resume" src="@/assets/viewphotos/resume-thumbnail.png" />
      </a>
    </div>
    <div>
      <h3>Web Certificate</h3>
      <a @click="downloadUCBCert">
        <img
          class="certificateSmall"
          alt="Certificate"
          src="@/assets/viewphotos/uc-certificate.jpg"
        />
      </a>
    </div>
    <div>
      <h2>UNL Degree</h2>
      <a @click="downloadUNLDegree">
        <img class="degreeSmall" alt="Degree" src="@/assets/viewphotos/UNL-Degree.jpeg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      // Direct link to the Resume on Google Drive
      const resumeLink =
        'https://drive.google.com/file/d/1MOR_DZMs0b3QXKazKkYsSRYQSEcx2Gr9/view?usp=sharing'
      window.open(resumeLink, '_blank')
    },
    downloadUCBCert() {
      // Direct link to the UCB Full Stack Cert on Google Drive
      const ucbCertLink =
        'https://drive.google.com/file/d/1m62Poe6Qy5PDaMN_xNudW2EF2yfxTdCv/view?usp=sharing'
      window.open(ucbCertLink, '_blank')
    },
    downloadUNLDegree() {
      // Direct link to the UNL Degree on Google Drive
      const unlDegree =
        'https://drive.google.com/file/d/1_5UfYxfpsYTxgODrEWk0Dy-ryZWLy5Xp/view?usp=sharing'
      window.open(unlDegree, '_blank')
    }
  }
}
</script>

<style>
.credentialsSmall {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.credentialsSmall div {
  margin-bottom: 20px; /* Adjust the space between items */
}

.credentialsSmall h1,
.credentialsSmall h2,
.credentialsSmall h3 {
  font-size: 24px;
  border-bottom: #006db0 2px solid;
  margin: 20px;
}

.resumeSmall,
.degreeSmall,
.certificateSmall {
  height: 200px;
  width: auto;
  border-radius: 20%;
}
</style>
