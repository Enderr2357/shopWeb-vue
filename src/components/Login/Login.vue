<template>
	<Header></Header>
	<div class="login-boxtitle" style="height: 100px;">
		<div class="logoBig">
			<img src="../../images/logo.png" style="margin-left: 0px ; height: 100px;">
		</div>
	</div>

	<div class="login-banner">
		<div class="login-main">
			<div class="login-banner-bg"><span></span><img src="../../images/big.jpg" /></div>
			<div class="login-box" style="margin-top: 20px;">

				<h3 class="title">登录商城</h3>

				<div class="clear"></div>

				<div class="login-form" style="background: none; margin-top: 15px;">
					<form>
						<div class="user-name" style="margin-top: 20px;">
							<label for="user" class="loginIcon">
								<el-icon>
									<User />
								</el-icon>
							</label>
							<input type="text" v-model="useraccount" name="" id="user" placeholder="邮箱/手机/用户名">
						</div>
						<div class="user-pass" style="margin-top: 20px;">
							<label for="password" class="loginIcon">
								<el-icon>
									<Lock />
								</el-icon>
							</label>
							<input type="password" v-model="userpassword" name="" id="password" placeholder="请输入密码">
						</div>
					</form>
				</div>

				<div class="login-links">
					<label for="remember-me"><input id="remember-me" type="checkbox" class="remember">记住密码</label>
					<a href="#" class="am-fr">忘记密码</a>
					<br />
				</div>
				<div class="am-cf">
					<input type="submit" @click="login(useraccount, userpassword)" name="" value="登 录"
						class="am-btn am-btn-primary am-btn-sm">
				</div>
				<div class="am-cf">
					<input type="button" onclick="javascript:window.location.href='register.html'" value="注 册"
						class="am-btn am-btn-default am-btn-sm">
				</div>
				<div class="partner">

				</div>

			</div>
		</div>
	</div>

	<div class="footer">
		<div class="footer-hd">

		</div>
		<div class="footer-bd">
			<p>
				<a href="# ">联系我们</a>
				<a href="# ">网站地图</a>
			</p>
		</div>
	</div>
</template>

<script setup>
import Header from "../../layout/Header.vue";
import "../../css/amazeui.css"
import "../../css/dlstyle.css"
import "../../css/bootstrap.min.css"
import { ref } from "vue";
import { loginApi } from '../../api/login'
const isEmailValid = ref(Boolean)
const isNumValid = ref(Boolean)
const useraccount = ref('')
const userpassword = ref('')
const user = {
	code: ref(''),
	account: ref(''),
	password: ref('')
};
const login = (useraccount, userpassword) => {
	console.log(useraccount, userpassword)
	validateEmail(useraccount)
	if (isEmailValid.value) {
		console.log("账号是邮箱")
		isEmailValid.value = false;
		user.code = 1
	} else if (isNumValid.value) {
		console.log("账号是手机号")
		isNumValid.value = false;
		user.code = 2
	} else {
		console.log("账号是用户名")
		user.code = 3
	}
	user.account = useraccount
	user.password = userpassword
	getLoginResult()

}
const validateNum = (useraccount) => {
	const numRegex = /^\d{ 11, }$/g;
	isNumValid.value = numRegex.test(useraccount)

}
const validateEmail = (useraccount) => {
	const emailRegex = /\w[-.\w]*\@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn|edu|uk)/ig;
	isEmailValid.value = emailRegex.test(useraccount);

}

const getLoginResult = async () => {
	const res = await loginApi(user)
	console.log(res.data.result)
}
</script>

<style scoped>
.loginIcon {
	padding-top: 2px;
}

.remember {
	margin-bottom: 5px;
}</style>