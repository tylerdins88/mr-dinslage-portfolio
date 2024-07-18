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
    <music-frame :music="music[0]" v-if="music.length > 0" />
    <photo-frame :photo="photo[2]" v-if="photo.length > 2" />
    <photo-frame :photo="photo[3]" v-if="photo.length > 3" />
    <music-frame :music="music[1]" v-if="music.length > 1" />
    <photo-frame :photo="photo[4]" v-if="photo.length > 4" />
    <photo-frame :photo="photo[5]" v-if="photo.length > 5" />
    <photo-frame :photo="photo[6]" v-if="photo.length > 6" />
    <photo-frame :photo="photo[7]" v-if="photo.length > 7" />
    <photo-frame :photo="photo[8]" v-if="photo.length > 8" />
    <music-frame :music="music[2]" v-if="music.length > 2" />
    <photo-frame :photo="photo[9]" v-if="photo.length > 9" />
    <music-frame :music="music[3]" v-if="music.length > 3" />
    <music-frame :music="music[4]" v-if="music.length > 4" />
  </div>
</template>

<script>
import MusicFrame from '../components/frames/MusicFrame.vue'
import PhotoFrame from '../components/frames/PhotoFrame.vue'

import Sunny from '../assets/currentphotos/sunny-bike-tahoe-april.jpeg'
import Closing from '../assets/currentphotos/closing-day-homewood.jpeg'
import DND from '../assets/currentphotos/lego-dnd.jpg'
import KT from '../assets/currentphotos/easter-sunday.jpg'
import Bird from '../assets/currentphotos/work-bird.jpg'
import McGee from '../assets/currentphotos/umphreys-mcgee.jpg'
import Cliff from '../assets/currentphotos/cliff-overlook.jpg'
import Fishing from '../assets/currentphotos/fishing-kayak.jpg'
import Tet from '../assets/currentphotos/four-tet.jpg'
import NewHead from '../assets/currentphotos/new-headshot.jpg'
import Pineapple from '../assets/currentphotos/pineapple-plant.jpg'

export default {
  components: {
    MusicFrame,
    PhotoFrame
  },
  data() {
    return {
      music: [
        {
          date: '6/13/24',
          thoughts:
            'I found Salue from the B2B set I posted earlier in the year. He has a very upbeat and vibrant sound. This set from Beyond the Valley has been on replay the last week.',
          title: 'salute — Beyond The Valley 2023',
          artwork: 'https://i1.sndcdn.com/artworks-z5vomCKlreJHz9F4-cSlXXg-original.jpg',
          permalink: 'https://soundcloud.com/beyondthevalleyofficial/salute-311223',
          duration: '01:30:19',
          description: 'salute — live from Beyond The Valley 2023'
        },
        {
          date: '4/25/24',
          thoughts:
            'Atish is a fun artist I have been following for a few years now. He plays a range of deep house to Romanian minimal to techno. A very progressive sound. This set was from the eclipse festival in Texas. That looked like a fun time!',
          title: 'atish - [098] - Live At Texas Eclipse Festival (april 2024)',
          artwork: 'https://i1.sndcdn.com/artworks-2QQXk9zoZM6i4I3q-KE3wBg-original.png',
          permalink:
            'https://soundcloud.com/atish/atish-098-live-at-texas-eclipse-festival-april-2025',
          duration: '01:26:08',
          description:
            'I had the peaktime midnight slot with the honor of playing after Lee Burridge, so I started this one off with an organic vibe then transitioned through prog, tech-house, and just some straight up bangers. A few unreleased IDs in there from my boys Enamour , m.o.n.r.o.e and Saqib. Also funny moment: you may notice that the set just abruptly ends. Thats because the next act accidentally unplugged the wrong cable from the mixer. Was definitely a nerve-wracking moment….BUT my recorder also recorded the crowd noise, so its kinda a cool little audio capture of what it felt like...and you can literally hear the next DJ say "OH SHIT!!" ....The warm applause from all of you certainly softened the blow Tracklist: 098 - Live at Texas Eclipse [0:00:00] atish, Fabian Krooss - Elasticity [A Tribe Called Kotori 2024] [0:05:00] Sarkis Mikael, Nhii - Plant Power [Sounds of Khemit 2024] [0:09:00] Enamour - ID [0:13:00] Jamie Stevens & Ivan Aliaga - Firefox [Solis Records 2024] [0:17:00] Sasha - Fleuron Drift [Last Night on Earth 2024] [0:24:00] Martin Eyerer - Walk the talk [Still Hot 2024] [0:28:00] Ellroy - Safe Landing [Modelika 2024] [0:32:00] Denney - Trojan Dance [Last Night On Earth 2024] [0:36:00] Cristina Lazic - Luna [La Zic 2024] [0:40:00] m.O.N.R.O.E. - ID [0:46:00] Asher - Shifty [Aus Music 2022] [0:50:00] Deetron - Runnin [Nu Groove Records 2024] [0:54:00] John Tejada - Sweat (On The Walls) [Poker Flat RecordingsPoker Flat Recordings 2004] [0:58:00] Francesca Lombardo - Sea [Ovum Recordings 2022] [1:04:00] Saqib - ID [1:08:00] Catz n Dogz - ASA [Pets Recordings 2023] [1:13:00] Tom Demac - Sink Or Swim [Hypercolour 2017] [1:17:00] Polo (AR) - Nostalgia del Presente (Danny Howells Remix) [Manjumasi Unreleased] [1:23:00] Jim Rivers - Cosmos [COD3 QR 2023]'
        },
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
          date: '3/18/24',
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
          date: '3/15/24',
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
          date: '7/6/24',
          thoughts:
            'I am not a fisherman. I rarely go fishing. But I was on vacation and there was fishing gear. I wanted to go kayaking early in the morning on calm waters. My brother-in-law said we should go fishing. I got lucky and caught this large mouth bass.',
          image: Fishing
        },
        {
          date: '6/18/24',
          thoughts:
            'This pineapple plant I have been growing for over 4 years. It has a single pineapple growing and recently I noticed the 2 suckers on it. ',
          image: Pineapple
        },
        {
          date: '6/16/24',
          thoughts:
            'New headshot for my profiles. I am looking to update all my accounts and get ready for the job hunt again.',
          image: NewHead
        },
        {
          date: '6/1/24',
          thoughts: 'Spliff Cliff. Its a cliff that overlooks Lake Tahoe. A nice easy hike.',
          image: Cliff
        },
        {
          date: '5/10/24',
          thoughts:
            'Here is a throwback photo to a concert I went to on Halloween. Four Tet played a 5+ hour show. It was so much fun. Everyone dressed up in costumes and enjoying themselves.',
          image: Tet
        },
        {
          date: '4/22/24',
          thoughts:
            'Summer is right around the corner and I could not be more excited. Lake Tahoe has a bike path all around the lake. Its perfect for going to town or just going for a ride. Here is my bike posted on a pier over looking the lake.',
          image: Sunny
        },
        {
          date: '4/14/24',
          thoughts:
            'This is the view from one of the ski runs at Homewood Mountain. The resort is on the shores of Lake Tahoe. It is super cool to feel like you are riding down to the lake!',
          image: Closing
        },
        {
          date: '4/2/24',
          thoughts:
            'I am a big fan of LEGO. Since I was a child I have loved building sets and sorting through pieces. At this age its almost like meditation and is methodical for me. This new Dungeons & Dragons set was announced and I think its peak LEGO. Crazy cool scene with imagination and fantasy. <a href="https://www.lego.com/en-us/product/dungeons-dragons-red-dragon-s-tale-21348" target="_blank">Check it out!</a>',
          image: DND
        },
        {
          date: '3/31/24',
          thoughts:
            'I went snowboarding at Palisades Tahoe Easter morning. This is the mountain KT-22. It was named by a group of people who would skin up it before there was a lift. 22 Kick Turns is how many kick turns to the top. It was a great morning riding around the resort with minimal crowds.',
          image: KT
        },
        {
          date: '3/25/24',
          thoughts:
            'This is a chickadee bird that hangs out at my current job. It finds alot of food on the ground so enjoys hanging out. ',
          image: Bird
        },
        {
          date: '3/21/24',
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
