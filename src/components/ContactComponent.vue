<template>
  <div class="about">
    Ime: 
    <v-text-field placeholder="Unesite ime..." v-model="ime"> </v-text-field><br>
    Prezime:
    <v-text-field placeholder="Unesite prezime..." v-model="prezime"></v-text-field> <br>
    Email:
    <v-text-field placeholder="Unesite email..." v-model="email"></v-text-field> <br>

    <v-btn @click="openSnackbar()">Klikni za registraciju</v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="color"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Zatvori
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      snackbar: false,
      ime: '',
      prezime: '',
      email: '',
      text: '',
      color: '',
    }),
    methods: {
      openSnackbar: function() {
        if(this.ime == '' || this.prezime == '' || this.email == '') {
          this.text = 'Neuspjesno!'
          this.color = 'red'
          this.ime = ''
          this.prezime = ''
          this.email = ''
        }
        else {
          this.text = 'Uspjesno registrirano!'
          this.color = 'green'
          this.ime = ''
          this.prezime = ''
          this.email = ''
        }
        this.snackbar = true
      }
  }
}
</script>
