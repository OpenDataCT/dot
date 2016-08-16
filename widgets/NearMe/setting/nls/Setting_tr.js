// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Mil",acronym:"mi"},kilometers:{displayText:"Kilometre",acronym:"km"},feet:{displayText:"Fit",acronym:"ft"},meters:{displayText:"Metre",acronym:"m"}},searchSetting:{searchSettingTabTitle:"Arama Ayarlar\u0131",defaultBufferDistanceLabel:"Varsay\u0131lan tampon mesafesini ayarla",maxBufferDistanceLabel:"Maksimum tampon mesafesini ayarla",bufferDistanceUnitLabel:"Tampon mesafesi birimleri",defaultBufferHintLabel:"\u0130pucu: Tampon kayd\u0131r\u0131c\u0131s\u0131 i\u00e7in varsay\u0131lan de\u011feri ayarlay\u0131n",
maxBufferHintLabel:"\u0130pucu: Tampon kayd\u0131r\u0131c\u0131s\u0131 i\u00e7in maksimum de\u011feri ayarlay\u0131n",bufferUnitLabel:"\u0130pucu: Tampon olu\u015fturma birimi tan\u0131mlay\u0131n",selectGraphicLocationSymbol:"Adres veya konum simgesi",graphicLocationSymbolHintText:"\u0130pucu: Aranan adres veya t\u0131klanan konum simgesi",fontColorLabel:"Arama sonu\u00e7lar\u0131 i\u00e7in yaz\u0131 tipi rengini belirle",fontColorHintText:"\u0130pucu: Arama sonu\u00e7lar\u0131n\u0131n yaz\u0131 tipi rengi",
zoomToSelectedFeature:"Se\u00e7ili detaya yak\u0131nla\u015ft\u0131r",zoomToSelectedFeatureHintText:"\u0130pucu: Tampon yerine se\u00e7ili detaya yak\u0131nla\u015ft\u0131r\u0131n",intersectSearchLocation:"Kesi\u015fen alanlar\u0131 d\u00f6nd\u00fcr",intersectSearchLocationHintText:"\u0130pucu: Tampon i\u00e7indeki alanlar yerine aranan konumu i\u00e7eren alanlar\u0131 d\u00f6nd\u00fcr\u00fcn",bufferVisibilityLabel:"Tampon g\u00f6r\u00fcn\u00fcrl\u00fc\u011f\u00fcn\u00fc ayarlay\u0131n",bufferVisibilityHintText:"\u0130pucu: Tampon haritada g\u00f6r\u00fcnt\u00fclenecek",
bufferColorLabel:"Tampon sembol\u00fcn\u00fc ayarlay\u0131n",bufferColorHintText:"\u0130pucu: Tamponun rengini ve saydaml\u0131\u011f\u0131n\u0131 belirleyin",searchLayerResultLabel:"Yaln\u0131zca se\u00e7ili katman sonu\u00e7lar\u0131n\u0131 \u00e7iz",searchLayerResultHint:"\u0130pucu: Haritada yaln\u0131zca atama sonu\u00e7lar\u0131nda se\u00e7ilen katman \u00e7izilir"},layerSelector:{selectLayerLabel:"Arama katmanlar\u0131n\u0131 se\u00e7",layerSelectionHint:"\u0130pucu: Katman se\u00e7mek i\u00e7in ayarla d\u00fc\u011fmesini kullan\u0131n",
addLayerButton:"Ayarla"},routeSetting:{routeSettingTabTitle:"Do\u011frultu Ayarlar\u0131",routeServiceUrl:"Rota Olu\u015fturma Servisi",buttonSet:"Ayarla",routeServiceUrlHintText:"\u0130pucu: Bir rota olu\u015fturma servisini inceleyerek se\u00e7mek i\u00e7in \u00e2\u20ac\u02dcAyarla\u00e2\u20ac\u2122 d\u00fc\u011fmesine t\u0131klay\u0131n",directionLengthUnit:"Yol tarifi uzunluk birimi",unitsForRouteHintText:"\u0130pucu: Rota birimini g\u00f6r\u00fcnt\u00fclemek i\u00e7in kullan\u0131l\u0131r",selectRouteSymbol:"Rotay\u0131 g\u00f6r\u00fcnt\u00fclemek i\u00e7in simge se\u00e7",
routeSymbolHintText:"\u0130pucu: Rotan\u0131n \u00e7izgi simgesini g\u00f6r\u00fcnt\u00fclemek i\u00e7in kullan\u0131l\u0131r",routingDisabledMsg:"Yol tarifi \u00f6zelli\u011fini etkinle\u015ftirmek i\u00e7in ArcGIS Online \u00f6\u011fesinde rota olu\u015fturman\u0131n etkinle\u015ftirildi\u011finden emin olun."},networkServiceChooser:{arcgislabel:"ArcGIS Online'dan Ekle",serviceURLabel:"Servis URL'si ekle",routeURL:"Rotalama URL'si",validateRouteURL:"Do\u011frula",exampleText:"\u00d6rnek",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Ge\u00e7erli bir Rota servisi belirtin.",rateLimitExceeded:"H\u0131z s\u0131n\u0131r\u0131 a\u015f\u0131ld\u0131. Daha sonra tekrar deneyin.",errorInvokingService:"Kullan\u0131c\u0131 ad\u0131 ya da parola hatal\u0131."},errorStrings:{bufferErrorString:"Ge\u00e7erli say\u0131sal de\u011fer girin.",selectLayerErrorString:"Aranacak katmanlar\u0131 se\u00e7in.",invalidDefaultValue:"Varsay\u0131lan tampon mesafesi bo\u015f olamaz. Tampon mesafesini belirtin",
invalidMaximumValue:"Maksimum tampon mesafesi bo\u015f olamaz. Tampon mesafesini belirtin",defaultValueLessThanMax:"Varsay\u0131lan tampon mesafesini maksimum s\u0131n\u0131r dahilinde belirtin",defaultBufferValueGreaterThanZero:"0'dan b\u00fcy\u00fck varsay\u0131lan tampon mesafesi belirtin",maximumBufferValueGreaterThanZero:"0'dan b\u00fcy\u00fck maksimum tampon mesafesi belirtin"},symbolPickerPreviewText:"\u00d6nizleme:",_localized:{}}});