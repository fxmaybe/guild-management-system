<template>
  <div class="anchor-management">
    <div class="manage-tool">
      日期范围：
      <span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </span>
      <span class="search-input">
        <el-input
          placeholder="请输入内容"
          v-model="value2">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </span>
      <el-button :class="['search-btn']" @click="search" type="primary">搜索</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'anchorManagement',
  data() {
  	return {
      value1: '',
      value2: ''
  	}
  },
  components: {
  },
  methods: {
    search() {
      console.log(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.anchor-management {
  padding-left: 50px; 
  padding-top: 20px;
}
.search-input .el-input {
  margin-left: 20px;
  width: 220px;
}
.search-btn {
  margin-left: 10px;
}
</style>
