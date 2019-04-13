/* global Rectangle, validate: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;



  /*$width.keypress(function(e){
    if (/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e)){
      e.preventDefault();
    }

    if(e.key === '.'){
      if(e.target.value === '') e.preventDefault();
      if(e.target.value.indexOf('.') !== -1){
        e.preventDefault();
      }else{
        if(e.target.selectionStart === 0) e.preventDefault();
      }
    }
  });*/

  $width.focusout(function(){
    //var w=$width.val();
    
    var result = validate($width.val());
    isPassValidate = result.isOK;
    /*if(w===''){
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
    }*/
    
    if(!result.isOK){
      $widthValidate.html('宽度'+result.reason);
      $width.select();
    }else {
      $widthValidate.html('');
    }
  });
    
  /*if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('数据不合法！');
      $width.select();//把焦点抓住
      return;
    }else{
      $widthValidation.html('');
    }*/

    
  $height.focusout(function(){
    /*var h=$height.val();
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
    }*/

    var result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });

  $btnCal.click(function(){
    if(!isPassValidate) return;

    var w=$width.val(),
        h=$height.val();
    
    /*if(w===''){
      $widthValidation.html('宽度不能为空！');
      return;
    }

    if(h===''){
      $heightValidation.html('长度不能为空！');
      return;          
    }*/

    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
   
    //var p=2*(w+h),
    //    a=w*h;
                                
  });

});

