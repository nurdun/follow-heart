/**
 * Created by Administrator on 2017/3/29 0029.
 */
/*
@  ajax 封装
 */
var addr='http://123.206.43.228/From_the_heart/index.php/Home/From/';
var imgaddr='http://123.206.43.228/From_the_heart/Uploads/heart_book_img/';

function getData(option){
    $.ajax({
        url:addr+option.url,
        type:option.type||"get",
        dataType:option.dType||"jsonp",
        jsonp:"jsoncallback",
        data:option.data,
        before:option.before||function () {
        },
        success:option.success||function (data) {
            console.log(data)
        },
        error:option.err||function () {
            alert("请求失败");
        },
        complete:option.comp||function () {
        }
    })
}
function setData(url,request,aa){
	obj1={
		url:url,
		data:request,
		success:function(data){
			aa(data);
		}
	}
	getData(obj1);
}
//