

function startmove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        for (var attr in json) {
            var oattr = 0;
            if (attr == "opacity") {
                oattr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                oattr = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr] - oattr) / 20;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (oattr != json[attr]) {
                flag = false;
            }

            if (attr == "opacity") {
                obj.style.filter = 'alpha(' + attr + ':' + (oattr + speed) + ')';
                obj.style[attr] = (oattr + speed) / 100;
            } else {
                obj.style[attr] = oattr + speed + 'px';
            }

        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn(obj);
            }
        }
    }, 30);

}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
