<template>
  <Header></Header>
  <div class="banner">
    <!--轮播 -->
    <div class="am-slider am-slider-default scoll" data-am-flexslider id="demo-slider-0">
      <ul class="am-slides">
        <li class="banner1"><a href="introduction.html"><img src="../../images/ad1.jpg" /></a></li>
        <li class="banner2"><a><img src="../../images/ad2.jpg" /></a></li>
        <li class="banner3"><a><img src="../../images/ad3.jpg" /></a></li>
        <li class="banner4"><a><img src="../../images/ad4.jpg" /></a></li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
  <div class="shopNav">
    <div class="slideall">
      <div class="long-title"><span class="all-goods">全部分类</span></div>
      <div class="nav-cont">
        <ul>
          <li class="index"><a href="#">首页</a></li>
          <li class="qc"><a href="#">闪购</a></li>
          <li class="qc"><a href="#">限时抢</a></li>
          <li class="qc"><a href="#">团购</a></li>
          <li class="qc last"><a href="#">大包装</a></li>
        </ul>
        <div class="nav-extra">
          <i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>我的福利
          <i class="am-icon-angle-right" style="padding-left: 10px;"></i>
        </div>
      </div>

      <!--侧边导航 -->
      <div id="nav" class="navfull">
        <div class="area clearfix">
          <div class="category-content" id="guide_2">
            <div class="category">
              <ul class="category-list" id="js_climit_li">
                <li class="appliance js_toggle relative first">
                  <div class="category-info">
                    <h3 class="category-name b-category-name"><i><img src="../../images/cake.png"></i><a class="ml-22"
                        title="点心">点心/蛋糕</a></h3>
                    <em>&gt;</em>
                  </div>
                  <div class="menu-item menu-in top">
                    <div class="area-in">
                      <div class="area-bg">
                        <div class="menu-srot">
                          <div class="sort-side">
                            <dl class="dl-sort">
                              <dt><span title="蛋糕">蛋糕</span></dt>
                              <dd><a title="蒸蛋糕" href="search.html"><span>蒸蛋糕</span></a></dd>
                              <dd><a title="脱水蛋糕" href="search.html"><span>脱水蛋糕</span></a></dd>
                              <dd><a title="瑞士卷" href="search.html"><span>瑞士卷</span></a></dd>
                              <dd><a title="软面包" href="search.html"><span>软面包</span></a></dd>
                              <dd><a title="马卡龙" href="search.html"><span>马卡龙</span></a></dd>
                              <dd><a title="千层饼" href="search.html"><span>千层饼</span></a></dd>
                              <dd><a title="甜甜圈" href="search.html"><span>甜甜圈</span></a></dd>
                              <dd><a title="蒸三明治" href="search.html"><span>蒸三明治</span></a></dd>
                              <dd><a title="铜锣烧" href="search.html"><span>铜锣烧</span></a></dd>
                            </dl>
                            <dl class="dl-sort">
                              <dt><span title="蛋糕">点心</span></dt>
                              <dd><a title="蒸蛋糕" href="search.html"><span>蒸蛋糕</span></a></dd>
                              <dd><a title="脱水蛋糕" href="search.html"><span>脱水蛋糕</span></a></dd>
                              <dd><a title="瑞士卷" href="search.html"><span>瑞士卷</span></a></dd>
                              <dd><a title="软面包" href="search.html"><span>软面包</span></a></dd>
                              <dd><a title="马卡龙" href="search.html"><span>马卡龙</span></a></dd>
                              <dd><a title="千层饼" href="search.html"><span>千层饼</span></a></dd>
                              <dd><a title="甜甜圈" href="search.html"><span>甜甜圈</span></a></dd>
                              <dd><a title="蒸三明治" href="search.html"><span>蒸三明治</span></a></dd>
                              <dd><a title="铜锣烧" href="search.html"><span>铜锣烧</span></a></dd>
                            </dl>
                          </div>
                          <div class="brand-side">
                            <dl class="dl-sort">
                              <dt><span>实力商家</span></dt>
                              <dd><a title="呵官方旗舰店" target="_blank" href="#"><span class="red">呵官方旗舰店</span></a></dd>
                              <dd><a title="格瑞旗舰店" target="_blank" href="#"><span>格瑞旗舰店</span></a></dd>
                              <dd><a title="飞彦大厂直供" target="_blank" href="#"><span class="red">飞彦大厂直供</span></a></dd>
                              <dd><a title="红e·艾菲妮" target="_blank" href="#"><span>红e·艾菲妮</span></a></dd>
                              <dd><a title="本真旗舰店" target="_blank" href="#"><span class="red">本真旗舰店</span></a></dd>
                              <dd><a title="杭派女装批发网" target="_blank" href="#"><span class="red">杭派女装批发网</span></a></dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b class="arrow"></b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <!--轮播-->

      <!-- <script type="text/javascript">
        (function() {
                    								$('.am-slider').flexslider();
                    							});
                    							$(document).ready(function() {
                    								$("li").hover(function() {
                    									$(".category-content .category-list li.first .menu-in").css("display", "none");
                    									$(".category-content .category-list li.first").removeClass("hover");
                    									$(this).addClass("hover");
                    									$(this).children("div.menu-in").css("display", "block")
                    								}, function() {
                    									$(this).removeClass("hover")
                    									$(this).children("div.menu-in").css("display", "none")
                    								});
                    							})
      </script> -->



      <!--小导航 -->
      <div class="am-g am-g-fixed smallnav">
        <div class="am-u-sm-3">
          <a href="sort.html"><img src="../../images/navsmall.jpg" />
            <div class="title">商品分类</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="../../images/huismall.jpg" />
            <div class="title">大聚惠</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="../../images/mansmall.jpg" />
            <div class="title">个人中心</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="../../images/moneysmall.jpg" />
            <div class="title">投资理财</div>
          </a>
        </div>
      </div>

      <!--走马灯 -->

      <div class="marqueen">
        <span class="marqueen-title">商城头条</span>
        <div class="demo">

          <ul>
            <li class="title-first"><a target="_blank" href="#">
                <img src="../../images/TJ2.jpg">
                <span>[特惠]</span>商城爆品1分秒
              </a></li>
            <li class="title-first"><a target="_blank" href="#">
                <span>[公告]</span>商城与广州市签署战略合作协议
                <img src="../../images/TJ.jpg">
                <p>XXXXXXXXXXXXXXXXXX</p>
              </a></li>
            <div class="mod-vip">
              <div class="m-baseinfo">
                <a href="person/index.html">
                  <img src="../../images/getAvatar.do.jpg">
                </a>
                <em>
                  Hi,<span class="s-name">小叮当</span>
                  <a href="#">
                    <p>点击更多优惠活动</p>
                  </a>
                </em>
              </div>
              <div class="member-logout">
                <a class="am-btn-warning btn" href="login.html">登录</a>
                <a class="am-btn-warning btn" href="register.html">注册</a>
              </div>
              <div class="member-login">
                <a href="#"><strong>0</strong>待收货</a>
                <a href="#"><strong>0</strong>待发货</a>
                <a href="#"><strong>0</strong>待付款</a>
                <a href="#"><strong>0</strong>待评价</a>
              </div>
              <div class="clear"></div>
            </div>

            <li><a target="_blank" href="search.html"><span>[特惠]</span>洋河年末大促，低至两件五折</a></li>
            <li><a target="_blank" href="search.html"><span>[公告]</span>华北、华中部分地区配送延迟</a></li>
            <li><a target="_blank" href="search.html"><span>[特惠]</span>家电狂欢千亿礼券 买1送1！</a></li>

          </ul>
          <div class="advTip"><img src="../../images/advTip.jpg" /></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!-- <script type="text/javascript">
      if ($(window).width()<640) {
            function autoScroll(obj) {
              $(obj).find("ul").animate({
                marginTop: "-39px"
              }, 500, function() {
                $(this).css({
                  marginTop: "0px"
                }).find("li:first").appendTo(this);
              })
            }
            $(function() {
              setInterval('autoScroll(".demo")', 3000);
            })
          }
    </script> -->
  </div>
  <div class="shopMainbg">
    <div class="shopMain" id="shopmain">

      <!--今日推荐 -->

      <div class="am-g am-g-fixed recommendation">
        <div class="clock am-u-sm-3">
          <img src=" ../../images/2016.png ">
          <p>今日<br>推荐</p>
        </div>
        <a href=" introduction.html">
          <div class="am-u-sm-4 am-u-lg-3 ">
            <div class="info ">
              <h3>真的有鱼</h3>
              <h4>开年福利篇</h4>
            </div>
            <div class="recommendationMain one">
              <img src="../../images/tj.png ">
            </div>
          </div>
        </a>
        <a href="introduction.html">
          <div class="am-u-sm-4 am-u-lg-3 ">
            <div class="info ">
              <h3>囤货过冬</h3>
              <h4>让爱早回家</h4>
            </div>
            <div class="recommendationMain two">
              <img src="../../images/tj1.png ">
            </div>
          </div>
        </a>
        <div class="am-u-sm-4 am-u-lg-3 ">
          <div class="info ">
            <h3>浪漫情人节</h3>
            <h4>甜甜蜜蜜</h4>
          </div>
          <div class="recommendationMain three">
            <img src="../../images/tj2.png ">
          </div>
        </div>

      </div>
      <div class="clear "></div>
      <!--热门活动 -->

      <div class="am-container activity ">
        <div class="shopTitle ">
          <h4>活动</h4>
          <h3>每期活动 优惠享不停 </h3>
          <span class="more ">
            <a href="# ">全部活动<i class="am-icon-angle-right" style="padding-left:10px ;"></i></a>
          </span>
        </div>
        <div class="am-g am-g-fixed ">
          <div class="am-u-sm-3 ">
            <div class="icon-sale one "></div>
            <h4>秒杀</h4>
            <div class="activityMain ">
              <img src="../../images/activity1.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 ">
            <div class="icon-sale two "></div>
            <h4>特惠</h4>
            <div class="activityMain ">
              <img src="../../images/activity2.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 ">
            <div class="icon-sale three "></div>
            <h4>团购</h4>
            <div class="activityMain ">
              <img src="../../images/activity3.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 last ">
            <div class="icon-sale "></div>
            <h4>超值</h4>
            <div class="activityMain ">
              <img src="../../images/activity.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

        </div>
      </div>
      <div class="clear "></div>


      <div id="f1">
        <!--甜点-->

        <div class="am-container ">
          <div class="shopTitle ">
            <h4>甜品</h4>
            <h3>每一道甜品都有一个故事</h3>
            <div class="today-brands ">
              <a href="# ">桂花糕</a>
              <a href="# ">奶皮酥</a>
              <a href="# ">栗子糕 </a>
              <a href="# ">马卡龙</a>
              <a href="# ">铜锣烧</a>
              <a href="# ">豌豆黄</a>
            </div>
            <span class="more ">
              <a href="# ">更多美味<i class="am-icon-angle-right" style="padding-left:10px ;"></i></a>
            </span>
          </div>
        </div>

        <div class="am-g am-g-fixed floodFour">
          <div class="am-u-sm-5 am-u-md-4 text-one list ">
            <div class="word">
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
              <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
            </div>
            <a href="# ">
              <div class="outer-con ">
                <div class="title ">
                  开抢啦！
                </div>
                <div class="sub-title ">
                  零食大礼包
                </div>
              </div>
              <img src="../../images/act1.png " />
            </a>
            <div class="triangle-topright"></div>
          </div>

          <div class="am-u-sm-7 am-u-md-4 text-two sug">
            <div class="outer-con ">
              <div class="title ">
                雪之恋和风大福
              </div>
              <div class="sub-title ">
                ¥13.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/2.jpg" /></a>
          </div>

          <div class="am-u-sm-7 am-u-md-4 text-two">
            <div class="outer-con ">
              <div class="title ">
                雪之恋和风大福
              </div>
              <div class="sub-title ">
                ¥13.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/1.jpg" /></a>
          </div>


          <div class="am-u-sm-3 am-u-md-2 text-three big">
            <div class="outer-con ">
              <div class="title ">
                小优布丁
              </div>
              <div class="sub-title ">
                ¥4.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/5.jpg" /></a>
          </div>

          <div class="am-u-sm-3 am-u-md-2 text-three sug">
            <div class="outer-con ">
              <div class="title ">
                小优布丁
              </div>
              <div class="sub-title ">
                ¥4.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/3.jpg" /></a>
          </div>

          <div class="am-u-sm-3 am-u-md-2 text-three ">
            <div class="outer-con ">
              <div class="title ">
                小优布丁
              </div>
              <div class="sub-title ">
                ¥4.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/4.jpg" /></a>
          </div>

          <div class="am-u-sm-3 am-u-md-2 text-three last big ">
            <div class="outer-con ">
              <div class="title ">
                小优布丁
              </div>
              <div class="sub-title ">
                ¥4.8
              </div>
              <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
            </div>
            <a href="# "><img src="../../images/5.jpg" /></a>
          </div>

        </div>
        <div class="clear "></div>
      </div>
      <div class="footer ">
        <div class="footer-hd ">
          <p>
            <a href="# ">锋迷商城</a>
            <b>|</b>
            <a href="# ">商城首页</a>
            <b>|</b>
            <a href="# ">支付宝</a>
            <b>|</b>
            <a href="# ">物流</a>
          </p>
        </div>
        <div class="footer-bd ">
          <p>
            <a href="# ">关于千锋</a>
            <a href="# ">合作伙伴</a>
            <a href="# ">联系我们</a>
            <a href="# ">网站地图</a>
            <em>© qfedu.com 版权所有</em>
          </p>
        </div>
      </div>

    </div>
  </div>
  <!--引导() -->
  <div class="navCir">
    <li class="active"><a href="home.html"><i class="am-icon-home "></i>首页</a></li>
    <li><a href="sort.html"><i class="am-icon-list"></i>分类</a></li>
    <li><a href="shopcart.html"><i class="am-icon-shopping-basket"></i>购物车</a></li>
    <li><a href="person/index.html"><i class="am-icon-user"></i>我的</a></li>
  </div>
  <!--菜单 -->
  <SideBar></SideBar>
</template>

<script setup>
import Header from "../../layout/Header.vue"
import SideBar from "../../layout/SideBar.vue"
import "../../css/amazeui.css"
import "../../css/admin.css"
import "../../css/demo.css"
import "../../css/hmstyle.css"
import "../../css/skin.css"
</script>

<style scoped>
.shopNav {
  margin-top: 90px;
}
</style>