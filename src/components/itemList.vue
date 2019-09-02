<template>
    <div>
        <ol>
           <li v-for="(item,index) in itemlists" :key="item" :index=index>
               <input type="checkbox"
                      v-model="toggle"
                >{{item}}</li> 
        </ol>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: "itemList",
  props:['itemlists'],
  data() {
    return {
        
    };
  },
  components: {}
};
</script>
