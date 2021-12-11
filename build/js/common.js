(function (factory) {
	typeof define === 'function' && define.amd ? define('common', factory) :
	factory();
}((function () { 'use strict';

	// This prevents the page from scrolling down to where it was previously.
	if ("scrollRestoration" in history) {
	  history.scrollRestoration = "manual";
	} // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.


	window.scrollTo(0, 0);
	window.scrollTop = 0;
	window.addEventListener("load", function () {
	  // loader
	  const headCircle1 = document.querySelector(".head-circle_1 svg circle");
	  const headCircle2 = document.querySelector(".head-circle_2 svg circle");
	  const networksCircles = document.querySelectorAll(".networks-circle svg circle");
	  const titorialsCircles = document.querySelectorAll(".tutorials-circle svg circle");
	  ScrollTrigger.matchMedia({
	    // desktop
	    "(min-width: 1400px)": function () {
	      headCircle1.setAttribute("r", "320.5");
	      headCircle2.setAttribute("r", "320.5");
	      networksCircles.forEach(el => {
	        el.setAttribute("r", "235");
	      });
	    },
	    "(max-width: 1399px)": function () {
	      headCircle1.setAttribute("r", "265");
	      headCircle2.setAttribute("r", "265");
	    },
	    "(min-width: 1201px)": function () {
	      titorialsCircles.forEach(el => {
	        el.setAttribute("r", "235");
	      });
	      gsap.set(".head-circle", {
	        x: 0,
	        y: 0
	      });
	    },
	    "(max-width: 1200px)": function () {
	      networksCircles.forEach(el => {
	        el.setAttribute("r", "196");
	      });
	      titorialsCircles.forEach(el => {
	        el.setAttribute("r", "156");
	      });
	      gsap.set(".head-circle", {
	        x: "-50%",
	        y: "-50%"
	      });
	    },
	    "(min-width: 992px)": function () {
	      // Network row 1
	      const networksRow1Tl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".networks-row_1",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        },
	        onComplete: () => {
	          gsap.fromTo(".networks-row_1 .networks-circle_1", {
	            rotate: -380
	          }, {
	            rotate: 0,
	            duration: 30,
	            repeat: -1,
	            ease: "none"
	          });
	          gsap.fromTo(".networks-row_1 .networks-circle_2", {
	            rotate: -380
	          }, {
	            rotate: 0,
	            duration: 20,
	            repeat: -1,
	            ease: "none"
	          });
	        }
	      });
	      networksRow1Tl.fromTo(".networks-row_1 .networks-title", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".networks-row_1 .networks-text", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.75").fromTo(".networks-row_1 .btn", {
	        opacity: 0,
	        x: "-50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.5");
	      networksRow1Tl.fromTo(".networks-row_1 .networks-circle svg circle", {
	        strokeDasharray: "25 1500"
	      }, {
	        strokeDasharray: "25 45",
	        duration: 3,
	        stagger: 0.25,
	        ease: "power4.out"
	      }, "icon-=2").fromTo(".networks-row_1 .networks-icon", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        stagger: 0.5,
	        ease: "elastic.out(1, 0.3)"
	      }, "icon-=1").fromTo(".networks-row_1 .networks-pic", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        ease: "elastic.out(0.3, 0.2)"
	      }, "icon+=0.5"); // Network row 2

	      const networksRow2Tl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".networks-row_2",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        },
	        onComplete: () => {
	          gsap.fromTo(".networks-row_2 .networks-circle_1", {
	            rotate: 380
	          }, {
	            rotate: 0,
	            duration: 30,
	            repeat: -1,
	            ease: "none"
	          });
	          gsap.fromTo(".networks-row_2 .networks-circle_2", {
	            rotate: 380
	          }, {
	            rotate: 0,
	            duration: 20,
	            repeat: -1,
	            ease: "none"
	          });
	        }
	      });
	      networksRow2Tl.fromTo(".networks-row_2 .networks-text", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".networks-row_2 .btn", {
	        opacity: 0,
	        x: "50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.75");
	      networksRow2Tl.fromTo(".networks-row_2 .networks-circle svg circle", {
	        strokeDasharray: "25 1500"
	      }, {
	        strokeDasharray: "25 45",
	        duration: 3,
	        stagger: 0.25,
	        ease: "power4.out"
	      }, "icon-=2").fromTo(".networks-row_2 .networks-icon", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        stagger: 0.5,
	        ease: "elastic.out(1, 0.3)"
	      }, "icon-=1").fromTo(".networks-row_2 .networks-pic", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        ease: "elastic.out(0.3, 0.2)"
	      }, "icon+=0.5");
	    },
	    "(max-width: 991px)": function () {
	      gsap.set(".networks-circle", {
	        x: "-50%",
	        y: "-50%"
	      });
	      headCircle1.setAttribute("r", "200");
	      headCircle2.setAttribute("r", "180");
	      networksCircles.forEach(el => {
	        el.setAttribute("r", "176");
	      }); // Network row 1

	      const networksRow1Tl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".networks-row_1",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      networksRow1Tl.fromTo(".networks-row_1 .networks-title", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".networks-row_1 .networks-text", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.75").fromTo(".networks-row_1 .btn", {
	        opacity: 0,
	        x: "-50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.5");
	      networksRow1Tl.fromTo(".networks-row_1 .networks-circle svg circle", {
	        strokeDasharray: "25 1500"
	      }, {
	        strokeDasharray: "25 45",
	        duration: 3,
	        stagger: 0.25,
	        ease: "power4.out"
	      }, "icon-=2").fromTo(".networks-row_1 .networks-icon", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        stagger: 0.5,
	        ease: "elastic.out(1, 0.3)"
	      }, "icon-=1").fromTo(".networks-row_1 .networks-pic", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        ease: "elastic.out(0.3, 0.2)"
	      }, "icon+=0.5"); // Network row 2

	      const networksRow2Tl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".networks-row_2",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      networksRow2Tl.fromTo(".networks-row_2 .networks-text", {
	        opacity: 0,
	        y: "50%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".networks-row_2 .btn", {
	        opacity: 0,
	        x: "50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.75");
	      networksRow2Tl.fromTo(".networks-row_2 .networks-circle svg circle", {
	        strokeDasharray: "25 1500"
	      }, {
	        strokeDasharray: "25 45",
	        duration: 3,
	        stagger: 0.25,
	        ease: "power4.out"
	      }, "icon-=2").fromTo(".networks-row_2 .networks-icon", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        stagger: 0.5,
	        ease: "elastic.out(1, 0.3)"
	      }, "icon-=1").fromTo(".networks-row_2 .networks-pic", {
	        scale: 0
	      }, {
	        scale: 1,
	        duration: 1,
	        ease: "elastic.out(0.3, 0.2)"
	      }, "icon+=0.5");
	    },
	    "(min-width: 768px)": function () {
	      const loaderPic = document.querySelector(".loader__pic img");
	      const loader = document.querySelector(".loader"); // loader timeline

	      function loaderTl() {
	        var tl = gsap.timeline({
	          onComplete: function () {
	            body.classList.remove("loading");
	            loader.style.display = "none";
	          }
	        });
	        tl.to(".loader__pic", {
	          duration: 2,
	          onComplete: () => {
	            gsap.set(loader, {
	              mixBlendMode: "multiply"
	            });
	            gsap.to(loaderPic, {
	              opacity: 0,
	              duration: 1
	            });
	          }
	        }).to(".loader__inside", {
	          scale: 1,
	          duration: 1
	        });
	        return tl;
	      }

	      function haedDecorTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".head-ball", {
	          scale: 0,
	          y: "-53%"
	        }, {
	          scale: 1,
	          y: "-53%",
	          duration: 4.5,
	          ease: "elastic.out(1, 0.5)"
	        }).fromTo(".head-abs_1 rect", {
	          opacity: 0,
	          y: 10
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power1.inOut",
	          y: 0,
	          stagger: {
	            from: "start",
	            amount: 1
	          },
	          onComplete: () => {
	            gsap.fromTo(".head-abs_1 rect", {
	              y: 0
	            }, {
	              y: 10,
	              duration: 1.5,
	              ease: "power1.inOut",
	              stagger: {
	                repeat: -1,
	                from: "start",
	                yoyo: true,
	                amount: 1
	              }
	            });
	          }
	        }, "-=3").fromTo(".head-abs_2 rect", {
	          opacity: 0,
	          y: 10
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power1.inOut",
	          y: 0,
	          stagger: {
	            from: "start",
	            amount: 1
	          },
	          onComplete: () => {
	            gsap.fromTo(".head-abs_2 rect", {
	              y: 0
	            }, {
	              y: 10,
	              duration: 1.5,
	              ease: "power1.inOut",
	              stagger: {
	                repeat: -1,
	                from: "start",
	                yoyo: true,
	                amount: 1
	              }
	            });
	          }
	        }, "-=2.5");
	        return tl;
	      }

	      function headerTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".logo", {
	          opacity: 0
	        }, {
	          opacity: 1,
	          duration: 1
	        }).fromTo(".nav__item", {
	          opacity: 0,
	          x: "50%"
	        }, {
	          opacity: 1,
	          x: 0,
	          duration: 1,
	          stagger: 0.1
	        }).fromTo(".head-title", {
	          y: "-30%"
	        }, {
	          y: 0,
	          duration: 3,
	          ease: "power1.out"
	        }, "title-=1.5").fromTo(".head-title span", {
	          opacity: 0,
	          y: "-50%"
	        }, {
	          opacity: 1,
	          y: 0,
	          duration: 0.5,
	          ease: "power2.out",
	          stagger: 0.05
	        }, "title-=1").fromTo(".head-btn", {
	          opacity: 0,
	          y: "50%"
	        }, {
	          opacity: 1,
	          y: 0,
	          duration: 1,
	          ease: "power1.out"
	        }, "-=1");
	        return tl;
	      }

	      function headGif() {
	        var tl = gsap.timeline();
	        tl.fromTo(".head-circle_1", {
	          rotate: 20,
	          x: 0,
	          y: 0,
	          opacity: 0
	        }, {
	          rotate: 0,
	          x: 0,
	          y: 0,
	          opacity: 1,
	          duration: 1.5,
	          ease: "power4.out"
	        }, "circle").fromTo(".head-circle_2", {
	          rotate: -20,
	          opacity: 0,
	          x: 0,
	          y: 0
	        }, {
	          rotate: 0,
	          opacity: 1,
	          x: 0,
	          y: 0,
	          duration: 1.5,
	          ease: "power4.out"
	        }, "circle").fromTo(".head-gif", {
	          opacity: 0
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power2.out"
	        }, "circle+=0.5");
	        return tl;
	      }

	      const master = gsap.timeline();
	      master.add(loaderTl()).add(haedDecorTl(), "-=0.5").add(headerTl(), "-=3").add(headGif(), "-=1");
	    },
	    // mobile
	    "(max-width: 767px)": function () {
	      const loaderPic = document.querySelector(".loader__pic img");
	      const loader = document.querySelector(".loader");
	      headCircle1.setAttribute("r", "126");
	      headCircle2.setAttribute("r", "146");
	      networksCircles.forEach(el => {
	        el.setAttribute("r", "126");
	      }); // loader timeline

	      function loaderTl() {
	        var tl = gsap.timeline({
	          onComplete: function () {
	            body.classList.remove("loading");
	            loader.style.display = "none";
	          }
	        });
	        tl.to(".loader__pic", {
	          duration: 2,
	          onComplete: () => {
	            gsap.set(loader, {
	              mixBlendMode: "multiply"
	            });
	            gsap.to(loaderPic, {
	              opacity: 0,
	              duration: 1
	            });
	          }
	        }).to(".loader__inside", {
	          scale: 2,
	          duration: 1
	        });
	        return tl;
	      }

	      function haedDecorTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".head-ball", {
	          opacity: 0,
	          y: "-53%"
	        }, {
	          opacity: 1,
	          y: "-53%",
	          duration: 1,
	          ease: "power1.out"
	        });
	        return tl;
	      }

	      function headerTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".logo", {
	          opacity: 0
	        }, {
	          opacity: 1,
	          duration: 1
	        }).fromTo(".nav__item", {
	          opacity: 0,
	          x: "50%"
	        }, {
	          opacity: 1,
	          x: 0,
	          duration: 1,
	          stagger: 0.1
	        }).fromTo(".head-title", {
	          y: "-50%",
	          opacity: 0
	        }, {
	          y: 0,
	          opacity: 1,
	          duration: 1,
	          ease: "power1.out"
	        }, "title-=1.5").fromTo(".head-btn", {
	          opacity: 0,
	          y: "50%"
	        }, {
	          opacity: 1,
	          y: 0,
	          duration: 1,
	          ease: "power1.out"
	        }, "-=1");
	        return tl;
	      }

	      function headGif() {
	        var tl = gsap.timeline();
	        tl.fromTo(".head-circle_1", {
	          rotate: 20,
	          x: 0,
	          y: 0,
	          opacity: 0
	        }, {
	          rotate: 0,
	          x: 0,
	          y: 0,
	          opacity: 1,
	          duration: 1.5,
	          ease: "power4.out"
	        }, "circle").fromTo(".head-circle_2", {
	          rotate: -20,
	          opacity: 0,
	          x: 0,
	          y: 0
	        }, {
	          rotate: 0,
	          opacity: 1,
	          x: 0,
	          y: 0,
	          duration: 1.5,
	          ease: "power4.out"
	        }, "circle").fromTo(".head-gif", {
	          opacity: 0
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power2.out"
	        }, "circle+=0.5");
	        return tl;
	      }

	      const master = gsap.timeline();
	      master.add(loaderTl()).add(haedDecorTl(), "-=0.5").add(headerTl(), "-=3").add(headGif(), "-=1");
	    },
	    // all
	    all: function () {
	      // Section services
	      const servicesTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_services",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      servicesTl.fromTo(".services-title", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".services-text", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.75"); // Section services

	      const servicesListTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".services__list",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      servicesListTl.fromTo(".services-icon", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".services-subtitle", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        stagger: 0.1,
	        duration: 1
	      }, "text-=0.5").fromTo(".services-subtext", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        stagger: 0.1,
	        ease: "power2.out",
	        duration: 1
	      }, "text"); // Tutorial

	      const tutorialsTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_tutorials",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      tutorialsTl.fromTo(".tutorials-title", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".tutorials-text", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.75");
	      const tutorialsTabTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".tutorials-tab",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      tutorialsTabTl.fromTo(".tab__nav", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".tutorials-info", {
	        opacity: 0,
	        x: "-100%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.75").fromTo(".tutorials-video", {
	        opacity: 0,
	        x: "100%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "-=0.75").fromTo(".tutorials-ball", {
	        opacity: 0,
	        rotate: 45
	      }, {
	        opacity: 1,
	        rotate: 0,
	        duration: 1,
	        transformOrigin: "left bottom"
	      }, "-=0.75").fromTo(".tutorials-pic", {
	        opacity: 0,
	        rotate: -45
	      }, {
	        opacity: 1,
	        rotate: 0,
	        duration: 1,
	        transformOrigin: "right bottom"
	      }, "-=0.75").fromTo(".tutorials-circle_1", {
	        opacity: 0,
	        rotate: -10
	      }, {
	        opacity: 1,
	        rotate: 0,
	        duration: 1
	      }, "circle").fromTo(".tutorials-circle_2", {
	        opacity: 0,
	        rotate: 10
	      }, {
	        opacity: 1,
	        rotate: 0,
	        duration: 1
	      }, "circle");
	      const tutorialsGapTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_tutorials",
	          start: "top bottom",
	          end: "bottom top",
	          scrub: 2.5
	        },
	        defaults: {
	          ease: "power1.out"
	        }
	      });
	      tutorialsGapTl.to(".tutorials-bg", {
	        y: "-15%"
	      }); // Media

	      const mediaTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_media",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      mediaTl.fromTo(".section_media .inner", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".media-video", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        stagger: 0.25,
	        duration: 1
	      }).fromTo(".media-text", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        stagger: 0.25,
	        y: 0,
	        duration: 1
	      }, "-=0.75"); // Team

	      const teamTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_team",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      teamTl.fromTo(".team-title", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".team-avatar", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".team-avatar img", {
	        opacity: 0
	      }, {
	        opacity: 1,
	        duration: 1
	      }, "-=0.9").fromTo(".team-name", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.8").fromTo(".team-pos", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.7").fromTo(".team-icon", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }, "-=0.6"); // Form

	      const formTl = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".section_form",
	          start: "top 50%",
	          end: "top 50%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      formTl.fromTo(".form-title", {
	        opacity: 0,
	        y: "100%"
	      }, {
	        opacity: 1,
	        y: 0,
	        duration: 1
	      }).fromTo(".form input", {
	        opacity: 0,
	        x: "-50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "form").fromTo(".form .btn", {
	        opacity: 0,
	        x: "50%"
	      }, {
	        opacity: 1,
	        x: 0,
	        duration: 1
	      }, "form"); // Footer

	      function footerDecorTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".footer-abs_1 rect", {
	          opacity: 0,
	          y: 10
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power1.inOut",
	          y: 0,
	          stagger: {
	            from: "start",
	            amount: 1
	          },
	          onComplete: () => {
	            gsap.fromTo(".footer-abs_1 rect", {
	              y: 0
	            }, {
	              y: 10,
	              duration: 1.5,
	              ease: "power1.inOut",
	              stagger: {
	                repeat: -1,
	                from: "start",
	                yoyo: true,
	                amount: 1
	              }
	            });
	          }
	        }).fromTo(".footer-abs_2 rect", {
	          opacity: 0,
	          y: 10
	        }, {
	          opacity: 1,
	          duration: 1,
	          ease: "power1.inOut",
	          y: 0,
	          stagger: {
	            from: "start",
	            amount: 1
	          },
	          onComplete: () => {
	            gsap.fromTo(".footer-abs_2 rect", {
	              y: 0
	            }, {
	              y: 10,
	              duration: 1.5,
	              ease: "power1.inOut",
	              stagger: {
	                repeat: -1,
	                from: "start",
	                yoyo: true,
	                amount: 1
	              }
	            });
	          }
	        });
	        return tl;
	      }

	      function footerItemTl() {
	        var tl = gsap.timeline();
	        tl.fromTo(".footer__item", {
	          opacity: 0,
	          y: "100%"
	        }, {
	          opacity: 1,
	          stagger: 0.1,
	          y: 0,
	          duration: 1
	        }).fromTo(".footer-copy", {
	          opacity: 0,
	          y: "50%"
	        }, {
	          opacity: 1,
	          y: 0,
	          duration: 1
	        }, "-=0.5");
	        return tl;
	      }

	      const footerMaster = gsap.timeline({
	        scrollTrigger: {
	          trigger: ".footer",
	          start: "top 75%",
	          end: "top 75%"
	        },
	        defaults: {
	          ease: "expo.out"
	        }
	      });
	      footerMaster.add(footerDecorTl(), "footer").add(footerItemTl(), "footer+=0.5");
	    }
	  }); // Menu

	  const menuBtn = document.querySelector(".js-hamburger"),
	        closeBtns = document.querySelectorAll(".js-hamburger-close"),
	        body = document.querySelector("body");

	  if (menuBtn) {
	    menuBtn.addEventListener("click", e => {
	      e.preventDefault();
	      body.classList.add("menu");
	    });
	  }

	  if (closeBtns) {
	    closeBtns.forEach(el => {
	      el.addEventListener("click", e => {
	        e.preventDefault();
	        body.classList.remove("menu");
	      });
	    });
	  } // Tabs


	  function Tabs(parent) {
	    const menuElements = parent.querySelectorAll("[data-tab]");

	    const bindAll = function () {
	      menuElements.forEach(el => {
	        el.addEventListener("click", change, false);
	      });
	    };

	    const clear = function () {
	      menuElements.forEach(el => {
	        el.parentNode.classList.remove("active");
	        let id = el.getAttribute("data-tab");
	        parent.querySelector(`[data-cont="${id}"]`).classList.add("hide");
	      });
	    };

	    const change = function (e) {
	      e.preventDefault();
	      clear();
	      e.target.parentNode.classList.add("active");
	      let id = e.currentTarget.getAttribute("data-tab");
	      parent.querySelector(`[data-cont="${id}"]`).classList.remove("hide");
	    };

	    bindAll();
	  }

	  const tab = document.querySelector(".tab");

	  if (tab) {
	    const connectTabs = new Tabs(tab);
	  } // Swiper


	  const swiper = new Swiper(".swiper-container", {
	    // Default parameters
	    slidesPerView: 1,
	    spaceBetween: 40,
	    noSwiping: true,
	    noSwipingClass: "swiper-slide",
	    navigation: {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev"
	    },
	    // Responsive breakpoints
	    breakpoints: {
	      // when window width is >= 480px
	      992: {
	        slidesPerView: 2,
	        spaceBetween: 40
	      }
	    }
	  }); // Copy text popup

	  const copyBtn = document.querySelector(".popup-copy-code");

	  if (copyBtn) {
	    copyBtn.addEventListener("click", copyHandler);
	  }

	  function copyHandler(e) {
	    e.preventDefault();
	    /* Get the text field */

	    let copyText = document.querySelector(".popup-input input");
	    /* Select the text field */

	    copyText.select();
	    copyText.setSelectionRange(0, 99999);
	    /* For mobile devices */

	    /* Copy the text inside the text field */

	    document.execCommand("copy");
	  } // Header


	  const header = document.querySelector(".header");
	  let scrollPrev = 0;
	  window.addEventListener("scroll", function () {
	    let scrolled = window.scrollY;

	    if (scrolled > 50) {
	      header.classList.add("fixed");
	    } else {
	      header.classList.remove("fixed");
	    }

	    if (scrolled > 50 && scrolled > scrollPrev) {
	      header.classList.add("out");
	    } else {
	      header.classList.remove("out");
	    }

	    scrollPrev = scrolled;
	  }); // Popup btn change code
	  // Secret Network Address: secretvaloper16k26akna7h295rfjx3278s7xusnt736vy437y8

	  const btnDelegate = document.querySelectorAll(".btn-delegate");
	  const popupInput = document.querySelector(".popup-input input");
	  const popupBtn = document.querySelector(".popup-btn .btn");
	  const popupDigit_1 = document.querySelector(".js-popup-digit-1");
	  const popupDigit_2 = document.querySelector(".js-popup-digit-2");
	  btnDelegate.forEach(btn => {
	    btn.addEventListener("click", function () {
	      if (this.classList.contains("js-secret")) {
	        popupInput.value = "secretvaloper16k26akna7h295rfjx3278s7xusnt736vy437y8";
	        popupBtn.setAttribute("href", "https://secretnodes.com/secret/chains/secret-4/validators/237A513A407E33679C746E350B3307BAA5BCDEFD");
	        /* ------- custom values for Networks popup ------- */

	        popupDigit_1.innerHTML = '5%';
	        popupDigit_2.innerHTML = '30.24%';
	      }

	      if (this.classList.contains("js-sentinel")) {
	        popupInput.value = "sentvaloper1tjgec0ssfrlldmut69xsp8vzljugg0g306aae2";
	        popupBtn.setAttribute("href", "https://explorer.sentinel.co/validator/sentvaloper1tjgec0ssfrlldmut69xsp8vzljugg0g306aae2");
	        /* ------- custom values for Sentinel popup ------- */

	        popupDigit_1.innerHTML = '4%';
	        popupDigit_2.innerHTML = '58.89%';
	      }

	      if (this.classList.contains("js-osmosis")) {
	        popupInput.value = "osmovaloper1md9f5524vtmrn64lyv2pdfn7cnkjkklf44vtjz";
	        popupBtn.setAttribute("href", "https://www.mintscan.io/osmosis/validators/osmovaloper1md9f5524vtmrn64lyv2pdfn7cnkjkklf44vtjz");
	        /* ------- custom values for Osmosis popup ------- */

	        popupDigit_1.innerHTML = '5%';
	        popupDigit_2.innerHTML = '121.32%';
	      }

	      if (this.classList.contains("js-desmos")) {
	        popupInput.value = "desmosvaloper1lf3fg79gf2qf6ept7ec22kjd8s6gj3swr2ca0v";
	        popupBtn.setAttribute("href", "https://explorer.desmos.network/validators/desmosvaloper1lf3fg79gf2qf6ept7ec22kjd8s6gj3swr2ca0v");
	        /* ------- custom values for Desmos popup ------- */

	        popupDigit_1.innerHTML = '10%';
	        popupDigit_2.innerHTML = '100%';
	      }


	      if (this.classList.contains("js-odin")) {
	        popupInput.value = "odinvaloper18av2qz6mckvlj95c9u7sjqvd9sfk40vcxeshk6";
	        popupBtn.setAttribute("href", "https://look.chillvalidation.com/odin/staking/odinvaloper18av2qz6mckvlj95c9u7sjqvd9sfk40vcxeshk6");
	        /* ------- custom values for ODIN popup ------- */

	         popupDigit_1.innerHTML = '10%';
	        popupDigit_2.innerHTML = '100%';
	      }

	       if (this.classList.contains("js-juno")) {
	        popupInput.value = "junovaloper193xl2tqh2tjkld2zv49ku5s44ee4qmgr65jcep";
	        popupBtn.setAttribute("href", "https://www.mintscan.io/juno/validators/junovaloper193xl2tqh2tjkld2zv49ku5s44ee4qmgr65jcep");
	        /* ------- custom values for ODIN popup ------- */

	         popupDigit_1.innerHTML = '5%';
	        popupDigit_2.innerHTML = '70%';
	      }

	         if (this.classList.contains("js-comdex")) {
	        popupInput.value = "comdexvaloper19qz6sgw7llrft2x05lp4swy569e5sla6gl3cuu";
	        popupBtn.setAttribute("href", "https://www.mintscan.io/comdex/validators/comdexvaloper19qz6sgw7llrft2x05lp4swy569e5sla6gl3cuu");
	        /* ------- custom values for ODIN popup ------- */

	         popupDigit_1.innerHTML = '10%';
	        popupDigit_2.innerHTML = '60%';
	      }

	    });
	  }); // Lottie

	  const params = {
	    container: document.getElementById("lottie"),
	    renderer: "svg",
	    loop: true,
	    autoplay: false,
	    path: "./libs/lottie/data.json"
	  };
	  const animLottie = lottie.loadAnimation(params); // Gsap
	  // Services icons
	  // icon1

	  const servIcon1 = document.querySelector(".services-icon_1 .services-icon-wrap");
	  const servIcon1Svg = servIcon1.querySelector("path");
	  const servIcon1CricleBig = document.querySelector(".services-icon_1 .services-icon-circle_1");
	  const servIcon1CricleSmall = document.querySelector(".services-icon_1 .services-icon-circle_2");
	  const servIcon1Length = servIcon1Svg.getTotalLength();
	  const servIcon1Tl = gsap.timeline({
	    repeat: -1,
	    yoyo: true,
	    delay: gsap.utils.random(0.1, 2, 0.1),
	    defaults: {
	      duration: 1.5
	    }
	  });
	  servIcon1Tl.fromTo(servIcon1, {
	    y: 0
	  }, {
	    y: -10,
	    ease: "power3.out",
	    onStart: () => {
	      gsap.fromTo(servIcon1Svg, {
	        strokeDasharray: servIcon1Length,
	        strokeDashoffset: 0
	      }, {
	        strokeDasharray: servIcon1Length,
	        strokeDashoffset: servIcon1Length,
	        ease: "expo.out"
	      });
	    }
	  }, "icon").fromTo(servIcon1CricleSmall, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)",
	    delay: 0.25
	  }, "icon").fromTo(servIcon1CricleBig, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)"
	  }, "icon"); // icon2

	  const servIcon2 = document.querySelector(".services-icon_2 .services-icon-wrap");
	  const servIcon2CricleBig = document.querySelector(".services-icon_2 .services-icon-circle_1");
	  const servIcon2CricleSmall = document.querySelector(".services-icon_2 .services-icon-circle_2");
	  const servIcon2Tl = gsap.timeline({
	    repeat: -1,
	    yoyo: true,
	    delay: gsap.utils.random(0.1, 2, 0.1),
	    defaults: {
	      duration: 1.5
	    }
	  });
	  servIcon2Tl.fromTo(servIcon2, {
	    y: 0
	  }, {
	    y: -10,
	    ease: "power3.out",
	    onStart: () => {
	      gsap.fromTo(servIcon2, {
	        rotateY: 0
	      }, {
	        rotateY: 180,
	        ease: "power3.out"
	      });
	    }
	  }, "icon").fromTo(servIcon2CricleSmall, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)",
	    delay: 0.25
	  }, "icon").fromTo(servIcon2CricleBig, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)"
	  }, "icon"); //icon3

	  const servIcon3 = document.querySelector(".services-icon_3 .services-icon-wrap");
	  const servIcon3CricleBig = document.querySelector(".services-icon_3 .services-icon-circle_1");
	  const servIcon3CricleSmall = document.querySelector(".services-icon_3 .services-icon-circle_2");
	  const servIcon3Tl = gsap.timeline({
	    repeat: -1,
	    yoyo: true,
	    delay: gsap.utils.random(0.1, 2, 0.1),
	    defaults: {
	      duration: 1.5
	    }
	  });
	  servIcon3Tl.fromTo(servIcon3, {
	    y: 0
	  }, {
	    y: -10,
	    ease: "power3.out",
	    onStart: () => {}
	  }, "icon").fromTo(servIcon3, {
	    scale: 0.6
	  }, {
	    scale: 1,
	    ease: "expo.out"
	  }, "icon").fromTo(servIcon3CricleSmall, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)",
	    delay: 0.25
	  }, "icon").fromTo(servIcon3CricleBig, {
	    scale: 0.5,
	    opacity: 0.5
	  }, {
	    scale: 1,
	    opacity: 1,
	    ease: "elastic(0.3, 0.2)"
	  }, "icon"); // Получаем нужный элемент

	  const logo = document.querySelector(".header-wrap-desktop .logo-abs"),
	        btns = document.querySelectorAll(".btn-delegate-abs-text"),
	        btnView = document.querySelector(".tutorials-view-txt"),
	        waveFooterNode = document.querySelector(".footer-bg"),
	        waveServicesNode = document.querySelector(".services-bg"),
	        servIcon1Node = document.querySelector(".services-icon_1"),
	        servIcon2Node = document.querySelector(".services-icon_2"),
	        servIcon3Node = document.querySelector(".services-icon_3"),
	        servIllustr = document.querySelector(".services-illustration");

	  const Visible = function (target, indx) {
	    // Все позиции элемента
	    const targetPosition = {
	      top: window.pageYOffset + target.getBoundingClientRect().top,
	      left: window.pageXOffset + target.getBoundingClientRect().left,
	      right: window.pageXOffset + target.getBoundingClientRect().right,
	      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	    },
	          // Получаем позиции окна
	    windowPosition = {
	      top: window.pageYOffset,
	      left: window.pageXOffset,
	      right: window.pageXOffset + document.documentElement.clientWidth,
	      bottom: window.pageYOffset + document.documentElement.clientHeight
	    };

	    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
	    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
	    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
	    targetPosition.left < windowPosition.right) {
	      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
	      // Если элемент полностью видно, то запускаем следующий код
	      if (target === logo) {
	        logo.style.animationPlayState = "running";
	      }

	      if (target === btns[indx]) {
	        btns[indx].style.animationPlayState = "running";
	      }

	      if (target === btnView) {
	        btnView.style.animationPlayState = "running";
	      } // if (target === waveFooterNode) {
	      // 	waveFooter.play();
	      // }
	      // if (target === waveServicesNode) {
	      // 	waveServices.play();
	      // }


	      if (target === servIcon1Node) {
	        servIcon1Tl.play();
	      }

	      if (target === servIcon2Node) {
	        servIcon2Tl.play();
	      }

	      if (target === servIcon3Node) {
	        servIcon3Tl.play();
	      }

	      if (target === servIllustr) {
	        animLottie.play();
	      }
	    } else {
	      // Если элемент не видно, то запускаем этот код
	      if (target === logo) {
	        logo.style.animationPlayState = "paused";
	      }

	      if (target === btns[indx]) {
	        btns[indx].style.animationPlayState = "paused";
	      }

	      if (target === btnView) {
	        btnView.style.animationPlayState = "paused";
	      } // if (target === waveFooterNode) {
	      // 	waveFooter.pause();
	      // }
	      // if (target === waveServicesNode) {
	      // 	waveServices.pause();
	      // }


	      if (target === servIcon1Node) {
	        servIcon1Tl.pause();
	      }

	      if (target === servIcon2Node) {
	        servIcon2Tl.pause();
	      }

	      if (target === servIcon3Node) {
	        servIcon3Tl.pause();
	      }

	      if (target === servIllustr) {
	        animLottie.stop();
	      }
	    }
	  }; // Заускаем функцию при прокрутке страницы


	  window.addEventListener("scroll", function () {
	    if (logo) {
	      Visible(logo);
	    }

	    if (btns.length) {
	      btns.forEach((el, i) => {
	        Visible(el, i);
	      });
	    }

	    if (btnView) {
	      Visible(btnView);
	    } // if (waveFooterNode) {
	    // 	Visible(waveFooterNode);
	    // }
	    // if (waveServicesNode) {
	    // 	Visible(waveServicesNode);
	    // }


	    if (servIcon1Node) {
	      Visible(servIcon1Node);
	    }

	    if (servIcon2Node) {
	      Visible(servIcon2Node);
	    }

	    if (servIcon3Node) {
	      Visible(servIcon3Node);
	    }

	    if (servIllustr) {
	      Visible(servIllustr);
	    }
	  });

	  if (logo) {
	    Visible(logo);
	  }

	  if (btns.length) {
	    btns.forEach((el, i) => {
	      Visible(el, i);
	    });
	  }

	  if (btnView) {
	    Visible(btnView);
	  } // if (waveFooterNode) {
	  // 	Visible(waveFooterNode);
	  // }
	  // if (waveServicesNode) {
	  // 	Visible(waveServicesNode);
	  // }


	  if (servIcon1Node) {
	    Visible(servIcon1Node);
	  }

	  if (servIcon2Node) {
	    Visible(servIcon2Node);
	  }

	  if (servIcon3Node) {
	    Visible(servIcon3Node);
	  }

	  if (servIllustr) {
	    Visible(servIllustr);
	  }
	});

})));
