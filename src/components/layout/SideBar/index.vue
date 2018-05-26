<template>
  <div class="side-bar">
    <div class="user-info">
      <div class="user-avatar">
        <img src="../../../assets/images/guild-avatar.gif" alt="啥会长" />
      </div>
      <div class="user-con">
        <div class="user-con-name">啥会长</div>
        <div class="user-con-id">1619850183</div> 
      </div>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-left"
      @open="handleOpen"
      :collapse="isCollapse"
      @close="handleClose"
      :router="useRouter"
      >
      <sidebar-item :model="model" :key="model.meta.id" v-for="model in routes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from "./SidebarItem.vue";
import RoutesConfig from '@/configs/routes-config';
export default {
  name: 'SideBar',
  data () {
    return {
      routes: RoutesConfig,
      useRouter: true
    }
  },
  created(){
    console.log(this.useRouter);
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    SidebarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-info {
    position: relative;
    height: 56px;
    padding: 20px 10px;
  }
  
  .user-info .user-avatar {
    position: absolute;
  }
  .user-info .user-avatar img {
    width: 56px;
    height: 56px;
    border-radius: 56px;
  }
  .user-info .user-con {
    padding-left: 68px;
  }

  .user-info .user-con .user-con-id {
    padding-top: 8px;
  }

  .user-info .user-con .user-con-name {
    padding-top: 8px;
  }

  .layout-small .user-info {
    height: 42px;
  }
  .layout-small .user-info .user-con {
    display: none;
  }

  .layout-small .user-info .user-avatar {
    position: relative;
    width: 100%;
  }
  .layout-small .user-info .user-avatar img {
    width: 42px;
    height: 42px;
    line-height: 42px;
  }
  .side-bar {
    width: 200px;
  }
  .el-menu {
    border: none;
  }
  .side-bar .el-menu-vertical-left {
    border: none;
  }

  .side-bar .el-submenu__title i, .side-bar .el-menu-item i {
    color: #ffffff;
  } 
  .layout-small .side-bar {
    width: 64px;
  }
</style>