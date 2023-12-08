<template>
	<Header></Header>
	<div class="login-boxtitle" style="height: 100px;">
		<div class="logoBig">
			<img src="../../images/logo.png" style="margin-left: 0px ; height: 100px;">
		</div>
	</div>

	<div class="login-banner" style="background: rgb(142,213,21);">
		<div class="login-main">
			<div class="login-banner-bg"><span></span><img width="400" src="../../images/act2.png" /></div>
			<div class="login-box">

				<h3 class="title">用户注册</h3>

				<div class="clear"></div>

				<div class="login-form" style="background: none;">
					<form>
						<div class="user-name">
							<label for="user" class="loginIcon"><el-icon>
									<User />
								</el-icon></label>
							<input type="text" name="" id="user" placeholder="邮箱/手机/用户名">
						</div>
						<div class="user-pass" style="margin-top: 15px;">
							<label for="password" class="loginIcon"><el-icon>
									<Lock />
								</el-icon></label>
							<input type="password" name="" id="password" placeholder="请输入密码">
						</div>
						<div class="user-pass" style="margin-top: 15px;">
							<label for="password" class="loginIcon"><el-icon>
									<Lock />
								</el-icon></label>
							<input type="password" name="" id="repassword" placeholder="请再次输入密码">
						</div>
					</form>
				</div>

				<div class="login-links">
					<br />
				</div>
				<div class="am-cf">
					<input type="submit" name="" value="提交注册" class="am-btn am-btn-primary am-btn-sm">
				</div>
				<div class="partner">

				</div>

			</div>
		</div>
	</div>

	<div class="footer ">
		<div class="footer-hd ">

		</div>
		<div class="footer-bd ">
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
</script>

<style scoped>
.login-banner-bg {
	width: 400px;
}

.loginIcon {
	padding-top: 2px;
}
</style>