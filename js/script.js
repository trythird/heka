window.onload =function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var p3_first = document.getElementById("p3_first");
    var p3_second = document.getElementById("p3_second");
    /* 音乐停止时候*/
    music.addEventListener("touchstart", function (event) {
        if (audio.paused && music.style.animationPlayState == "paused") {
            audio.play();
            music.style.animationPlayState = "running";
            music.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();
            music.style.animationPlayState = "paused";
            music.style.webkitAnimationPlayState = "paused";
        }
    }, false)
    music.addEventListener("ended", function (event) {
        audio.pause();
        /* this.setAttribute("class", " ")*/
        this.style.animationPlayState = "paused";
        this.style.webkitAnimationPlayState = "paused";
    }, false)
    /* 点击灯笼，进下一页 */
   page1.addEventListener("touchstart", function (event) {
   page1.style.display = "none";
   page2.style.display = "block";
   page3.style.display = "block";
   page3.style.top     = "100%";

   setTimeout(function () {
       page2.setAttribute("class","page fadeout")
       page3.setAttribute("class","page fadein")
       p3_first.setAttribute("class","p3_first")
       p3_second.setAttribute("class","p3_second")
   },5500)
}, false)
}

/* 光碟的点击事件 */
/*
music.onclick = function () {
    if(audio.paused && music.style.animationPlayState == "paused"){
        audio.play();
       /!* this.setAttribute("class","play")*!/
       music.style.animationPlayState = "running";
        music.style.webkitAnimationPlayState = "running";
    }else {
        audio.pause();
       /!* this.setAttribute("class", " ")*!/
        music.style.animationPlayState = "paused";
        music.style.webkitAnimationPlayState = "paused";
    }
}
};*/
