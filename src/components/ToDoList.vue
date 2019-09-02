<template>
  <nav class="TodoList">
    <section class="main">
      <article>
        <h2>Jquery To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
      </article>
      <article>
        <input v-model="items" class="input-text" type="text" name="ListItem"  />
        <button @click="senditemname()">Add</button>
        
      </article>
      <itemList v-bind:itemlists="itemlists"></itemList>
      <article class="bottom">
        <div>All</div>
        <div>Active</div>
        <div>complete</div>
      </article>
    </section>
  </nav>
</template>

<script type="text/ecmascript-6">
import itemList from './itemList'
export default {
  name: "TodoList",
  data() {
    return {
        items:"", 
        itemlists: []
    };
  },
  methods:{
      senditemname:function(){
          this.itemlists.push(this.items);
      }
  },
  components: {
      itemList
  }
};
</script>

<style scoped>
.TodoList {
  display: flex;
  justify-content: center;
}
.main {
  padding: 20px;
  width: 400px;
  background: white;
  border-radius: 5px;
}

.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
}
button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
button:hover {
  opacity:0.7;
  cursor: pointer;
}
.list {
  margin: 20px;
}
.bottom {
  display: flex;
  flex-wrap: nowrap;
}
.bottom div {
  padding: 10px;
  margin: 5px 10px;
  color: #fc999b;
}
.bottom div:hover {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
</style>
