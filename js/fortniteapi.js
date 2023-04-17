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

    const FORTNITE_API_BASE = "https://fortnite-api.com/v2/"
    const FORTNITE_API_CDN_BASE = "https://fortnite-api.com/images/cosmetics/br/"
    const endpoints = {
        CosmeticsById: FORTNITE_API_BASE + `cosmetics/br/search/ids`,
        CosmeticsByName: (name) => FORTNITE_API_BASE + `cosmetics/br/search/all?name=midas`
    }

    function getCosmeticsById(ids) {
        return new Promise((resolve, reject) => {
            if (typeof ids === 'string' || ids instanceof String)
                ids = [ids];
            $.ajax({
                url: endpoints.CosmeticsById,
                headers: {
                    "Content-Type": "application/json"
                },
                type: "POST",
                data: JSON.stringify(ids),
                success: (res) => {
                    resolve(res.data);
                },
                error: () => {
                    resolve([]);
                }
            })
        })
    }

    function getCosmeticsByName(name) {
        $.ajax({
            url: endpoints.CosmeticsByName(name),
            type: "GET",
            success: (res) => {
                return res.data.data;
            }
        })
    }

    function buildIdQueryString(array) {
        var final = ""
        for (var i = 0; i < array.length; i++) {
            final += `id=${array[i]}`
            if ((i + 1) != array.length)
                final += "&"
        }
        return final
    }

}
/*
     FILE ARCHIVED ON 15:47:45 Jan 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:45:04 Apr 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 112.784
  exclusion.robots: 0.163
  exclusion.robots.policy: 0.147
  cdx.remote: 0.098
  esindex: 0.012
  LoadShardBlock: 76.394 (3)
  PetaboxLoader3.datanode: 154.031 (4)
  load_resource: 156.097
  PetaboxLoader3.resolve: 51.564
*/