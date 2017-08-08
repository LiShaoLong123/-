/**
 * Created by Administrator on 2017/7/31.
 */
$(function(){
     / *顶部的鼠标移入颜色变化*/
    //1.发生的目标元素
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(){
        $(this).css('color','#fff');
    }).mouseout(function () {
        $(this).css('color','#a4b094');
    })
    /*购物车*/
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    })
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
        if(flag){
            $('.sr1 input').css('border','1px solid #000');
            $('.sr2').css('border','1px solid #000').css('borderLeft','none');
        }
    }).mouseout(function(){
        if(flag){
            $('.sr1 input').css('border','1px solid #ccc');
            $('.sr2').css('border','1px solid #ccc').css('borderLeft','none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({
            'color':'#fff',
            'background':'orange'
        })
    }).mouseout(function(){
        $(this).css({
            'color':'#757575',
            'background':'#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.sr2').mouseover(function(){
        if(flag){
            $('.sr1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
        if(flag){
            $('.sr1 input').css('border','1px solid #ccc');
            $(this).css({
                'background':'#fff',
                'color':'#000',
                'border':'1px solid #ccc',
                'border-left':'none'
            })
        }
    })
    /*表单获取焦点的时候*/
    $('.sr1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.sr2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.sr2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*二级菜单*/
    $('.nav li').mouseover(function(){
         $(this).children('a').css('color','#ff6700');
         if($(this).index() < 7){
             $('.select').removeClass('hide');
             $('.select').slideDown().finish();//finish:停止当前动画和动画队列
             $('.select').find('ul').addClass('hide');
             $('.select').find('ul').eq($(this).index()).removeClass('hide');
         }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');

    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish();
    }).mouseout(function(){
        $('.select').slideUp()
    })
     /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        num < 0 ? 4:num;
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        num > 4 ? 0:num;
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        num > 4 ? 0:num;
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移除时。二级导航消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候 ，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })
    /*明星单品*/
    var n = 0;
    var auto = setInterval(function () {
        n++;
        if(n > 1) {
            n = 0;
        }
        $('.item').css('marginLeft', (-1225 * n) + 'px');
        if( n == 0) {
            $('.prev').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
        else if(n == 1) {
            $('.next').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
    }, 10000)
    //手动
    var aa = false;
    var bb = true;
    $('.next').click(function () {
        $('.item').css('marginLeft', '-1225px');
        $('.next').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = true;
        bb = false;
    })
    $('.prev').click(function () {
        $('.item').css('marginLeft', '0');
        $('.prev').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = false;
        bb = true;
    })
    //颜色变化
    $('.next').mouseover(function () {
        if($('.next').css('color') == 'rgb(176, 180, 188)' && aa == false) {
            $(this).css('color', 'red')
        }
    }).mouseout(function () {
        if(aa == false) {
            $(this).css('color', '#b0b4bc');
        }
    })
    $('.prev').mouseover(function () {
        if($('.prev').css('color') == 'rgb(176, 180, 188)' && bb == false) {
            $(this).css('color', 'red')
        }
    }).mouseout(function () {
        if(bb == false) {
            $(this).css('color', '#b0b4bc');
        }
    })
    /*搭配 配件 周边隐藏的东西*/
    $('.productR li').hover(function(){
        $(this).find('.slideDiv').slideToggle('fast');
    })
    /*查看全部*/
    $('.about').mouseover(function(){
        $(this).find('a').css('color','#ff6700');
        $(this).find('i').css('color','#ff6700');
    }).mouseout(function(){
        $(this).find('a').css('color','#424242')
        $(this).find('i').css('color','#b0b0b0')
    })
    /*搭配  配件 周边*/
    $('.list1 li').hover(function(){
        $('.list1 li ').removeClass('active').siblings().eq($(this).index()).addClass('active');
        $('.shaow2>ul  ').addClass('hide').siblings().eq($(this).index()).removeClass('hide');
    })
    $('.list2 li').hover(function(){
        $('.list2 li ').removeClass('active').siblings().eq($(this).index()).addClass('active');
        $('.shaow3>ul ').addClass('hide').siblings().eq($(this).index()).removeClass('hide');
    })
    $('.list3 li').hover(function(){
        $('.list3 li ').removeClass('active').siblings().eq($(this).index()).addClass('active');
        $('.shaow4>ul ').addClass('hide').siblings().eq($(this).index()).removeClass('hide');
    })
    /*为你推荐*/
    $('.head .recommend .prev2').mousemove(function(){
        $(this).css({color:'#ff6700',cursor:' pointer'});
    }).click(function(){
        if($('.score').css('left')!='0px'){
            $('.score').css('left','0px');
            $(this).css({color:'#dfdfe0',cursor:' default'});
            $('.head .recommend .next2').css('color','#b0b4bc')
        }
    })
    $('.head .recommend .next2').mousemove(function(){
        $(this).css({color:'#ff6700',cursor:' pointer'});
    }).click(function(){
        if($('.score').css('left')=='0px'){
            $('.score').css('left','-100%');
            $(this).css({color:'#dfdfe0',cursor:' default'});
            $('.head .recommend .prev2').css('color','#b0b4bc')
        }
    })
    $('.head .recommend .score li').mouseover(function(){
        $(this).css('transform','scale(1.01)')
    }).mouseout(function(){
        $(this).css('transform','scale(1)')
    })
    /* 智能硬件 配件 搭配 周边  热评 视频等阴影特效*/
    $ ('.product1 li').add('.productR li').add('.productL>li')
        .add(' .hotList li').add('.videoList li').mouseover(function(){
        $(this).css({transform:'scale(1.01)',boxShadow:'0 0 28px #aaa'});
    }).mouseout(function(){
        $(this).css({transform:'scale(1)',boxShadow:'none'});
    })
    /*内容*/
    $('.contentList>li').mouseover(function(){
        $(this).find('.p2').css('opacity','1');
    }).mouseout(function(){
        $(this).find('.p2').css('opacity','0');
    });
    // 4个轮播图
    var obj=0
    $('.contentList li ').mousemove(function () {
        var x =0;
        obj = $(this);
        obj.find('.round2 p').click(function(){
            x = $(this).index();
            $(this).css('background','orange').siblings().removeAttr('style');
            obj.find('li').eq(x).removeClass('hide').siblings('li').addClass('hide');
        })
        obj.find('.r2').click(function () {
        //上一张
        x --;
        if(x < 0){x = 4;}
        displayImg1()
        })
        obj.find('.l2').click(function () {
            //下一张
            x ++;
            if(x > 4 ){x = 0;}
            displayImg1()
        })
        function displayImg1() {
            obj.find('li').eq(x).removeClass('hide').siblings('li').addClass('hide');
            obj.find('.round2 p ').eq(x).css('background','orange').siblings().removeAttr('style')
        }
    })
    $('.round2 p:first-of-type').css('background','orange');
    /*视频*/
    $('.videoList li img').add('.icon-bofang').mouseover(function () {
        $(this).next('.icon-bofang').css('color', '#ff6700');
    }).mouseout(function () {
        $(this).next('.icon-bofang').css('color', '#fff');
    });
    $('h2 a').add('.nav1 a').add('.nav2 a').add('.staTxt a').mouseover(function () {
        $(this).css('color', '#ff6700');
    }).mouseout(function () {
        $(this).css('color', '#757575');
    })
})

