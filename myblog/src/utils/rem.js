// 设置 rem 函数
function setRem () {

    // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小
    if(htmlWidth<=375){
        htmlDom.style.fontSize= 375/20 + 'px';
    }
    else if(htmlWidth<=141){
      htmlDom.style.fontSize= 414/20 + 'px';
    }
    else if(htmlWidth<=768){
      htmlDom.style.fontSize= 768/20 + 'px';
    }
    else{
        htmlDom.style.fontSize= htmlWidth/20 + 'px';
    }
}
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem()
  }
  
  