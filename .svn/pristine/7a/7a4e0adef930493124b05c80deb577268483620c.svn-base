;(function($){
		
	//默认参数
	var arg = {
		pIndex:1,
		pSize:10,
		pCount:100,
		prev:'＜',
		next:'＞',
		fn:function(){
			
			
		}
	}
	
	//扩展分页插件函数
	$.fn.createPage = function(options){
	
		console.log(options);
		$.extend(arg,options || {});
		
		p.creatHtml(arg,this);
		p.bingEvent(arg,this);
		
	}
	
	var p = {
		creatHtml:function(op,obj){
			//逻辑判断
			
			var str="";
			str +='<a href="javascript:;" class="prevPage">'+ op.prev+'</a>';
			for(var i=0;i<op.pCount;i++){
				if(i == (op.pIndex-1)){
					str +='<span class="current">'+(i+1)+'</span>';
				}else{
					str +='<a href="javascript:;" class="tcdNumber">'+(i+1)+'</a>';
				}				
				
			}
			str +='<a href="javascript:;" class="nextPage"> '+ op.next+'</a>';
			
			obj.html(str);
		},
		bingEvent:function(op,obj){
			obj.on('click','a.tcdNumber',function(){
				op.pIndex = parseInt($(this).text());
				p.creatHtml(op,obj);
			})
			
			obj.on('click','a.prevPage',function(){
				op.pIndex = parseInt(obj.children('.current').text()) -1;
				p.creatHtml(op,obj);
			})
			
			obj.on('click','a.nextPage',function(){
				op.pIndex = parseInt(obj.children('.current').text()) +1;
				p.creatHtml(op,obj);
			})
			
		}
		
	}
	
})(jQuery)