<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <template v-if="this.$vuetify.theme.dark">
        <nuxt-link to="/" class="brandText">
          <v-toolbar-title v-text="title" class="brand" />
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/" class="brandText">
          <v-toolbar-title v-text="title" class="blackText" />
        </nuxt-link>
      </template>
      <v-spacer />

      <div class="flex-row-reverse d-flex">
        <v-switch
          @click="toogleTheme"
          text
          v-model="Dark"
          class="ma-4"
          :label="theme"
        ></v-switch>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <template>
      <v-footer :absolute="!fixed" app>
        <v-row justify="center" no-gutters>
          <v-col class="py-4 text-center lighten-2 white--text" cols="12">
            <strong> Iblcouture </strong>— <strong>store</strong>
          </v-col>
          <v-col class="py-4 text-center lighten-2 white--text" cols="12">
            Contact — <strong>08087654432</strong>
          </v-col>
          <v-col class="py-4 text-center lighten-2 white--text" cols="12">
            {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  async fetch() {
    try {
      await this.$store.dispatch("fetchProducts");
    } catch (error) {
      console.log("error", error);
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Iblcouture"
    };
  },
  computed: {
    theme() {
      if (this.$vuetify.theme.dark) {
        return "Light";
      } else {
        return "Dark";
      }
    }
  },
  methods: {
    toogleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
<style>
.brandText {
  text-decoration: none;
}
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #fff;
}
.blackText {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #000;
}
</style>
