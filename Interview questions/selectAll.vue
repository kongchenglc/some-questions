<template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script><style type="unprocessed" id="AutoprefixerIn">%css%</style>
<div id="theId">
  <input type="checkbox" v-model="selectAll" @click={selectAllFun()}> 全选
  <div v-for="(item, value, index) in selectList">
      <input key={index}
             type="checkbox" 
             v-model='item'
             @click={selectOne(value)}>{{value}}{{item}}{{index}}
  </div>
</div>
</template>


<script>
new Vue({
    el: "#theId",
    data: function() {
      return {
        selectList: {
            '职位A':true,
            '职位B':true,
            '职位C':true,
        },
      };       
    },
    methods: {
      selectAllFun() {
        this.selectAll = !this.selectAll
      },
        selectOne(item) {
            this.selectList[item] = !this.selectList[item]
            console.log(this.selectList)
        },
    },
    computed: {
        selectAll:{
            set: function(value){
              console.log(this.selectList)
              console.log(value)
                if(value === true) {
                    for(let item in this.selectList) {
                        this.selectList[item] = true
                    }
                } else {
                    for(let item in this.selectList) {
                        this.selectList[item] = false
                      
                    }
                }
                console.log(this.selectList)
            },
            get: function() {
                let result = true
                for(let item in this.selectList) {
                    if(this.selectList[item] === false) {
                        result = false
                    }
                }
                return result
            }
        },
    }
})
</script>




