<template>
  <div>
    <div>
      <v-card href="https://ygorganization.com/go-rush-cards-from-episode-14/">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            src="https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/ce865015.jpg?resize=800%2C445&ssl=1"
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" href="https://ygorganization.com/go-rush-cards-from-episode-14/">Yu-Gi-Oh! Go Rush</v-btn>
              </v-col>
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  [GO RUSH!!] Cards from Episode 14
                </h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">Neo Arkadia · July 4, 2022</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Za Vas</h2>

            <v-row>
              <v-col v-for="i in forYou" :key="i.id" cols="12" lg="4" md="6">
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="50"
                    open-delay="50"
                >
                  <div>
                    <v-card
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        flat
                        hover
                        :href="i.route"
                    >
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          :src="i.image"
                          style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" :href="i.route">{{i.tag}}</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          {{i.title}}
                        </div>

                        <div class="text-body-1 py-4">
                          {{i.desc}}
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">{{i.date}} / {{i.author}}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Najnovije vijesti</h2>
            <div>
              <v-row v-for="i in latest" :key="i.id" class="py-4">
                  <v-col cols="12" md="4">
                    <v-card flat height="100%" :href="i.route">
                    <v-img
                        :aspect-ratio="16 / 9"
                        height="100%"
                        :src="i.image"
                    ></v-img>
                    </v-card>
                  </v-col>
                  <v-col>
                    <div>
                      <v-btn color="accent" depressed>{{i.tag}}</v-btn>

                      <h3 class="text-h4 font-weight-bold pt-3">
                        {{i.title}}
                      </h3>

                      <p class="text-h6 font-weight-regular pt-3 text--secondary">
                        {{i.desc}}
                      </p>

                      <div class="d-flex align-center">
                        <v-avatar color="accent" size="36">
                          <v-icon dark>mdi-feather</v-icon>
                        </v-avatar>

                        <div class="pl-2">{{i.date}} / {{i.author}}</div>
                      </div>
                    </div>
                    <v-btn class="mt-2" :href="i.route">Procitaj vise</v-btn>
                  </v-col>
              </v-row>
            </div>
        </div>
        </div>
      </v-col>
      <v-col>
        <div class="pt-16">
          <siderbar/>
        </div>
      </v-col>
    </v-row>
  <div>
    <v-bottom-navigation
    :value="value"
    color="teal"
    grow
  >
    <v-btn href="https://www.facebook.com/fpmoz.ba/">
      <span>Facebook</span>

      <img src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200" height="30px">
    </v-btn>

    <v-btn href="https://www.instagram.com/fpmoz.mostar/?hl=hr">
      <span>Instagram</span>

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/220px-Instagram_logo_2016.svg.png" height="30px">
    </v-btn>

    <v-btn href="https://fpmoz.sum.ba/index.php?lang=hr">
      <span>Website</span>

      <img src="https://moodle.fpmoz.sum.ba/pluginfile.php/9069/mod_resource/content/1/mali_logo_fpmoz.png" height="30px">
    </v-btn>
  </v-bottom-navigation>
  </div>
  </div>
  
  
</template>

<script>
export default {
  name: "HomeComponent",
  data: () => ({
    pageOfItems: [],
    latest: [
      { id: 1,  title: '[Yu-Gi-Oh! OCG TIMES] July 2022 Edition: "DARKWING BLAST" News', desc: 'It would seem it’s time to check your fate and fortune.', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/Aura_Sentia.png?resize=800%2C445&ssl=1', tag: 'News', route: 'https://ygorganization.com/yu-gi-oh-ocg-times-july-2022-edition-darkwing-blast-news/', date: 'July 4, 2022', author: 'NeoArkadia'},
      { id: 2,  title: '[Rush Duel] Yu-Gi-Oh! Go Rush!! Sleeves', desc: 'Featuring the main characters of this first cour.', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/yuamusleeve.jpg?resize=480%2C445&ssl=1', tag: 'News', route: 'https://ygorganization.com/rush-duel-yu-gi-oh-go-rush-sleeves/', date: 'July 4, 2022', author: 'Ness'},
      { id: 3,  title: '[VJMP] Green Ninja', desc: 'You flip me right round, baby, like a card, baby. Right round. Right round.', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/FWjVnxzVUAEpBDM.png?w=256&ssl=1', tag: 'Promo & News', route: 'https://ygorganization.com/youshappaimerightround/', date: 'July 4, 2022', author: 'NeoArkadia'},
      { id: 4,  title: '[DABL] Red Cartesia, the Virtuous', desc: 'Could it really be her…?', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/FWk1YugUYAAgNZj.jpg?resize=800%2C445&ssl=1', tag: 'News', route: 'https://ygorganization.com/eventhewhitestpurestvirtuestainsred/', date: 'July 3, 2022', author: 'NeoArkadia'},
    ],
    forYou: [
      {id: 1, title: 'Creative Deck Profile: 60-card Outstanding Labrynth Exchange with the Entity and the Burning Abyss', desc: 'Mouthful of a title means many different themes will appear!', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/06/CDBanner_Labrynth60_Small.png?w=450&ssl=1', tag: 'Decklists', route: 'https://ygorganization.com/cdp_labrynth60/', date: 'July 4, 2022', author: 'Quincymccoy'},
      {id: 2, title: 'Creative Deck Profile: Byssted Branded, the Danger!s of Super Rejuvenation, ft. DABL Support', desc: 'Chaos Dragons return with Byssted Fury!', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/CDBanner_BysstedBranded_Small.png?w=450&ssl=1', tag: 'Casual Decklist', route: 'https://ygorganization.com/cdp_bysstedbranded/', date: 'July 2, 2022', author: 'Quincymccoy'},
      {id: 3, title: 'Creative ChannelSide Chat: Upstart Goblin Explained in about 5 Minutes', desc: 'Why is Upstart Good? Why run Upstart in decks more than 40 cards?', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/06/CDBanner_CSC_Upstart_Small.png?w=450&ssl=1', tag: 'Strategy', route: 'https://ygorganization.com/csc_upstart/', date: 'July 1, 2022', author: 'Quincymccoy'},
      {id: 4, title: '[VBEX Lore] Number 5: Eldlich', desc: 'Journey into the depths of endless greed!', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2021/12/EldlichThrone.png?resize=730%2C445&ssl=1', tag: 'Card Lore', route: 'https://ygorganization.com/bothbothisgood/', date: 'December 18, 2021', author: 'NeoArkadia'},
      {id: 5, title: '[Card Lore] The World Legacy', desc: 'And now, the story everyone’s been waiting for…', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2020/11/TheWorldLegacy.png?w=304&ssl=1', tag: 'Must Read Card Lore', route: 'https://ygorganization.com/atinytaleoftimeconcerningwarbetweenfriends/', date: 'November 23, 2020', author: 'NeoArkadia'},
      {id: 6, title: '[TCG] OTS Tournament Pack 20', desc: 'She’s coming to murder all the dragons.', image: 'https://i0.wp.com/ygorganization.com/wp-content/uploads/2022/07/GhostReaperIsSoDoneWithYourHijinks.png?resize=512%2C445&ssl=1', tag: 'Set Spoilers', route: 'https://ygorganization.com/tcg-ots-tournament-pack-20/', date: 'July 2, 2022', author: 'Sanokal'},
    ]
  }),
  methods: {
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
  }
};
</script>