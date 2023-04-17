var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    window.onload = updateNavbar;
    window.onscroll = updateNavbar;
    window.onresize = updateNavbar;

    function updateNavbar(e) {
        var element = document.getElementById('navbar');
        var btt = document.getElementById('btt-overlay');
        if (window.pageYOffset > window.innerHeight / 2) {
            element.classList.remove('nav-blend');
            btt.classList.remove('hidden');
        } else {
            element.classList.add('nav-blend');
            btt.classList.add('hidden');
        }
    }

}
/*
     FILE ARCHIVED ON 15:47:45 Jan 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:45:45 Apr 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 176.596
  exclusion.robots: 0.508
  exclusion.robots.policy: 0.493
  cdx.remote: 0.106
  esindex: 0.013
  LoadShardBlock: 141.536 (3)
  PetaboxLoader3.datanode: 142.488 (4)
  load_resource: 112.266
  PetaboxLoader3.resolve: 95.424
*/