/**
 * Created by Administrator on 2017/4/1 0001.
 */
app.controller('registerCtr', function($scope) {

    $scope.regist = function(){

        var name = document.getElementById("name").value;
        var pass = document.getElementById("password").value;
        var phone = document.getElementById("phonenumber").value;

        var data= {
            heart_user_name:name,
            heart_password:pass,
            heart_phone:phone
        }
        var optoin = {
            url:"/register",
            data:data,
            success:function(){
                alert("yes");
            }
        }
        getData(optoin);
    }
})