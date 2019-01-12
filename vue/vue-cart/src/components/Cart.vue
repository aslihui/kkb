<template>
  <div>
    <table border="1px" cellpadding="0" cellspacint="0">
      <tr>
        <th>
          <input type="checkbox" id="checkAllInput" v-model="isCheckedAllFn" @click="allCheck" />
          <label for="checkAllInput">全选</label>
        </th>
        <th>课程</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(c, i) in cart" :key="i">
        <td><input type="checkbox" v-model="c.active" /></td>
        <td>{{c.text}}</td>
        <td>￥{{c.price}}</td>
        <td><button @click="minus(i)">-</button> {{c.count}} <button @click="addCount(i)">+</button></td>
        <td>￥{{c.count * c.price}}</td>
      </tr>
      <tr>
        <td>总计：</td>
        <td colspan="2">已选择{{activeLength}}/{{countLength}}件</td>
        <td colspan="2">共计：￥{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "cart",
    props: ["name", "cart"],
    data(){
      return {
        
      }
    },
    methods:{
      minus(i){
        const count = this.cart[i].count;
        if(count == 1){
          if(window.confirm('你确定要从购物车删除吗？')){
           this.removeOne(i);
          }
        }else{
          this.cart[i].count -= 1;
        }
      },
      addCount(i){
        this.cart[i].count+= 1;
      },
      removeOne(i){
        this.cart.splice(i, 1);
      },
      allCheck(e){
        if(e.target.checked){
          this.cart.forEach(c => {
            c.active = true;
          });
          return;
        }else{
          this.cart.forEach(c => {
            c.active = false;
          });
        }
       
      }
    },
    computed:{
      //获取总数量
      countLength(){
        return this.cart.length;
      },
      //获取选定项数量
      activeLength(){
        return this.cart.filter(c => c.active).length;
      },
      //获取 是否全选
      isCheckedAllFn: {
        get(){
          //this.countLength && this.activeLength (当购物车没有任何商品的时候 都为0 都为false) 
          return this.countLength && this.activeLength && this.countLength == this.activeLength  ? true : false;
        },
        set(){}
      },
      //获取总金额
      total(){
        let num = 0;
        this.cart.forEach(c => {
          c.active ? num += c.price * c.count : '';
        });
        return num;
      }
    }
  }
</script>

<style scoped>

</style>