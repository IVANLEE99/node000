<template>
  <div>
    <h1 v-if="user&&user._id">修改用户</h1>
    <h1 v-else>新增用户</h1>
    <Form :model="USER" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="USER.name" placeholder="输入姓名"></Input>
      </FormItem>
      <FormItem label="年龄">
        <InputNumber style="width:100%;" :max="200" :min="1" v-model="USER.age"></InputNumber>
      </FormItem>
      <FormItem label="兴趣爱好">
        <CheckboxGroup v-model="USER.hobbies">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="邮件地址:">
        <Input v-model="USER.email" placeholder="输入邮件地址"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submit">提交</Button>
        <Button style="margin-left: 8px" @click="cancel">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserDetail",
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      UserDetail: "",
      loading: false,
      USER: { hobbies: [], name: "", age: "", email: "" }
    };
  },
  watch: {
    user: {
      deep: true,
      immediate: true,
      handler: function(val, oldVal) {
        let { hobbies = [], name, _id = "", age = "", email = "" } = val;
        if (_id) {
          this.USER = { hobbies, name, _id, age, email };
        } else {
          this.USER = { hobbies, name, age, email };
        }
      }
    }
  },
  methods: {
    submit() {
      if (this.user._id) {
        this.update();
      } else {
        this.add();
      }
    },
    async update() {
      this.loading = true;
      try {
        await axios.post("/modifyUser", this.USER);
        this.$Message.info("更新成功!");
        this.$router.push({
          path: "/"
        });
      } catch (error) {
        console.error(error);
        this.$Message.error("更新失败!");
      }
      this.loading = false;
    },
    async add() {
      this.loading = true;
      try {
        await axios.post("/addUser", this.USER);
        this.$Message.info("新增成功!");
        this.$router.push({
          path: "/"
        });
      } catch (error) {
        console.error(error);
        this.$Message.error("新增失败!");
      }
      this.loading = false;
    },
    cancel() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.UserDetail {
}
</style>
