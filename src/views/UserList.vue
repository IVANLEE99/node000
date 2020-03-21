<template>
  <div>
    <h1>
      用户列表
      <Button type="primary" @click="addUser" style="margin-right:15px;">添加用户</Button>
      <Button type="primary" @click="getUserLists">刷新</Button>
    </h1>

    <Table :columns="column" :data="UserList">
      <template slot-scope="{ row, index }" slot="option">
        <Button type="primary" size="small" style="margin-right: 5px" @click="modify(row)">修改</Button>
        <Button type="error" size="small" @click="remove(row)">Delete</Button>
      </template>
      <template slot-scope="{ row, index }" slot="hobbies">
        <label v-for="(item, index) in row.hobbies" :key="index">{{index!=0?'--'+item:item}}</label>
      </template>
    </Table>
  </div>

  <!-- <div>{{UserList.length}}</div> -->
</template>

<script>
import axios from "axios";
// axios.defaults.baseURL = "/api";
export default {
  name: "UserList",
  data() {
    return {
      UserList: [],
      column: [
        { title: "_id", key: "_id" },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "兴趣爱好",
          slot: "hobbies"
        },
        {
          title: "邮箱",
          key: "email"
        },
        {
          title: "操作",
          slot: "option"
        }
      ]
    };
  },
  methods: {
    async getUserLists() {
      try {
        this.$Spin.show();
        let { status, data } = await axios.get("/listUsers");
        console.log(data);
        this.UserList = data || [];
      } catch (error) {
        //   this.$
        this.$Spin.hide();
      }
      setTimeout(() => {
        this.$Spin.hide();
      }, 300);
    },
    modify(row) {
      this.$router.push({
        name: "UserUpdate",
        params: {
          user: row
        }
      });
    },
    async remove(row) {
      if (row && row._id) {
        try {
          let result = await axios.post("/removeUser", row);
          this.$Message.info("删除成功~");
          this.getUserLists();
        } catch (error) {
          this.$Message.error("删除失败~");
        }
      }
    },
    addUser() {
      this.$router.push({
        name: "UserAdd"
      });
    }
  },
  mounted() {
    this.getUserLists();
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function(val, oldVal) {
        this.getUserLists();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.UserList {
}
</style>
