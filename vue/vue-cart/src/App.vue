<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" name="text" v-model="kc" required placeholder="请输入课程" />
    <input type="number" name="price" required v-model="price" placeholder="请输入价格" />
    <button @click="addGood">点击增加商品</button>
    <table border="1p" cellpadding="0" cellspacing="0">
      <tr>
        <th>课程</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(good, index) in goods" :key="index">
        <td>{{good.text}}</td>
        <td>￥{{good.price}}</td>
        <td>
          <button @click="addCart(index)">加入购物车</button>
        </td>
      </tr>
    </table>
    <hr />
    <cart :name="name" :cart="cart"  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'
import axios from 'axios'

export default {
  name: 'app',
  data (){
    return {
      kc: "",
      price: "",
      cart: [],
      name: "",
      goods: []
    }
  },
  components: {
    HelloWorld,
    Cart
  },
  created() {
    let that = this;
    axios.get("/api/goods-").then(function(res){
      that.goods = res.data.list;
    }).catch(function(err){
      console.log("接口调用错误: "+err);
    })
  },
  methods: {
    addGood(){
      if(this.kc == ""){
        alert("课程不能为空！");
      }else if(this.price == ""){
        alert("价格不能为空！");
      }else{
        this.goods.push({text: this.kc, price: this.price});
        this.kc = "";
        this.price = "";
      }
    },
    addCart(index){
      const good = this.goods[index];
      var ret = this.cart.find(v => v.text === good.text);
      if(ret){
        ret.count += 1;
      }else{
        this.cart.push({
          ...good,
          active: true,
          count: 1
        })
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
table{margin: 20px auto}
table td, table th{padding: 10px;}
</style>
