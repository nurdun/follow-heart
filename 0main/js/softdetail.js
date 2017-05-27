/**
 * Created by Administrator on 2017/4/1 0001.
 */
app.controller('softDetailCtrl', function($scope) {

    $scope.isShow1 = false;
    $scope.isShow2 = false;
    $scope.likeNum = 0;
    $scope.isReply = false;
    $scope.replyText = ["sss"]
    $scope.likeCl = 0;

    var option={
        url:"Soft_details",
        data:{"heart_solular_id":4},
        success:function(data){
            console.log(data)
            $scope.story = data.aaaa.heart_story_id;
            $scope.title = data.aaaa.heart_content_title;
            alert($scope.story);
        }
    }

    getData(option);

    $scope.tog1 = function(){
        $scope.isShow1 = ! $scope.isShow1;
    }
    $scope.tog2 = function(){
        $scope.isShow1 = ! $scope.isShow1;
        $scope.isShow2 = ! $scope.isShow2;
    }
    $scope.tog3 = function(){
        $scope.isShow2 = ! $scope.isShow2;
    }
    $scope.like = function(){
        if($scope.likeCl == 0){
            $scope.likeNum++;
            $scope.likeCl++;
        }else if($scope.likeNum>0){
            $scope.likeNum--;
            $scope.likeCl = 0;
        }

    }
    $scope.reply = function(){
        $scope.isReply = !$scope.isReply;
    }
    $scope.submit = function(){
        var editDiv = document.getElementById("toRep");
        var str = editDiv.textContent;
        $scope.replyText.push(str);
        editDiv.innerHTML = "";
        $scope.isReply = !$scope.isReply;
    }

    $scope.edit = function(){
        var editDiv = document.getElementById("toRep");
        editDiv.innerHTML = "";
    }
})