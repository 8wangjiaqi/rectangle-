/* global Rectangle: true */
$(function(){
  var $width=$('#width');
  var $height=$('#height');
  var $btnCal=$('#culate');
  var $perimeter=$('#perimeter');
  var $widthValidation=$('#$width-validation');
  var $heightValidation=$('#height-validation');
  var $area=$('#area');

  $width.focusout(function(){
    var w=$width.val();
    if(w===''){
      $widthValidation.html('宽度不能为空！');
      $width.select();//把焦点抓住
    }else{
      $widthValidation.html('');
    }
  
    if(Number(w)<0){
      $widthValidation.html('宽度不能为负！');
      $width.select();
      return;
    }else{
      $widthValidation.html('');
    }
    
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('数据不合法！');
      $width.select();//把焦点抓住
      return;
    }else{
      $widthValidation.html('');
    }

  });
  
  $height.focusout(function(){
    var h=$height.val();
    if(h===''){
      $heightValidation.html('长度不能为空！');
      $height.select();
    }else{
      $heightValidation.html('');
    }

    if(Number(h)<0){
      $heightValidation.html('长度不能为负！');
      $height.select();
      return;
    }else{
      $heightValidation.html('');
    }
        
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('数据不合法！');
      $height.select();//把焦点抓住
      return;
    }else{
      $heightValidation.html('');
    }


  });

  $btnCal.click(function(){

    var w=$width.val(),
        h=$height.val();
    
    if(w===''){
      $widthValidation.html('宽度不能为空！');
      return;
    }

    if(h===''){
      $heightValidation.html('长度不能为空！');
      return;          
    }

   
    
    var r = new Rectangle(w, h);

   
    //var p=2*(w+h),
    //    a=w*h;
        
    $perimeter.val(r.perimeter());
    $area.val(r.area());
                                
  });

});

