$(function(){
  $.ajax({
      url: '../date/wy_header.json',
      type:'get',
      dataType:'json',
      success:function(json){
          var goodstr3 =[];
          for(var i = 0; i <json.data.cateList.length; i++){
            var goodstr4 = '';
            $.each(json.data.cateList[i].subCateGroupList,function(index,item){
               var goodstr5 = '';
                $.each(item.categoryList,function(index1,item1){
                      goodstr5 +=`<div class="li-bottom">
                      <a href="#" class="li-b-a">
                      <img src="${item1.bannerUrl}" alt="">
                      <span>${item1.name}</span>
                      </a> </div>`
                })
                goodstr4 += `<div class="nav-ul-li">
                <div class="li-top">${item.name}</div>
                ${goodstr5}</div>`
            })
            goodstr3[i] = `<li class="nav-li">
            <a href="#" class="nav-l-a">${json.data.cateList[i].name}</a>
            <div class="nav-ul">${goodstr4}</div>`
            $('.btm-nav').append(goodstr3[i])
          }
          $('.btm-nav').append(` <li class="nav-span"></li>
          <li class="nav-li-r">
                <a href="#"class="nav-l-a">为你严选</a>
          </li>
          <li class="nav-li-right">
                <a href="#"class="nav-l-a">众筹</a>
          </li>`)
      }
})
//尾部
})



//吸顶数据请求
$(function(){
      $.ajax({
          url: '../date/wy_header.json',
          type:'get',
          dataType:'json',
          success:function(json){
              var goodstr3 =[];
              for(var i = 0; i <json.data.cateList.length; i++){
                var goodstr4 = '';
                $.each(json.data.cateList[i].subCateGroupList,function(index,item){
                   var goodstr5 = '';
                    $.each(item.categoryList,function(index1,item1){
                          goodstr5 +=`<div class="li-bottom">
                          <a href="#" class="li-b-a">
                          <img src="${item1.bannerUrl}" alt="">
                          <span>${item1.name}</span>
                          </a> </div>`
                    })
                    goodstr4 += `<div class="nav-ul-li">
                    <div class="li-top">${item.name}</div>
                    ${goodstr5}</div>`
                })
                goodstr3[i] = `<li class="xd-li">
                <a href="#" class="xd-li-a">${json.data.cateList[i].name}</a>
                <div class="xd-nav-ul">${goodstr4}</div>`
                $('.xd-ul').append(goodstr3[i])
              }
          }
    })
    //尾部
    })


/* 吸顶判断 */
$(document).on('scroll',()=>{
      var i= $(document).scrollTop();
      if(i<=175){
       $('.m-top-xd-box').css('display',"none")
      }
      if(i >= 175){
       $('.m-top-xd-box').css('display',"block")
      }
 })
