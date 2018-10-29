<template>
  <div class="linda">
    <h1>Afsluiten verzekering</h1>
    <form>
    <fieldset>
      <label>Uw naam</label>
      <input type="text">
    </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Linda",
  data() {
    return {
      msg2: "Welcome Linda"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
fieldset {
  border: 0;
}
</style>
