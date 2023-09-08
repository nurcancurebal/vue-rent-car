<template>
  <b-form
    class="formReservation"
    style="margin-left: 200px"
    @submit.stop.prevent
  >
    <label class="mr-sm-2">Pick location</label>
    <b-form-select
      v-model="pickLocationValue"
      :options="pickLocation"
      size="sm"
      class="mt-1"
    />
    <label class="mr-sm-2 mt-2">Return location</label>
    <b-form-select
      v-model="returnLocationValue"
      :options="returnLocation"
      size="sm"
      class="mt-1"
    />
    <label class="mt-3" for="example-datepicker">Choose a pick date</label>
    <div class="timeClass">
      <b-form-datepicker
        id="example-datepicker"
        v-model="pickDate"
        class="mr-2"
      />

      <b-form-timepicker v-model="pickTime" locale="en" />
    </div>

    <label class="mt-2" for="example-datepicker">Choose a return date</label>
    <div class="timeClass">
      <b-form-datepicker
        id="example-datepicker"
        v-model="returnDate"
        class="mr-2"
      />
      <b-form-timepicker v-model="returnTime" locale="en" />
    </div>
    <b-button class="mt-3" @click="gotoRent" block variant="outline-dark">
      Search
    </b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
      pickLocation: ["istanbul", "izmir", "antalya", "eskişehir"],
      pickLocationValue: "istanbul",
      returnLocation: ["istanbul", "izmir", "antalya", "eskişehir"],
      returnLocationValue: "istanbul",
      pickDate: "",
      pickTime: "",
      returnDate: "",
      returnTime: "",
      userSelect: [],
    };
  },
  methods: {
    gotoRent() {
      this.userSelect.push(
        this.pickLocationValue,
        this.returnLocationValue,
        this.pickDate,
        this.pickTime,
        this.returnDate,
        this.returnTime
      );

      const userSelect = this.userSelect;
      this.$router.push({ name: "Rent", params: { userData: userSelect } });
    },
  },
};
</script>

<style>
</style>