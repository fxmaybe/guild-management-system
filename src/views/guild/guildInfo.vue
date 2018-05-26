<template>
  <div class="guild-info clearfix">
    <div class="guild-id">签约公会：634534345&nbsp;&nbsp;<span @click="addGuild" class="guild-add">申请签约</span></div>
    <div class="guild-avatar">
      <img src="../../assets/images/guild-avatar.jpg" alt="我是啥公会" />
    </div>
    <div class="guild-con">
      <table>
        <tr>
          <td class="center" style="width: 136px;">公会ID</td><td style="width: 28%; color: red;">{{gData.gid}}</td>
          <td class="center" style="width: 136px;">公会名称</td><td>{{gData.gname}}</td>
        </tr>
        <tr>
          <td class="center">会长比邻号</td><td>{{gData.gownerid}}</td>
          <td class="center">联系方式 </td><td>{{gData.gcontact}}</td>
        </tr>
        <tr>
          <td class="center">公会简介</td>
          <td colspan="3">
            {{gData.gdes}}
          </td>
        </tr>
      </table>
      <el-button :class="['edit-btn']" @click="editGuildInfo" type="primary">编辑</el-button>
    </div>
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="92px" style="width: 80%; max-width: 500px; margin-left:50px;">
        <el-form-item label="公会头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
             ref="upload"
            :on-success="handleAvatarSuccess"
            :auto-upload="false"
            :on-change="beforeAvatarUpload"
            >
            <div class="avatar-uploader-img" v-if="temp.avatar"><img :src="temp.avatar" class="avatar">（tip: 点击可重新选择）</div>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="公会ID" prop="gid">
          <el-input v-model="temp.gid" disabled></el-input>
        </el-form-item>
        <el-form-item label="公会名称" prop="gname">
          <el-input v-model="temp.gname" placeholder="请输入公会名称"></el-input>
        </el-form-item>
        <el-form-item label="会长比邻号" prop="gownerid">
          <el-input v-model="temp.gownerid" disabled></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="gcontact">
          <el-input v-model="temp.gcontact" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item label="公会简介">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入公会简介" v-model="temp.gdes">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData" :loading="locked">{{locked ? "提交中" : "编辑"}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        data(){
            return {
              dialogFormVisible: false,
              locked: false,
              gData: {
                avatar: require("../../assets/images/guild-avatar.jpg"), 
                gid: "Xay2ekID12SAd5",
                gname: "啥公会",
                gownerid: "啥会长",
                gcontact: "1234567890",
                gdes: "我是简介啦 我是简介啦我是简介啦 我是简介啦我是简介啦 我是简介啦我是简介啦 我是简介啦我是简介啦"
              },
              temp: {
                avatar: "",
                gid: "",
                gname: "",
                gownerid: "",
                gcontact: "",
                gdes: ""
              },
              rules: {
              }
            }
        },
        mounted() {
        },
        components: {
        },
        methods: {
          editGuildInfo() {
            let that = this;
            that.temp = Object.assign({}, that.gData);   
            that.dialogFormVisible = true
            that.$nextTick(() => {
              that.$refs["dataForm"].clearValidate()
            })
          },
          addGuild () {
            let that = this;
            that.$msgbox({
              title: "提示",
              message: "申请签约功能暂未开放！请留意APP公告。",
              confirmButtonText: "我知道了",
              type: "warning",
              callback: action => {
              }
            });
          },
          submitUpload() {
            let that = this;
            that.$refs.upload.submit();
          },
          updateDataAction() {
            return new Promise(function(resolve, reject) {
                setTimeout(function(){
                  resolve();
                }, 1000);
            });  
          },
          updateData() {
            let that = this;
            if(that.locked){
              return;
            }
            that.locked = true;

            that.submitUpload();
            that.$refs["dataForm"].validate((valid) => {
              if (valid) {
                const tempData = Object.assign({}, that.temp)
                that.updateDataAction(tempData).then((res) => {
                  that.locked = false;
                  that.gData = Object.assign({}, that.temp);
                  that.dialogFormVisible = false
                  that.$notify({
                    title: "成功",
                    message: "更新成功",
                    type: "success",
                    duration: 2000
                  });
                }).catch(function(res){
                  that.locked = false;
                });
              }
            })
          },
          handleAvatarSuccess(res, file) {
            let that = this;
            
          },
          beforeAvatarUpload(file) {
            let that = this;
            const isJPG = file.raw.type === 'image/jpeg';
            const isLt2M = file.raw.size / 1024 / 1024 < 2;

            if (!isJPG) {
              that.$message.error('上传头像图片只能是 JPG 格式!');
            } else if (!isLt2M) {
              that.$message.error('上传头像图片大小不能超过 2MB!');
            } else {
              that.temp.avatar = URL.createObjectURL(file.raw);  
            }
            
            return isJPG && isLt2M;
          }
        }
        
    }
</script>

<style>
  .center {
    text-align: center;
  }
  .guild-id {
    margin-bottom: 30px;
  }

  .guild-add {
    color: #409EFF;
    text-decoration: underline;
    cursor: pointer;
  }
  .guild-info {
    padding-top: 50px; 
    padding-left: 50px;
  }
  .guild-avatar {
    position: absolute;
    padding: 12px 20px 20px 0;
  }
  .guild-avatar img{
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }

  .guild-con {
    -moz-box-sizing: border-box;  
    -webkit-box-sizing: border-box; 
    -o-box-sizing: border-box; 
    -ms-box-sizing: border-box; 
    box-sizing: border-box; 
    padding-left: 145px;
    padding-right: 25px;
    max-width: 1360px;
    width: 100%;
    
  }
  .guild-con table{
    border-collapse: collapse;
    margin-bottom: 10px;
    width: 100%; 
    table-layout:fixed;
  }
  .guild-con td{
    border: 1px #e5e5e5 solid;
    padding: 11px;
    color: #333;
    line-height: 1.5;
  }

  .edit-btn {
    float: right;
    margin-top: 20px;
  }
  
  .avatar-uploader .el-upload .avatar-uploader-img {
    height: 72px;
    line-height: 72px;
    padding-left: 82px;
    position: relative;
    color: #bbb;
  }
  .avatar-uploader .el-upload .avatar-uploader-img img {
    border: 1px dashed #d9d9d9;
    border-radius: 72px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 72px;
    height: 72px;
    line-height: 72px;
    text-align: center;
  }
  .avatar {
    width: 72px;
    height: 72px;
    display: block;
  }

  .el-form .el-form-item:first-child label {
    padding-top: 16px;
  }
</style>