var feednami: any = {};
(feednami.load = function(e, n) {
  var o = "https://api.feednami.com/api/v1",
    a = e;
  "object" == typeof e && (a = e.url);
  var t = "url=" + a;
  e.format && (t += "&include_xml_document&format=" + e.format),
    e.includeXml && (t += "&include_xml_document");
  var d = o + "/feeds/load?" + t;
  if ((window as any).XDomainRequest) {
    var l = document.createElement("script"),
      i =
        "jsonp_callback_" +
        new Date().getTime() +
        "_" +
        Math.round(1e6 * Math.random());
    (d += "&jsonp_callback=" + i),
      (window[i] = function(e) {
        n(e), document.body.removeChild(l), (window[i] = null);
        try {
          delete window[i];
        } catch (o) {}
      }),
      (l.src = d),
      document.body.appendChild(l);
  } else {
    var r = new XMLHttpRequest();
    (r.onreadystatechange = function() {
      4 == r.readyState && n(JSON.parse(r.responseText));
    }),
      r.open("GET", d),
      r.send();
  }
}),
  (feednami.loadGoogleFormat = function(e, n) {
    return feednami.load({ url: e, format: "google", includeXml: !0 }, n);
  });
export default feednami;
