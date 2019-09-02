<template>
    
    <div>
        <ol>
           <li v-for="(item,index) in itemlists" :key="item" :index="index" >
               <item v-bind:item="item"></item>
               </li> 
        </ol>
    </div>
</template>

<script type="text/ecmascript-6">
import item from './item'
export default {
  name: "itemList",
  props:['itemlists'],
  data() {
    return {
       
    };
  },
  components: {item}
};
</script>


