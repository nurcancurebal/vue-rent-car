<template>
  <div>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 540px"
      @click="modalShow = !modalShow"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="item.image[0]" class="rounded-0" />
        </b-col>
        <b-col md="6">
          <b-card-body :title="item.title">
            <b-card-text>
              {{ item.about }}
            </b-card-text>
            <div class="priceBucket">
              <b-card-text class="priceText"> ${{ item.price }} </b-card-text>
              <b-icon class="h4 mb-2" icon="bucket" variant="danger" />
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-modal v-model="modalShow">
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="item.image[0]" class="rounded-0" />
          </b-col>
          <b-col md="6">
            <b-card-body :title="item.title">
              <b-card-text>
                {{ item.about }}
              </b-card-text>
              <div class="priceBucket">
                <b-card-text class="priceText"> ${{ item.price }} </b-card-text>
                <button @click="getInformation">Get Information</button>
                {{ this.$store.state.carInfo }}
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    getInformation() {
      this.$store.commit("setInformation", this.item);
    },
  },
};
</script>

<style>
.priceText {
  font-weight: bold;
  font-size: 18px;
}
.priceBucket {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>