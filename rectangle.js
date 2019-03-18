$(function(){
  var $width=$('#width');
  var $height=$('#height');
  var $btnCal=$('#culate');
  var $perimeter=$('#perimeter');
  var $area=$('#area');


  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();
    
    var r = new Rectangle(w, h);

   
    //var p=2*(w+h),
    //    a=w*h;
        
    $perimeter.val(r.perimeter());
    $area.val(r.area());
                                
  });

});

