// Rs Slider
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider1").revolution({
        sliderType: "standard",
        sliderLayout:"fullscreen",
        jsFileLocation: "../assets/revolution/js/",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "hermes",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            }
        },
		responsiveLevels: [1240, 1024, 778, 480],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [768, 768, 700, 700],
    });
	
	jQuery("#sliderFullscreen").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "fullscreen",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "hermes",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            }
        },
		gridwidth:1230,
      gridheight:720
    });
	
	jQuery("#slider2").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "auto",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "hermes",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            }
        },
		responsiveLevels: [1240, 1024, 778, 480],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [768, 768, 700, 700],
    });
});