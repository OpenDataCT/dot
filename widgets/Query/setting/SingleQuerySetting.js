// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Query/setting/SingleQuerySetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"filterDiv" style\x3d"height:1px;visibility:hidden;overflow:hidden;"\x3e\x3c/div\x3e\r\n\t\x3ctable data-dojo-attach-point\x3d"generalTable" class\x3d"general" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"first-td"\x3e${nls.querySource}\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%;border-collapse:collapse;"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"urlTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true,disabled:true\' style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:40px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"setting-btn jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" title\x3d"${nls.setSource}"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"detailSection" class\x3d"detail"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"infoTabNode"\x3e\r\n\t\t\t\x3ctable class\x3d"general" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e${jimuNls.common.title}\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"queryNameTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;" data-dojo-attach-event\x3d"change:_onQueryNameChanged"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e${nls.icon}\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"click-picker" data-dojo-attach-event\x3d"click:_onImageChooserDivClicked"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/ImageChooser" data-dojo-attach-point\x3d"imageChooser" data-dojo-props\x3d"cropImage:true,showSelfImg:true,goldenWidth:16,goldenHeight:16,format:[\'image/gif\',\'image/png\',\'image/jpeg\']" class\x3d"jimu-float-leading" style\x3d"width:16px;height:16px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"definitionTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"attribute-filter-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.attributeCriteira}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"attribute-filter-content"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-widget-note" style\x3d"margin-top:5px;"\x3e${nls.defineWhereClause}\x3c/div\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;margin-top:4px;"\x3e\r\n\t\t\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t\t\x3ccol width\x3d"40"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"attribute-sql jimu-widget-note" data-dojo-attach-point\x3d"sqlDiv" style\x3d"border:1px solid #ccc;padding:7px 8px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"setting-btn jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnFilterClicked" title\x3d"${nls.setSource}"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"margin-top:13px;" data-dojo-attach-point\x3d"showSQLSection"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-section" data-dojo-attach-point\x3d"spatialFilterDiv"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"resultsTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"popup-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.content}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"popupContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"symbolSection" class\x3d"symbol-section" style\x3d"margin-top:14px;"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress" style\x3d"margin-bottom:15px;"\x3e${nls.symbol}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:5px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container"\x3e\r\n\t\t\t\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"radioServiceSymbol" /\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelServiceSymbol"\x3e${nls.serviceSymbolTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container" style\x3d"margin-top:8px;"\x3e\r\n\t\t\t\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"radioCustomSymbol" checked /\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelCustomSymbol"\x3e${nls.setSymbol}\x3c/label\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"layerSymbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"optionsTabNode"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"cbxKeepResultsDiv" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"export-section" data-dojo-attach-point\x3d"exportSection"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"create-layer-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.createLayerForTaskTip}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:15px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container"\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"radioOneLayerPerTask" type\x3d"radio" checked /\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelOneLayerPerTask"\x3e${nls.oneLayerForTaskTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container" style\x3d"margin-top:15px;"\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"radioMultipleLayerPerTask" type\x3d"radio" /\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelMultipleLayerPerTask"\x3e${nls.multipleLayerForTaskTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleQuerySetting.html dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/Evented dojo/Deferred jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox jimu/dijit/TabContainer3 jimu/dijit/Message jimu/dijit/_QueryableLayerSourcePopup ../utils ./PopupConfig ./SpatialFilterConfig esri/request esri/symbols/jsonUtils jimu/dijit/Filter jimu/dijit/SymbolPicker jimu/dijit/LoadingShelter jimu/dijit/ImageChooser dijit/form/ValidationTextBox".split(" "),
function(n,p,q,r,s,f,g,k,t,u,v,d,w,l,x,m,y,h,z,A,B,C,D){return n([p,q,r,u],{baseClass:"jimu-widget-single-query-setting",templateString:s,popupConfig:null,spatialFilterConfig:null,jimuNls:null,_webMapLayerId:null,_defaultTaskIcon:null,map:null,nls:null,target:null,tr:null,appConfig:null,folderUrl:null,_layerDefinition:null,postMixInProperties:function(){this.inherited(arguments);this._defaultTaskIcon=this.folderUrl+"css/images/default_task_icon.png";this.jimuNls=window.jimuNls},postCreate:function(){this.inherited(arguments);
this._initSelf()},destroy:function(){this.target=null;this.emit("before-destroy");this.inherited(arguments)},setConfig:function(a){this.config=a;if(this._isObject(this.config)){var b=a.url||"";b&&"string"===typeof b&&(this.showBigShelter(),this.tab.showShelter(),this._layerDefinition&&this._layerDefinition.url===b?this._resetByConfig(this.config,this._layerDefinition).promise.always(f.hitch(this,function(){this.hideBigShelter();this.tab.hideShelter()})):(this._layerDefinition=null,B({url:b,handAs:"json",
content:{f:"json"},callbackParamName:"callback"}).then(f.hitch(this,function(a){this.domNode&&(this._layerDefinition=a,this._layerDefinition.url=b,this._resetByConfig(this.config,this._layerDefinition).promise.always(f.hitch(this,function(){this.hideBigShelter();this.tab.hideShelter()})))}),f.hitch(this,function(a){console.error(a);this.domNode&&this.hideBigShelter()}))))}},getConfig:function(){var a={url:"",name:"",icon:"",filter:null,showSQL:!1,spatialFilter:null,popupInfo:"",orderByFields:[],useLayerSymbol:!0,
resultsSymbol:"",keepResultsOnMapAfterCloseWidget:!0,enableExport:!1,singleResultLayer:!0,webMapLayerId:this._webMapLayerId};if(!this._layerDefinition)return this.scrollToDom(this.generalTable),new m({message:this.nls.setSourceTip}),null;a.url=this._layerDefinition.url;if(!this.queryNameTextBox.validate())return d.showValidationErrorTipForFormDijit(this.queryNameTextBox),null;a.name=this.queryNameTextBox.get("value");var b=this.imageChooser.getImageData();b===this._defaultTaskIcon&&(b="");a.icon=
b;b=this.filter.toJson();if(!b)return new m({message:this.nls.setFilterTip}),null;a.filter=b;a.showSQL=this.cbxShowSQL.getValue();if(h.isTable(this._layerDefinition))a.spatialFilter=null;else{b=this.spatialFilterConfig.getConfig();if(!b)return null;a.spatialFilter=b}b=this.popupConfig.getConfig();if(!b)return null;a.orderByFields=b.orderByFields;a.popupInfo=b.popupInfo;b=null;if(h.isTable(this._layerDefinition))a.useLayerSymbol=!1,a.resultsSymbol=null;else if(h.isImageServiceLayer(this._layerDefinition))if(a.useLayerSymbol=
!1,b=this.layerSymbolPicker.getSymbol())a.resultsSymbol=b.toJson();else return console.error("Can't get symbol from SymbolPicker"),null;else if(this.radioCustomSymbol.checked)if(a.useLayerSymbol=!1,b=this.layerSymbolPicker.getSymbol())a.resultsSymbol=b.toJson();else return console.error("Can't get symbol from SymbolPicker"),null;else a.useLayerSymbol=!0,a.resultsSymbol=null;a.keepResultsOnMapAfterCloseWidget=this.cbxKeepResults.getValue();a.singleResultLayer=this.radioOneLayerPerTask.checked;a.enableExport=
this.cbxExport.getValue();this.target._layerDefinition=this._layerDefinition;return this.target.singleConfig=a},scrollToDom:function(a){a=g.coords(a).y;var b=g.coords(this.domNode).y;this.domNode.parentNode.scrollTop=a-b},showBigShelter:function(){this.emit("loading")},hideBigShelter:function(){this.emit("unloading")},showQueryDefinition:function(){this.tab.selectTab(this.nls.queryDefinition)},showResultsSetting:function(){this.tab.selectTab(this.nls.results)},_initSelf:function(){this._initTabs();
this._initInfoTab();this._initFilterTab();this._initResultSettingTab();this._initOptionsTab()},_initTabs:function(){this.tab=new x({tabs:[{title:this.nls.infoText,content:this.infoTabNode},{title:this.nls.filters,content:this.definitionTabNode},{title:this.nls.results,content:this.resultsTabNode},{title:this.nls.optionsText,content:this.optionsTabNode}]});this.tab.placeAt(this.detailSection);this.tab.showShelter();this.own(k(this.tab,"tabChanged",f.hitch(this,function(a){a===this.nls.filters&&this._updateSqlDivByFilter()})))},
_initInfoTab:function(){this._setDefaultTaskIcon()},_onImageChooserDivClicked:function(a){this.imageChooser.mask&&(a=a.target||a.srcElement,a!==this.imageChooser.mask&&a!==this.imageChooser.fileInput&&d.simulateClickEvent(this.imageChooser.mask))},_initFilterTab:function(){this.filter=new D({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;"});this.filter.placeAt(this.filterDiv);this.cbxShowSQL=new l({label:this.nls.displaySQLTip});this.cbxShowSQL.labelNode&&g.addClass(this.cbxShowSQL.labelNode,
"light-stress");this.cbxShowSQL.check();this.cbxShowSQL.placeAt(this.showSQLSection);this._initSpatialFilterConfig()},_resetAttributeFilter:function(){this.filter.reset();this._updateSqlDivByFilter()},_updateSqlDivByFilter:function(){var a="",b=this.filter.toJson();b?a=b.expr?"1\x3d1"===b.expr?this.nls.noExpressionDefinedTip:b.expr:this.nls.specifyFilterAtRuntimeTip:console.log("can't get partsObj from filter");a&&(this.sqlDiv.innerHTML=a)},_onBtnFilterClicked:function(){var a=new w({width:680,height:485,
content:this.filter,buttons:[{label:this.nls.ok,onClick:f.hitch(this,function(){this.filter.toJson()&&(a.content=null,g.place(this.filter.domNode,this.filterDiv),this._updateSqlDivByFilter(),a.close())})},{label:this.nls.cancel,onClick:f.hitch(this,function(){a.content=null;g.place(this.filter.domNode,this.filterDiv);a.close()})}]})},_initSpatialFilterConfig:function(){this.spatialFilterConfig=new A({nls:this.nls});this.spatialFilterConfig.placeAt(this.spatialFilterDiv)},_initResultSettingTab:function(){this._initPopupConfig();
d.combineRadioCheckBoxWithLabel(this.radioServiceSymbol,this.labelServiceSymbol);d.combineRadioCheckBoxWithLabel(this.radioCustomSymbol,this.labelCustomSymbol);d.groupRadios([this.radioServiceSymbol,this.radioCustomSymbol])},_initPopupConfig:function(){this.popupConfig=new z({nls:this.nls,sqs:this});this.popupConfig.placeAt(this.popupContainer)},_showSymbolSection:function(){g.removeClass(this.symbolSection,"not-visible")},_hideSymbolSection:function(){g.addClass(this.symbolSection,"not-visible")},
_initOptionsTab:function(){this.cbxKeepResults=new l({label:this.nls.keepResultsTip});this.cbxKeepResults.placeAt(this.cbxKeepResultsDiv);this.cbxExport=new l({label:this.nls.exportTip});this.cbxExport.placeAt(this.exportSection);d.combineRadioCheckBoxWithLabel(this.radioOneLayerPerTask,this.labelOneLayerPerTask);d.combineRadioCheckBoxWithLabel(this.radioMultipleLayerPerTask,this.labelMultipleLayerPerTask);d.groupRadios([this.radioOneLayerPerTask,this.radioMultipleLayerPerTask])},_onQueryNameChanged:function(){var a=
t(".label",this.target)[0],b=this.queryNameTextBox.get("value");a.innerHTML=b;a.title=b},_clear:function(){this.urlTextBox.set("value","");this._layerDefinition=null;this.queryNameTextBox.set("value","");this._setDefaultTaskIcon();this._resetAttributeFilter();g.removeClass(this.spatialFilterDiv,"not-visible");this.spatialFilterConfig.reset();this.cbxShowSQL.check();this.tab.showShelter();this.popupConfig.onLayerChange(!0);this.radioServiceSymbol.disabled=!1;this.radioCustomSymbol.checked=!0;this.layerSymbolPicker.reset();
this.cbxKeepResults.uncheck();this.radioOneLayerPerTask.checked=!0;this.cbxExport.uncheck()},_onBtnSetSourceClicked:function(){var a=new y({titleLabel:this.nls.setDataSource,dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});this.own(k(a,"ok",f.hitch(this,function(b){var e=a.getSelectedRadioType();a.close();a=null;this.setNewLayerDefinition(b,e,null)})));this.own(k(a,"cancel",f.hitch(this,function(){a.close();a=null})));a.startup()},
setNewLayerDefinition:function(a,b,e){a.definition.name=a.name;a.definition.url=a.url;a.url!==(this._layerDefinition&&this._layerDefinition.url)&&this._resetByNewLayerDefinition(a,b,e)},_resetByNewLayerDefinition:function(a,b,e){var c=a.definition;this._clear();if(c){var d=null;"map"===b&&a.layerInfo&&(d=a.layerInfo.id);this._layerDefinition=c;this._webMapLayerId=d;a=c.url;this.urlTextBox.set("value",a);this.queryNameTextBox.set("value",e||c.name);this.tab.hideShelter();this._resetAttributeFilter();
this._layerDefinition&&this.filter.buildByExpr(a,"1\x3d1",this._layerDefinition).promise.always(f.hitch(this,function(){this._updateSqlDivByFilter()}));h.isTable(this._layerDefinition)?g.addClass(this.spatialFilterDiv,"not-visible"):g.removeClass(this.spatialFilterDiv,"not-visible");this.popupConfig.onLayerChange(!!this._webMapLayerId);this._webMapLayerId&&this.popupConfig.setConfig({popupInfo:{readFromWebMap:!0},orderByFields:[]});this._handleSymbolSection(c)}},_handleSymbolSection:function(a,b){var e=
"";this._showSymbolSection();if(h.isTable(a))this.radioServiceSymbol.disabled=!0,this._hideSymbolSection(),this.layerSymbolPicker.reset();else if(h.isImageServiceLayer(a))this.radioServiceSymbol.disabled=!0,this.radioCustomSymbol.checked=!0,e="fill";else if(this.radioServiceSymbol.disabled=!1,a.geometryType){var c=d.getTypeByGeometryType(a.geometryType);"point"===c?e="marker":"polyline"===c?e="line":"polygon"===c&&(e="fill")}e&&(this.layerSymbolPicker.showByType(e),b&&this.layerSymbolPicker.showBySymbol(b))},
_setDefaultTaskIcon:function(){this.imageChooser.setDefaultSelfSrc(this._defaultTaskIcon)},_resetByConfig:function(a,b){var e=new v,c=f.clone(a);this._upgradeConfigForLowerVersion(b,c);this._webMapLayerId=c.webMapLayerId;this.urlTextBox.set("value",c.url);this.queryNameTextBox.set("value",c.name||"");c.icon?this.imageChooser.setDefaultSelfSrc(c.icon):this._setDefaultTaskIcon();var d=c.filter;this._resetAttributeFilter();var k=null,k=this._isObject(d)?this.filter.buildByFilterObj(b.url,d,b):this.filter.buildByExpr(b.url,
"1\x3d1",b);k.promise.always(f.hitch(this,function(){this._updateSqlDivByFilter();e.resolve()}));this.cbxShowSQL.setValue(c.showSQL);this.spatialFilterConfig.reset();h.isTable(this._layerDefinition)?g.addClass(this.spatialFilterDiv,"not-visible"):(g.removeClass(this.spatialFilterDiv,"not-visible"),c.spatialFilter&&this.spatialFilterConfig.setConfig(c.spatialFilter));this.popupConfig.onLayerChange(!!this._webMapLayerId);this.popupConfig.setConfig({popupInfo:c.popupInfo,orderByFields:c.orderByFields});
d=null;if(c.resultsSymbol)try{d=C.fromJson(c.resultsSymbol)}catch(l){console.error(l)}this._handleSymbolSection(b,d);c.useLayerSymbol&&(this.radioServiceSymbol.checked=!0);this.cbxKeepResults.setValue(c.keepResultsOnMapAfterCloseWidget);c.singleResultLayer?this.radioOneLayerPerTask.checked=!0:this.radioMultipleLayerPerTask.checked=!0;this.cbxExport.setValue(c.enableExport);return e},_upgradeConfigForLowerVersion:function(a,b){b.popup&&!b.popupInfo&&(b.popupInfo=h.upgradePopupToPopupInfo(a,b.popup))},
_isObject:function(a){return a&&"object"===typeof a}})});