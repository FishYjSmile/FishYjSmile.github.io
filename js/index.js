
    //二级菜单
    function showSecondeMenu(number){
        var doc = document.getElementsByName("nav-menu-drop-div")[number];
        doc.style.display = "block";
    }
    function showSecondeMenuDowm(number){
        var doc = document.getElementsByName("nav-menu-drop-div")[number];
        doc.style.display = "none";
    }
    //二维码显示
    $(function(){
        
            $(".nav-logo").hover(function(){
                $(".QR").addClass("QR-Code");
            },function(){
                $(".QR").removeClass("QR-Code");
            }) 
    })
    
    var timer = null;
    var num = 0;
    var arr = [];
        arr[0] = "./img/20191004034706583.jpg";
        arr[1] = "./img/20200824111655146.jpg";
        arr[2] = "./img/20200622045712262.jpg";
        arr[3] = "./img/20200824113628645.jpg";
    //更换图片
    function changeImg(){
        var carousel = document.getElementsByClassName("carousel")[0];
        // console.log(carousel)
        timer  = setInterval(function(e){  
            if(num<4){
                circleImg();
                carousel.style.backgroundImage = "url("+arr[num]+")";
                num++;
            }else{
                num = 0;

            } 
            
            
        },5000);
    }
    //设置按钮的功能
    function next(){
        clearInterval(timer)
        var left = document.getElementsByClassName("arrange-left-point")[0];
        // console.log(left);
        var carousel = document.getElementsByClassName("carousel")[0];
        if(num==0){
            num=3;
        }else{
            num--;
        }
        carousel.style.backgroundImage = "url("+arr[num]+")";
        changeImg();
    }
    function last(){
        clearInterval(timer)
        var right = document.getElementsByClassName("arrange-right-point")[0];
        // console.log(right);
        var carousel = document.getElementsByClassName("carousel")[0];
        
        if(num==3){
            num = 0;
        }else{
            num++;
        }
        carousel.style.backgroundImage = "url("+arr[num]+")";
        changeImg();
    }
    function circleImg(){
        var circleIndex = document.getElementsByClassName("cricle-1-0")[num];
        // console.log(circleIndex)
        circleIndex.style.opacity = 1;
    }
    function circleImgClear(){
        var circleIndex = document.getElementsByClassName("cricle-1-0")[num];
        // console.log(circleIndex)
        circleIndex.style.opacity = 0.5;
        console.log(num)
    }
    // 小方块图片
    function imgframe(){
        var arr = [];
        arr[0] = "./img/20191004034706583.jpg";
        arr[1] = "./img/20200824111655146.jpg";
        arr[2] = "./img/20200622045712262.jpg";
        arr[3] = "./img/20200824113628645.jpg";
        arr[4] = "./img/30c40e020f63f81f-c00171587126b6cf-f74337645f9642c36eb63249cdbbecaf.jpg";
        arr[5] = "./img/66ccbe631f3b0ce2-06138918aa1f7763-69f5926dc0b97baf69c3f7c84f3067c8.jpg";
        arr[6] = "./img/20201111023253725.jpg";
        arr[7] = "./img/217cc4feba9434ea9af1f4d8e7397c7b.jpg";
        arr[8] = "./img/aa48140b4cf08ccd-42093290d96208cd-cb3784d16d13750ecfe746f98f156ed6.jpg";
        arr[9] = "./img/aa48140b4cf08ccd-0242722acad51a83-fdf37c6eadfedf77c437caad9d2f2992.jpg";
        arr[10] = "./img/ac75323d6b6de243-23a9581ad20a0473-65d1937d67da5f900f082ed956fc4709.jpg";
        arr[11] = "./img/ac75323d6b6de243-89d6da0f0549cd8f-b668ee06f58c5c5f95c986637eedf355.jpg";
        arr[12] = "./img/ac75323d6b6de243-ec94ab63938bc10f-b0fe9586b170e2dfcdd510bac3cabe68.jpg";
        arr[13] = "./img/b467ec84f3d6ecb6-3f0ecb459e1bafbb-a42626d73b474cd767a7bb2fdde8eb45.jpg";
        arr[14] = "./img/b1d4a99b997e06b98bfdd34d6dfb6546.jpg";
        arr[15] = "./img/b62e08623d0bd117fdedfc12d50d64d.jpg";
        
        for(var i = 0;i<arr.length;i++){
            var doc = document.getElementsByClassName("frame-main-1")[i];
            doc.style.backgroundImage = "url("+arr[i]+")";

            // console.log(doc)
        }
        
    }
    // function frame(){
    //     var arr = [];
    //     for(var i =0;i<16;i++){
    //         arr[i] = document.getElementsByClassName("frame-main-1-0")[i]
    //         // console.log(arr[i])
            
    //     }
        
    // }
    // function frame(){
    //     var arr = [];
    //     for(var i =0;i<16;i++){
    //         arr[i] = document.getElementsByClassName("frame-main-1-0")[i]
    //         console.log(arr[i]);
    //         arr[i].onmouseover = function(){
    //             arr[i].style.display = "block"
    //         }
    //         arr[i].onmouseout = function(){
    //             arr[i].style.display = "none"
    //         }
    //     }
    // }
    function mainimge(){
        var arr = [];
        arr[0] = "./img/20191004034706583.jpg";
        arr[1] = "./img/20200824111655146.jpg";
        arr[2] = "./img/20200622045712262.jpg";
        arr[3] = "./img/20200824113628645.jpg";
        arr[4] = "./img/30c40e020f63f81f-c00171587126b6cf-f74337645f9642c36eb63249cdbbecaf.jpg";
        arr[5] = "./img/66ccbe631f3b0ce2-06138918aa1f7763-69f5926dc0b97baf69c3f7c84f3067c8.jpg";
        for(var i = 0;i<arr.length;i++){
            var doc = document.getElementsByClassName("main-imge-1")[i];
            doc.style.backgroundImage = "url("+arr[i]+")";

            // console.log(doc)
        }

    }
    //2D卡通图像
    L2Dwidget.init({
        "model": {
            "jsonPath": "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
            "scale": 1
        },
        "display": {
            "position": "left",
            "width": 110,
            "height": 260,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
    //鼠标烟花
   
    
window.onload = function(){
    changeImg();
    imgframe();
    mainimge();
    
}



