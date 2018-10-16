<style lang="scss" scoped>
  .main-login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(/static/images/new/login1/background1.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
    color: #ffffff;
    background-attachment: fixed;
  }
  /* 大屏 */
  @media screen and (min-height: 802px) {
    .login-box {
      width: 380px;
      height: 484px;
      position: relative;
      left: 68%;
      top: 23%;
      background-color: rgba(170,176,186,0.3);
      .login-title {
        font-size: 28px;
        text-align: center;
        padding-top: 50px;
        margin-top: 52px;
        letter-spacing: 2px;
        span {
          font-weight: 700 !important;
        }
      }
      .login-form1 {
        width: 80%;
        margin: 0 auto;
        margin-top: 60px;
      }
    }
    .grad {
      margin-top:20px;
      background: -webkit-linear-gradient(left, #ffbc52 , #ee9247); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right,  #ffbc52 , #ee9247); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right,  #ffbc52 , #ee9247); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #ffbc52 , #ee9247); /* 标准的语法 */
      height: 50px;
      font-size: 24px;
      font-weight: bold;
      border: none;
    }
  }
  /* 小屏 */
  @media screen and (max-height: 801px) {
    .login-box {
      width: 285px;
      /*height: 325px;*/
      position: relative;
      left: 68%;
      top: 23%;
      background-color: rgba(170,176,186,0.3);
      .login-title {
        font-size: 16px;
        padding-top: 20px;
        text-align: center;
        margin-top: 34px;
        letter-spacing: 2px;
        span {
          font-weight: 700 !important;
        }
      }
      .login-form1 {
        width: 80%;
        margin: 0 auto;
        margin-top: 24px;
        padding-bottom: 34px;
      }
    }
    .grad {
      background: -webkit-linear-gradient(left, #ffbc52 , #ee9247); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #ffbc52 , #ee9247); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #ffbc52 , #ee9247); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #ffbc52 , #ee9247); /* 标准的语法 */
      height: 36px;
      border: none;
      span {
        line-height: 36px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .codeBtn{
    height:32px;
    width: 75px;
    line-height:32px;
    font-size: 18px;
    letter-spacing:3px;
    color: #053d84;
    background: #f2f2f5;
    margin: 0 0 0 0;
    position: absolute;
    left: 115px;
    top: 2px;
    outline:none;
    cursor: pointer;
  }
  .itemright {
    display: inline-block;
    float: right;
  }
  .inputCode {
    width: 110px !important;
    margin-right: 80px;
  }
  .footer {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    //   height: 5%;
    color:rgba(161,161,161,1);
    width: 100%;
    text-align: center;
  }

  .footer .name-font {
    padding: 3px 0;
  }

  .name-font .c {
    line-height: 24px;
    text-align: center;
  }
  .beianhao{
    color: #feb951
  }
</style>

<template>
  <div class="main-login">
    <div class="login-box">
      <div class="login-title">
        <span>知豆电动汽车</span><br/>
        <span>大数据展示平台</span>
      </div>
      <div class="login-form1">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" autocomplete="off">
          <Form-item label="" prop="userName">
            <div class="logininfo">
              <i-input v-model="formValidate.userName" placeholder="请输入您的账号" size="large" autocomplete="off" @on-blur="nameBlur(formValidate.userName)" @keyup.enter.native="enterKey($event, 'formValidate', 'userName')" :maxlength="16">
            <span slot="prepend">
              <Icon :size="22" type="ios-person-outline" color="#ffffff"></Icon>
            </span>
              </i-input>
            </div>
          </Form-item>
          <Form-item label="" prop="password">
            <div class="logininfo">
              <i-input v-model="formValidate.password" placeholder="请输入您的密码" size="large" type="password" autocomplete="off"  @keyup.enter.native="enterKey($event, 'formValidate')" :maxlength="16">
             <span slot="prepend">
              <Icon :size="22" type="ios-locked-outline" color="#ffffff"></Icon>
            </span>
              </i-input>
            </div>
          </Form-item>
          <Form-item label="" v-if="isShow" class="itemright" prop="verCode">
            <div class="vercode">
              <i-input placeholder="请输入验证码" size="large" class="inputCode" style="" v-model="formValidate.verCode" v-if="isShow"></i-input>
              <input type="button"  id="code" class="codeBtn" @click="createCode"  v-model="checkCode"  v-if="isShow"/>
            </div>
          </Form-item>
        </Form>
        <Button type="primary" size="large" class="grad" long :loading="modal_loading"
                @click="handleSubmit('formValidate')" id="loginBtn">登 录
        </Button>
      </div>
    </div>
    <div class="footer">
      <div class="name-font">
        <span class="c">知豆电动汽车有限公司</span>
        <span class="c" style="margin-left: 30px;">Copyright © 2015(c) All Rights Reserved   <a class="beianhao">浙ICP备16014011号</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getPublicKey, login } from '@/service/userService/user';
  export default {
    name: 'login',
    data () {
      return {
        isShow: false,
        verCode: '',
        loginModal: true,
        checkCode: '',
        modal_loading: false,
        count: '',
        code: '',
        formValidate: {
          userName: '',
          password: '',
          verCode: ''
        },
        password: '',
        ruleValidate: {
          userName: [
            {required: true, message: '账号不能为空', trigger: 'change'}
//            {pattern: '^[0-9a-zA-Z_]{1,16}$', message: '账号格式不正确', trigger: 'change'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'change'}
//            {pattern: '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$', message: '密码格式不正确', trigger: 'change'}
          ],
          verCode: [
            {required: true, message: '验证码不能为空', trigger: 'blur'}
          ]
        },
        menuTree: [],
        codeInfo: {count: 0, starTime: '', endTime: ''}
      };
    },
    mounted () {
      this.createCode();
    },
    methods: {
      // input监控事件
      enterKey (event, name) {
        if (event) {
          if (event.keyCode === 13) {
            this.handleSubmit(name);
          }
        }
      },
      // 用户名输入框失去焦点
      nameBlur (userName) {
        let cookieUserName = this._hyTool.getCookie(userName);
        if (cookieUserName) {
          this.isShow = true;
        } else {
          this.isShow = false;
          this.formValidate.verCode = '';
        }
      },
      // login
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.modal_loading = true;
            let loginInfo = {};
            loginInfo.userName = this.formValidate.userName;
            loginInfo.timeZone = 'CCT';
            // 多次错误登录
            let cookieUserName = this._hyTool.getCookie(loginInfo.userName);
            // console.log(cookieUserName);
            if (cookieUserName) {
              cookieUserName = JSON.parse(cookieUserName);
            } else {
              cookieUserName = {count: 0, starTime: '', endTime: ''};
              this.codeInfo = {count: 0, starTime: '', endTime: ''};
            }
            // 获取公钥
            getPublicKey({}, res => {
              let jse = new this.$jsEncrypt.JSEncrypt();
              jse.setPublicKey(res);
              loginInfo.password = jse.encrypt(this.formValidate.password);
              // 登录
              login(loginInfo, null, res => {
                this._hyTool.setStore('loginInfo', res);
                let func = () => {
                  this._hyTool.deleteCookie(loginInfo.userName);
                  this.$Notice.success({
                      title: '登录成功!'
                    });
                    setTimeout(() => {
                      this.$router.push('/homePage');
                      this.modal_loading = false;
                    }, 500);
                };
                if (cookieUserName.count < 2) {
                  func();
                } else if (cookieUserName.count > 1 && this.formValidate.verCode.toUpperCase() === this.checkCode) {
                  func();
                } else if (cookieUserName.count > 1 && this.formValidate.verCode.toUpperCase() !== this.checkCode) {
                  this.createCode();
                  this.formValidate.verCode = '';
                  //
                  this.isShow = true;
                  this.modal_loading = false;
                  this.$Notice.error({
                    title: '验证码错误'
                  });
                  return;
                }
              }, ret => {
                this.modal_loading = false;
                this.$Notice.error({
                  title: '登录失败',
                  desc: ret
                });
                if (cookieUserName.count > 1) {
                  this.createCode();
                  this.formValidate.verCode = '';
                  //
                  this.isShow = true;
                }
                this.codeInfo.count += 1;
                if (this.codeInfo.count === 1) {
                  this.codeInfo.starTime = new Date().getTime();
                  this.codeInfo.endTime = this.codeInfo.starTime + 60 * 1000;
                }
                this._hyTool.setCookieM(loginInfo.userName, JSON.stringify(this.codeInfo), this.codeInfo.endTime);
              });
            }, ret => {
//              this.handleSubmit('formValidate');
              this.modal_loading = false;
              this.$Notice.error({
                title: '获取公钥失败',
                desc: ret
              });
            });
          } else {
            // this.$Notice.error({
            //   title: '请输入用户名、密码'
            // });
          }
        });
      },
      // 验证码
      createCode () {
        // 首先默认code为空字符串
        let checkCode = '';
        // 设置长度，这里看需求，我这里设置了4
        let codeLength = 4;
        // 设置随机字符
        let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 循环codeLength 我设置的4就是循环4次
        for (let i = 0; i < codeLength; i++) {
          // 设置随机数范围,这设置为0 ~ 36
          let index = Math.floor(Math.random() * 36);
          // 字符串拼接 将每次随机的字符 进行拼接
          checkCode += random[index];
        }
        // 将拼接好的字符串赋值给展示的Value
        this.checkCode = checkCode;
      }
    }
  };
</script>
