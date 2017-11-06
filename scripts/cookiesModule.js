function cookiesModule () {
    function getCookie (key) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + key + "=");
        if (parts.length == 2) 
            return parts.pop().split(";").shift();
        //return "cookie";
    }
    
    function setCookie (key, value) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*36000;
        now.setTime(expireTime);
        // tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
        document.cookie = key+'='+value+';expires='+now.toGMTString()+';path=/';
        
    }
    
    return {
        getCookie: getCookie,
        setCookie: setCookie
    };
}