/**
 * Created by Administrator on 2017/4/1 0001.
 */
app.controller('forgetPassCtr', function($scope) {
    $scope.isShow1 = true;
    $scope.isShow2 = false;
    $scope.isShow3 = false;
    $scope.isShow4 = false;
    $scope.num = 22;



    var setName = document.getElementById("setName");
    var setNameEm = document.getElementById("setNameEm");
    var setId = document.getElementById("setId");
    var setIdEm = document.getElementById("setIdEm");
    var setPass = document.getElementById("setPass");
    var setPassEm = document.getElementById("setPassEm");
    var comp = document.getElementById("comp");
    var compEm = document.getElementById("compEm");

    setName.style.color="#2d7ae3"
    setNameEm.style.backgroundColor = "#2d7ae3";

    $scope.tog = function(){
        setName.style.color="#2d7ae3"
        setNameEm.style.backgroundColor = "#2d7ae3";

        setId.style.color="#000"
        setIdEm.style.backgroundColor = "#ccc";

        setPass.style.color="#000"
        setPassEm.style.backgroundColor = "#ccc";

        comp.style.color="#000"
        compEm.style.backgroundColor = "#ccc";


        $scope.isShow1 = true;
        $scope.isShow2 = false;
        $scope.isShow3 = false;
        $scope.isShow4 = false;


    }

    $scope.tog1 = function(){


        setId.style.color="#2d7ae3"
        setIdEm.style.backgroundColor = "#2d7ae3";

        setName.style.color="#000"
        setNameEm.style.backgroundColor = "#ccc";

        setPass.style.color="#000"
        setPassEm.style.backgroundColor = "#ccc";

        comp.style.color="#000"
        compEm.style.backgroundColor = "#ccc";

        $scope.isShow1 = false;
        $scope.isShow2 = true;
        $scope.isShow3 = false;
        $scope.isShow4 = false;
        var data = {
            num:$scope.num
        }
        var option = {
            url:addr+"index.php/Home/From/bookshelf_book",
            data:{"heart_book_id":1,"heart_user_id":1}
        }

        getData(option)
    }
    $scope.tog2 = function(){


        setName.style.color="#000"
        setNameEm.style.backgroundColor = "#ccc";

        setId.style.color="#000"
        setIdEm.style.backgroundColor = "#ccc";

        setPass.style.color="#2d7ae3"
        setPassEm.style.backgroundColor = "#2d7ae3";

        comp.style.color="#000"
        compEm.style.backgroundColor = "#ccc";

        $scope.isShow1 = false;
        $scope.isShow2 = false;
        $scope.isShow3 = true;
        $scope.isShow4 = false;
    }
    $scope.tog3 = function(){


        setName.style.color="#000"
        setNameEm.style.backgroundColor = "#ccc";

        setId.style.color="#000"
        setIdEm.style.backgroundColor = "#ccc";

        setPass.style.color="#000"
        setPassEm.style.backgroundColor = "#ccc";

        comp.style.color="#2d7ae3"
        compEm.style.backgroundColor = "#2d7ae3";

        $scope.isShow1 = false;
        $scope.isShow2 = false;
        $scope.isShow3 = false;
        $scope.isShow4 = true;
    }

})