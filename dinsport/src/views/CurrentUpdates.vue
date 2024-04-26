<template>
  <div class="welcomeMessage">
    <h2>
      Check out what is going on in my everyday life. You'll find insight here into current updates
      on projects I am working on, photos from current activities, and music that I am listening to
      right now.
    </h2>
  </div>
  <div>
    <photo-frame :photo="photo[0]" v-if="photo.length > 0" />
    <photo-frame :photo="photo[1]" v-if="photo.length > 1" />
    <photo-frame :photo="photo[2]" v-if="photo.length > 2" />
    <photo-frame :photo="photo[3]" v-if="photo.length > 3" />
    <music-frame :music="music[0]" v-if="music.length > 0" />
    <photo-frame :photo="photo[4]" v-if="photo.length > 4" />
    <music-frame :music="music[1]" v-if="music.length > 1" />
    <music-frame :music="music[2]" v-if="music.length > 2" />
  </div>
</template>

<script>
import MusicFrame from '../components/frames/MusicFrame.vue'
import PhotoFrame from '../components/frames/PhotoFrame.vue'

import Closing from '../assets/currentphotos/closing-day-homewood.jpeg'
import DND from '../assets/currentphotos/lego-dnd.jpg'
import KT from '../assets/currentphotos/easter-sunday.jpg'
import Bird from '../assets/currentphotos/work-bird.jpg'
import McGee from '../assets/currentphotos/umphreys-mcgee.jpg'

export default {
  components: {
    MusicFrame,
    PhotoFrame
  },
  data() {
    return {
      music: [
        {
          date: '3/24/24',
          thoughts:
            "I am a big fan of Lane 8's music. He has a progressive deep house style that is smooth and blissful.",
          title: 'Lane 8 Spring 2024 Mixtape',
          artwork: 'https://i1.sndcdn.com/artworks-0nJUNwm4KyQpmoiM-xVfxHQ-original.jpg',
          permalink: 'https://soundcloud.com/thisneverhappenedlabel/lane-8-spring-2024-mixtape',
          duration: '02:28:40',
          description:
            "Spring is here. Stream: https://thisneverhappened.ffm.to/winter23 Tracklist 1 ID - ID 2 ID - ID 3 Jamie xx - It's So Good (Original Mix) 4 Pete K - Echoes Of Us 5 ID - ID 6 ID - ID 7 Sainte Vie - Suspenso (Original Mix) 8 ID - ID 9 Stella Bossii - Drowning (Original Mix) 10 ID - ID 11 ID - ID 12 Luke Alessi, Chloé Caillet - 12 Inch Acid (Original Mix) 13 Carlita - Cash For Love (Extended Mix) 14 ID - ID 15 ID - ID 16 ID - ID 17 YOTTO, Anden - Will You Remember Me (YOTTO vs. Anden) Extended Mix 18 Rinzen - Deja Vu feat. Molly Moonwater (Extended Mix) 19 8Kays & Glowal - Matematica feat. Abrao (Original Mix) 20 Argia - Oxido (908) 21 Nick Leon, Dj Babatr - Xtasis feat. Dj Babatr (Original Mix) 22 BICEP - Apricots (S+S booty) 23 YxA - FORGET 24 illich Mujica - Surya Rising (MursiaVar Remix) 25 Robby East - Melody For The Misfits (Extended Mix) 26 Vandelux - To Love Again (Sofia Kourtesis Remix) 27 Ashee - Poison 28 Teho - Continuum 29 If I? - Horizon 30 NILU - Polaris 31 Sultan + Shepard - Bracket Burst 32 Tinlicker - Revolution 33 Budakid - Tonight 34 Teho - Origins (Original Mix) 35 Joy Orbison - flight fm (Original Mix) 36 ID - ID 37 ID - ID 38 OCULA - Standing Still"
        },
        {
          date: '3 / 18 / 24',
          thoughts:
            'Julya Karma is a heavy hitter in deep house and techno scene. This set is is from burning man and brings the heat.',
          title: 'Julya Karma - Maxa - Burning Man 2023',
          artwork: 'https://i1.sndcdn.com/artworks-a2b18bGFANOLETSf-ZRp1JQ-original.jpg',
          permalink: 'https://soundcloud.com/maxaxaman/julya-karma-maxa-burning-man-2024',
          duration: '02:00:55',
          description:
            '“Monday night was already off to an amazing start - I had just biked out to the deep playa and was able to quickly spot the beautiful Maxa deer glittering in the distance, with the help of a perfect full moon. I was overwhelmed with excitement as I headed towards it. To me, one of the magical parts of Burning Man is the serendipitous run-ins with people you weren’t expecting to find so far out in the middle of the desert. When I arrived on the art car, I remember feeling blown away by how many friends and familiar faces were both on the car and in the crowd. It was overwhelming to see everyone. If you were there that night, I hope listening to this set brings you back to that place. And if you are listening for the first time, I hope you can feel the magic we created together. Thank you to my Maxa family for having me - this is such a beautiful memory. Love, Julya”'
        },
        {
          date: '3 / 15 / 24',
          thoughts:
            'If I was a DJ, this is the sound I would want to have. Ive only recently started listening to Barry Cant Swim and have become a huge fan. He has a lot of uplifting sounds.',
          title: 'salute b2b Barry Can’t Swim - Live at Lost Sundays 2024',
          artwork: 'https://i1.sndcdn.com/artworks-TQdJGORhHR5HMcOM-PDhQdg-original.jpg',
          permalink: 'https://soundcloud.com/ronsonofficial92/salute-b2b-barry-cant-swim',
          duration: '03:04:27',
          description: ''
        }
      ],
      photo: [
        {
          date: '4/14/24',
          thoughts:
            'This is the view from one of the ski runs at Homewood Mountain. The resort is on the shores of Lake Tahoe. It is super cool to feel like you are riding down to the lake!',
          image: Closing
        },
        {
          date: '4 / 2 / 24',
          thoughts:
            'I am a big fan of LEGO. Since I was a child I have loved building sets and sorting through pieces. At this age its almost like meditation and is methodical for me. This new Dungeons & Dragons set was announced and I think its peak LEGO. Crazy cool scene with imagination and fantasy. <a href="https://www.lego.com/en-us/product/dungeons-dragons-red-dragon-s-tale-21348" target="_blank">Check it out!</a>',
          image: DND
        },
        {
          date: '3 / 31 / 24',
          thoughts:
            'I went snowboarding at Palisades Tahoe Easter morning. This is the mountain KT-22. It was named by a group of people who would skin up it before there was a lift. 22 Kick Turns is how many kick turns to the top. It was a great morning riding around the resort with minimal crowds.',
          image: KT
        },
        {
          date: '3 / 25 / 24',
          thoughts:
            'This is a chickadee bird that hangs out at my current job. It finds alot of food on the ground so enjoys hanging out. ',
          image: Bird
        },
        {
          date: '3 / 21 / 24',
          thoughts:
            'I really enjoy going to live music. This is Umphreys McGee at the South Shore Room at Harrahs in South Lake Tahoe!',
          image: McGee
        }
      ]
    }
  }
}
</script>

<style>
.welcomeMessage {
  text-align: center;
  font-size: 24px;
  border: 3px solid silver;
  border-radius: 15px;
  box-shadow: 0 12px 40px 0 silver;
  padding: 16px;
  width: 70%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

@media screen and (max-width: 800px) {
  .welcomeMessage {
    font-size: 16px;
    width: 90%;
  }
}
</style>
