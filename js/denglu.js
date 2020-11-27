var $user = $('.i1');
var $pass = $('.i2');
var $login = $('.f-l');
var $register = $('.f-r');

$login.on('click',function (){
      var us = $user.val()
      var ps = $pass.val()

// 验证
if (!us || !ps) {
      alert('账号或密码不能为空')
      return
}
if(localStorage.getItem('user') === us && localStorage.getItem('user') === ps){
alert('登录成功')
}else{
      alert('账户或密码错误')
}


}) 




// 注册
$register.on('click',function (){
      var us = $user.val()
      var ps = $pass.val()
  
// 验证
if (!us || !ps) {
      alert('账号或密码不能为空')
      return
}
// 提交数据
localStorage.setItem('user',us);
localStorage.setItem('pass',ps);
alert('注册成功')
})


