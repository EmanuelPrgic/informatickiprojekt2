<template>
  <div class="search">
    <v-container>
      <v-row>
        <v-col xs="4"
        sm="4"
        md="5"
        lg="6"
        xl="7">
          <v-text-field type="text" placeholder="Search..." v-model="input" filled dense     
          label="Search"
          append-icon="mdi-magnify"
          @click:append="dohvatiAPI() ">
          </v-text-field>
        <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
            {{ name}}
            </v-btn>
          </template>
          <span>Click</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title @click="changeType(item.value, item.title)">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu></v-col>
        <v-col 
        xs="8"
        sm="8"
        md="7"
        lg="6"
        xl="5"
        >
          <v-row v-for="card in cards" :key="card.id">
            <br><br>
            <v-card
    :loading="loading"
    class="mx-auto my-12"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
    v-for="(stuff) in card.card_images.slice(0,1)" :key="stuff.id"
      :src="stuff.image_url"
    ></v-img>

    <v-card-title> {{ card.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ card.type}} /
        {{ card.race}} /
        {{ card.attribute}}
      </div>

      <div>{{ card.desc}} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
          </v-row>
          <br><br>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: '',
    cards: [],
    forSearch: '',
    name: 'Categories',
    count: 0,
    page: 1,
    length: 0,
    test: '',
    show: false,
    pageOfItems: 0,
    items: [
      { title: 'Specific Name', value: 'name='},
      { title: 'Contains', value: 'fname='},
      { title: 'Archetype', value: 'archetype='},
      { title: 'Attribute', value: 'attribute='},
      { title: 'Type', value: 'race='},
      { title: 'Level', value: 'level='},
      { title: 'Attack', value: 'atk='},
      { title: 'Defense', value: 'def='},
      { title: 'Sets', value: 'cardset='},
    ]
  }),
    methods: {
      dohvatiAPI: function() {
        if(this.input != "" || this.forSearch != ''){
        this.axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?" + this.forSearch + this.input + "&sort=type")
        .then(response => {
          this.cards = response.data.data
          for(let i = 0;i <= this.cards.length;i++){
          this.length++
        }
        }
        )
      }
},
      changeType: function(type, name) {
        this.forSearch = type
        this.name = name
      }
}
}

</script>

<style>
  #slika {
    padding-top: 10px;
  }
  #sets {
    padding-top: 10px;
  }
</style>
