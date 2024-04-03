<template>
  <div class="credentialsSmall">
    <div>
      <h1>Resume.</h1>
      <a target="_blank" rel="noreferrer" :href="ResumePDF">
        <img class="resumeSmall" alt="Resume" src="@/assets/viewphotos/resume-thumbnail.png" />
      </a>
    </div>
    <div>
      <h2>UNL Degree.</h2>
      <a target="_blank" rel="noreferrer" :href="UNLDegree">
        <img class="degreeSmall" alt="Degree" src="@/assets/viewphotos/UNL-Degree.jpeg" />
      </a>
    </div>
    <div>
      <h3>Web Certificate.</h3>
      <a target="_blank" rel="noreferrer" :href="CertificatePDF">
        <img
          class="certificateSmall"
          alt="Certificate"
          src="@/assets/viewphotos/uc-certificate.jpg"
        />
      </a>
    </div>
  </div>
</template>

<script>
import ResumePDF from '../assets/tyler-dinslage-resume.pdf'
import CertificatePDF from '../assets/UC-Berkeley-Extension-Certificate.pdf'
import UNLDegree from '../assets/UNL-Degree.pdf'
</script>

<style>
.credentialsSmall {
  display: flex;
  justify-content: space-between; /* Adjust as needed */
  text-align: center;
}

.credentialsSmall div {
  flex: 1; /* Each child div takes equal space */
  display: flex;
  flex-direction: column;
  align-items: center;
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
