<template>
  <div class="bio">
    <p>
      My name is Tyler Dinslage. Since before I can remember I have been called "Dins" though. I
      grew up in a small farm town in Nebraska named Norfolk. It was a great place and a easy
      childhood. A time before cellphones and you had to be home when the street lights turned on.
      As a kid I was into golf, disc golf, running, and swimming. In the summers I was a lifeguard
      at the city pool which I am sure is everyones dream summer job. Once graduating high school I
      attended college at the University of Nebraska at Lincoln.
    </p>
    <br />
    <p>
      Going to college at UNL is the dream of every kid who grew up in NE in the 90s. You grew up
      watching Husker football every saturday in the fall. We were the best. My years in college
      were the opposite, the football team was terrible! But the knowledge and skills I learned in
      school stay with me to today. And those were on pace with the cornhuksers in the 90s. I
      graduated with a double degree in Finance and Economics. I am a wiz with numbers and enjoy
      them immensely. In college I was diagnosed with cancer. That set me on a different path
      following graduation. I am all good these days, nearly 16 years cancer free!
    </p>
    <br />
    <p>
      Once graduated I moved to the Rocky Mountains of Colorado. Having faced a serious health issue
      and confronting death will change you. I moved to the mountains and wanted to enjoy what life
      had to offer. Summers were filled with days on the lake, hiking mountain peaks, and relaxing
      in the sun. In the winters it was all about snowboarding and mountaineering! I lived here for
      a decade enjoying the sports and working a variety of jobs. These included accounting,
      hospitality, management, and sales positions.
    </p>
    <br />
    <p>
      When I was in college I also found myself the best dog you could ask for. His name was King
      Leonidas or "Leo" for short. He was a boxer-german shepherd cross. He was a fierce looking dog
      but the sweetest lovable pup you could imagine. Leo moved with me to CO and we had the time of
      our lives. His favorite activity was disc golf and hiking. He loved roaming the mountains for
      hours on end. As he got older I decided we needed to go somewhere for him to retire. So we
      moved to Lake Tahoe, CA. Talk about a place to retire.
    </p>
    <br />
    <p>
      In Lake Tahoe I continued working in the ski resort industry as a snowmaker and groomer.
      Continuing to spend my free time enjoying life with life exploring new mountains. Leo would
      live to be 14.5 years old and pass in the fall of '22. It was at this time I decided I wanted
      to start a career. To put my energy and passion I had living life with my dog into a career
      that I could be proud of. I chose web development as that chapter. It allows me to keep
      working with numbers, equations, and build incredible applications. I attended University of
      California Berkley Extension school and graduated from the Full Stack Web Development program.
      It was a rigorous cirriculum that taught me many skills. Which brings me to where I am today.
      Coding and working my way into the tech field. Please visit the Work History page to learn
      more about who I am as a worker.
    </p>
    <br />
    <p>As a added bonus, please enjoy the photos of my life below.</p>
  </div>

  <section class="embla">
    <div class="embla__viewport">
      <div class="embla__container">
        <div class="embla__slide embla__slide__0">
          <img src="@/assets/aboutphotos/christmastyler.jpg" alt="Christmas Tyler" />
        </div>
        <div class="embla__slide embla__slide__1">
          <img src="@/assets/aboutphotos/king-leo-cliff.jpg" alt="Leo Cliff" />
        </div>
        <div class="embla__slide embla__slide__2">
          <img src="@/assets/aboutphotos/lake-tahoe-sunset.jpg" alt="Tahoe Sunset" />
        </div>
        <div class="embla__slide embla__slide__3">
          <img src="@/assets/aboutphotos/leo-burn.jpg" alt="Leo Burn" />
        </div>
        <div class="embla__slide embla__slide__4">
          <img src="@/assets/aboutphotos/red-mountain.jpg" alt="Red Mountain" />
        </div>
        <div class="embla__slide embla__slide__5">
          <img src="@/assets/aboutphotos/rubicon-lake.jpg" alt="Rubicon Lake" />
        </div>
        <div class="embla__slide embla__slide__6">
          <img src="@/assets/aboutphotos/rubicon-peak-splitboard.jpg" alt="Rubicon Splitboard" />
        </div>
        <div class="embla__slide embla__slide__7">
          <img src="@/assets/aboutphotos/tallac.jpg" alt="Tallac" />
        </div>
        <div class="embla__slide embla__slide__8">
          <img src="@/assets/aboutphotos/tylerandleo.jpg" alt="Tyler and Leo" />
        </div>
      </div>
    </div>

    <div class="embla__controls">
      <div class="embla__buttons">
        <button class="embla__button embla__button--prev" type="button">
          <svg class="embla__button__svg" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M520.646 355.66c13.805 13.793 13.805 36.208 0 50.001-13.804 13.785-36.238 13.785-50.034 0L266 201.22 61.391 405.66c-13.805 13.785-36.239 13.785-50.044 0-13.796-13.793-13.796-36.208 0-50.002 22.947-22.928 206.507-206.395 229.454-229.332a35.065 35.065 0 0 1 25.126-10.326c9.2 0 18.26 3.393 25.2 10.326 45.901 45.865 206.564 206.404 229.52 229.332Z"
            ></path>
          </svg>
        </button>

        <button class="embla__button embla__button--next" type="button">
          <svg class="embla__button__svg" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M11.354 176.34c-13.805-13.793-13.805-36.208 0-50.001 13.804-13.785 36.238-13.785 50.034 0L266 330.78l204.61-204.442c13.805-13.785 36.239-13.785 50.044 0 13.796 13.793 13.796 36.208 0 50.002a5994246.277 5994246.277 0 0 0-229.454 229.332 35.065 35.065 0 0 1-25.126 10.326c-9.2 0-18.26-3.393-25.2-10.326C194.973 359.808 34.31 199.269 11.354 176.34Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from '../components/carousel/EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { axis: 'y', dragFree: true, loop: true }

onMounted(() => {
  const emblaNode = document.querySelector('.embla')
  const viewportNode = emblaNode.querySelector('.embla__viewport')
  const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
  const nextBtnNode = emblaNode.querySelector('.embla__button--next')

  const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

  const onNavButtonClick = (emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode,
    onNavButtonClick
  )

  emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
})
</script>

<style scoped>
.bio {
  margin-top: 30px;
}
.embla__slide__0 {
  margin-left: 181px;
}
.embla__slide__1 {
  margin-left: 137.5px;
}
.embla__slide__2 {
  margin-left: 62.5px;
}
.embla__slide__3 {
  margin-left: 181px;
}
.embla__slide__4 {
  margin-left: 181px;
}
.embla__slide__5 {
  margin-left: 92px;
}
.embla__slide__7 {
  margin-left: 181px;
}
.embla__slide__8 {
  margin-left: 181px;
}
</style>
