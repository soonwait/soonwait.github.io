/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function() {
    if (window.innerWidth <= 770) {
        var menuBtn = document.querySelector('#headerMenu')
        var nav = document.querySelector('#headerNav')
        menuBtn.onclick = function(e) {
            e.stopPropagation()
            if (menuBtn.classList.contains('active')) {
                menuBtn.classList.remove('active')
                nav.classList.remove('nav-show')
            } else {
                nav.classList.add('nav-show')
                menuBtn.classList.add('active')
            }
        }
        document.querySelector('body').addEventListener('click', function() {
            nav.classList.remove('nav-show')
            menuBtn.classList.remove('active')
        })
    }
}());


//////////////////////////back to top////////////////////////////
(function() {
    var backToTop = document.querySelector('.back-to-top')
    var backToTopA = document.querySelector('.back-to-top a')
        // console.log(backToTop);
    window.addEventListener('scroll',function () {


        // 页面顶部滚进去的距离
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

        if (scrollTop > 200) {
            backToTop.classList.add('back-to-top-show')
        } else {
            backToTop.classList.remove('back-to-top-show')
        }
    })

    // backToTopA.addEventListener('click',function (e) {
    //     e.preventDefault()
    //     window.scrollTo(0,0)
    // })

}());

//////////////////////////代码前添加行号////////////////////////////
(function() {
    document.addEventListener("DOMContentLoaded", () => {
        "use strict";
        var elements = document.querySelectorAll('div.highlighter-rouge > pre.highlight');
        Array.prototype.forEach.call(elements, function(pre, idx) {
            var paras = pre.textContent.split("\n");
            var lines = new Array(paras.length);
            for(var i = 0; i < paras.length; i++) {
                var wrap = Math.floor(paras[i].length / 70);
                if (paras[i] == "" && i == paras.length - 1) {
                    lines.splice(i, 1);
                } else {
                    lines[i] = i+1;
                    for(var j = 0; j < wrap; j++) {
                        lines[i] += "\n";
                    }
                }
            }
            var newCode = document.createElement("code");
            newCode.innerHTML = lines.join("\n");
            var newPre = document.createElement("pre");
            newPre.className = "highlight lines";
            newPre.appendChild(newCode);
            pre.parentNode.insertBefore(newPre, pre);
        });
    });
}());
