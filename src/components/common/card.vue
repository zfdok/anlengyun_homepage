<template>
  <div class="mycard" id="mycardself">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style >
.mycard {
  border-radius: 1%;
  overflow: hidden;
  box-shadow: 0 0 10px #eee;
}
</style>