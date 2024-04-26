<template>
  <div class="credentials">
    <div class="resumebox">
      <div class="resdescrip">
        <h1>
          Click the thumbnail to the right to view my
          <span style="color: #006db0; font-weight: bold">RESUME</span>,
        </h1>
        <h2>
          See my
          <span style="color: #006db0; font-weight: bold">UNL Diploma & Berkeley Certificate</span>
          Below,
        </h2>
        <p>
          Or read a <span style="color: #006db0">short work history</span> about me at the bottom.
        </p>
      </div>
      <div class="resume">
        <a @click="downloadResume">
          <img alt="Resume" src="@/assets/viewphotos/resume-thumbnail.png" />
        </a>
      </div>
    </div>
    <div class="papers">
      <div class="certificate">
        <a @click="downloadUCBCert">
          <img alt="Certificate" src="@/assets/viewphotos/uc-certificate.jpg" />
        </a>
      </div>
      <div class="degree">
        <a @click="downloadUNLDegree">
          <img alt="Degree" src="@/assets/viewphotos/UNL-Degree.jpeg" />
        </a>
      </div>
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
.resumebox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.resdescrip {
  text-align: center;
}

.resumebox h1 {
  font-size: 28px;
  border-bottom: #006db0 2px solid;
}

.resumebox h2 {
  font-size: 24px;
  border-bottom: #006db0 2px solid;
}

.resumebox p {
  font-size: 20px;
  border-bottom: #006db0 2px solid;
}

.resume {
  display: block;
  margin-left: 50px;
  height: 209px;
  width: 156px;
}

.papers {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;
}

.degree {
  height: 225px;
  width: 300px;
  margin-right: 80px;
  border-radius: 20%;
}

.certificate {
  height: 250px;
  width: 275px;
  margin-left: 80px;
}
</style>
