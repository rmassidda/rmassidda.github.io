//http://www.grall.name/posts/1/antiSpam-emailAddressObfuscation.html
function decode(a) {
    return a.replace(/./g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + 13);
    })
};

function encode(a) {
    return a.replace(/./g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) - 13);
    })
};

function replace_address(a, text=true){
    var string = "`T\\_gb-VbagTVg3e`Tff\\WWT!\\g";
    plain = decode(string);
    a.href = plain;

    if (text){
      a.text = plain.slice(plain.indexOf(":") + 1);
    }
}
