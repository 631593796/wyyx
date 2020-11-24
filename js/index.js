$(document).on('scroll',()=>{
     var i= $(document).scrollTop();
     if(i<=175){
      $('.m-top-xd-box').css('display',"none")
     }
     if(i >= 175){
      $('.m-top-xd-box').css('display',"block")
     }
})