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

    function setLayoutPfp(cosmetic) {
        $("#pfp").attr("src", cosmetic.images.icon);
        $("#pfp").attr("class", "pfp " + cosmetic.rarity.value);
        $("#pfp").removeAttr("hidden")
        $("#big-pfp").attr("src", cosmetic.images.icon);
        $("#big-pfp").attr("class", "pfp " + cosmetic.rarity.value);
        $("#big-pfp").removeAttr("hidden")
    }

    function setDefaultPfp(id) {
        $("#pfp").attr("src", FORTNITE_API_CDN_BASE + `${id}/icon.png`);
        $("#pfp").attr("class", "pfp common");
        $("#pfp").removeAttr("hidden")
        $("#big-pfp").attr("src", FORTNITE_API_CDN_BASE + `${id}/icon.png`);
        $("#big-pfp").attr("class", "pfp common");
        $("#big-pfp").removeAttr("hidden")
    }

    function setFriendPfp(id, cosmetic) {
        $(`#friend-${id}-preview`).attr("src", cosmetic.images.icon);
        $(`#friend-${id}-preview`).attr("class", "pfp " + cosmetic.rarity.value);
        $(`#friend-${id}-preview`).removeAttr("hidden")
    }

    function setFriendDefaultPfp(id, cosmeticId) {
        $(`#friend-${id}-preview`).attr("src", FORTNITE_API_CDN_BASE + `${cosmeticId}/icon.png`);
        $(`#friend-${id}-preview`).attr("class", "pfp common");
        $(`#friend-${id}-preview`).removeAttr("hidden")
    }

    function setFeaturedPfp(cosmetic) {
        cosmetic.id = cosmetic.id.toLowerCase()
        $(`#featured-${cosmetic.id}-preview`).attr("src", cosmetic.images.icon);
        $(`#featured-${cosmetic.id}-preview`).attr("class", "pfp " + cosmetic.rarity.value);
        $(`#featured-${cosmetic.id}-name`).text(cosmetic.name);
        $(`#featured-${cosmetic.id}-preview`).removeAttr("hidden")
    }

    function setDailyPfp(cosmetic) {
        cosmetic.id = cosmetic.id.toLowerCase()
        $(`#daily-${cosmetic.id}-preview`).attr("src", cosmetic.images.icon);
        $(`#daily-${cosmetic.id}-preview`).attr("class", "pfp " + cosmetic.rarity.value);
        $(`#daily-${cosmetic.id}-name`).text(cosmetic.name);
        $(`#daily-${cosmetic.id}-preview`).removeAttr("hidden")
    }

}
/*
     FILE ARCHIVED ON 15:47:37 Jan 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:32 Apr 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 163.818
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.062
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 114.301 (3)
  PetaboxLoader3.datanode: 122.821 (4)
  load_resource: 47.501
  PetaboxLoader3.resolve: 34.729
*/