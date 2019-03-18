var add=require('../sum.js');
var expect=require('chai').expect;

describe('加法测试',function(){
  it('0+0=0',function(){
        expect(add(0,0)).to.be.equal(0);
          
  });
    
  it('1+0=0',function(){
        expect(add(0,1)).to.be.equal(1);
          
  })

  //字符串测试
  it('"1"+"0"="1"',function(){
    expect(add('1','0')).to.be.equal(1);
  });
    
  it('"20"+5=25',function(){
    expect(add("20",5)).to.be.equal(25);
  })
});
    

