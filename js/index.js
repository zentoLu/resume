window.mobilecheck = function() {
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};


$(function() {
    var mobile = mobilecheck();
    var en = ['Home', 'Projects', 'Professions', 'Education',
        'Work Experience', 'Jobs Preferred', 'Contact Me'];
    var cn = ['首页', '项目', '技能', '教育', '工作', '求职', '联系'];
    var isCn = window.location.href.indexOf('cn.html') >= 0;
    $('.section').addClass('initing');
    
    $('.initing').removeClass('initing');
    
    $('#pagepiling').fullpage({
        scrollingSpeed: 1000,
        css3: true,
        resize: true,
        sectionsColor: ['transparent', '#1bbc9b', 'transparent', '#4BBFC3', 'transparent', '#7BAABE'],
        anchors: ["page1","page2","page3","page4","page5","page6"],
        verticalCentered: false,
        afterRender: function(){
            $("#home").css({"display":"block"}).addClass("home_zoom");
            $("aside").css({"top":($(".active").height()-$("aside").height())/2});
            $("header").before("<div id='header' style='opacity:0'></div>");    
            $("#home_head").css({"margin-top":"100px"});
            $("header").animate({opacity:"1"},1000,function(){
                $("#header").css({"opacity":"0.3"});
                $("#home_info1").fadeIn(700,function(){
                    $(this).next().animate({width:"800px"},700,function(){
                        $("#home_info2").fadeIn(450,function(){
                            $(this).next().fadeIn(450,function(){
                                $(this).next().fadeIn(450,function(){
                                    $(this).next().fadeIn(450,function(){
                                        $("aside").fadeIn(300);
                                    });
                                });
                            });
                        });
                    });
                });
            }); 
            $("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
            console.log("Hi! 朋友，感谢您阅读简历代码。\n  如果您有什么建议, 欢迎加我^_^ \n %c QQ(491097990)","color: red");
        },
        afterLoad: function(anchorLink,index){
            if(index==1){
                $("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
            }
            if(index==2){
                $("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
                $("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
                $(".title_en").animate({width:"130px"},800,function(){
                    $(".title_en h2").slideDown(400);
                });
                $("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
                    $("#about_info p").eq(0).animate({bottom:"0"},700,function(){
                        $("#about_info p").eq(1).animate({bottom:"0"},700,function(){
                            $("#about_info p").eq(2).animate({bottom:"0"},700,function(){
                                $("#about_info p").eq(3).animate({bottom:"0"},700);
                            });
                        });
                    });
                }); 
            }
            if(index==3){
                $("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
                $("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
                $(".title_en").animate({width:"130px"},800,function(){
                    $(".title_en h2").slideDown(400);
                }); 
                $(".skill_list_content").addClass("skill_scale");
            }
            if(index==4){
                $("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
                $("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
                $(".title_en").animate({width:"130px"},800,function(){
                    $(".title_en h2").slideDown(400);
                }); 
                var i=-1;
                $(".exp_scale").each(function() {
                    var $this=$(this);
                    if(!$this.hasClass("b_to_t")){
                        i++;
                        setTimeout(function(){
                       $this.addClass("b_to_t");
                       },200*i);
                    }
                });
                $("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
            }
            if(index==5){
                $("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
                $("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
                $(".title_en").animate({width:"130px"},800,function(){
                    $(".title_en h2").slideDown(400);
                }); 
                var i=-1;
                $(".demo_scale").each(function() {
                    var $this=$(this);
                    if(!$this.hasClass("b_to_t")){
                        i++;
                        setTimeout(function(){
                       $this.addClass("b_to_t");
                       },200*i);
                    }
                })
            }
            if(index==6){
                $("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
                $("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
                $(".title_en").animate({width:"130px"},800,function(){
                    $(".title_en h2").slideDown(400);
                }); 
                var i=-1;
                $("#contact_head1").addClass("b_to_t");
                $("#contact_head2 span").each(function(){
                    var $this=$(this);
                    if(!$this.hasClass("fade_in")){
                        i++;
                        setTimeout(function(){
                       $this.addClass("fade_in");
                       },200*i);
                    }
                });
                var j=-1;
                setTimeout(function(){
                        $(".contact_scale").each(function(){
                            var $this=$(this);
                            if(!$this.hasClass("fade_in")){
                                j++;
                                setTimeout(function(){
                                    $this.addClass("fade_in");
                                },350*j);
                            }
                        });
                },70);
            }
        },
        onLeave:function(index){
            if(index==2||index==3||index==4||index==5||index==6){
                $(".title_en").remove();    
            }
        }
    });
    
    particlesJS("particles", {
        "particles": {
            number: {
                value: 20,
                density: {
                    enable: !0,
                    value_area: 1E3
                }
            },
            color: {
                value: "#e1e1e1"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 15,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 180,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 650,
                color: "#cfcfcf",
                opacity: .26,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    

});