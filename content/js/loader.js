function cube_showloading() {
  if ($('#cubeloader').length==0) {
    var $body=$('body');
    var scroll='hidden';
    if ($(document.body)[0].scrollHeight>$(window).height()) {
      scroll='auto';
    }
    $body.append('<div id="cubeloader" ><div id="modelback" style=" z-index:11111;position: fixed; left:0; top:0; text-align: center; width:100%; height:900px;"><div style="margin: 250px auto; padding: 20px; width: 250px;position:relative;"><img src="/images/cloud-loader.png" width="80px"  /><img src="/images/loading3.gif" style="width:30px;position:absolute; z-index:5; top:28px; left:110px;"  /></div></div></div>').css('overflow', scroll);
    $('#cubeloader').fadeIn(500);
  }
}
function cube_hideloading() {
  var $this=$('#cubeloader');
  $this.fadeOut(250, function () {
    $this.remove();
    $('body').css('overflow', 'auto');
  });
}