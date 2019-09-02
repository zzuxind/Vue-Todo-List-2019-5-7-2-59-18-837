<template>
<nav class="Item" v-bind:class="{choosed:ischoosed}" >
    <input type="checkbox" v-model="ischoosed"/><span>{{item}}</span>
  </nav>
    
</template>
<script type="text/ecmascript-6">

export default {
  name: "item",
  props:['item'],
  data() {
    return {
       ischoosed:false
    };
  },
  components: {}
};
</script>
<style scoped>

.Item {
  color: #999;
}
.choosed {
  text-decoration: line-through;
}
</style>
