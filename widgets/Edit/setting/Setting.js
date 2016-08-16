// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/Edit/setting/EditFields":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/text!./EditFields.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup".split(" "),function(m,e,n,p,l,h,g,q){return m([h,l],{baseClass:"jimu-widget-edit-setting-fields",templateString:p,_layerInfo:null,postCreate:function(){this.inherited(arguments);this.nls=e.mixin(this.nls,window.jimuNls.common);this._initFieldsTable();this._setFiedsTabele(this._layerInfo.fieldInfos)},
popupEditPage:function(){var f=new q({titleLabel:this.nls.configureFields,width:640,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){this._resetFieldInfos();f.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:e.hitch(this,function(){f.close()})}],onClose:e.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new g({fields:[{name:"visible",title:this.nls.display,type:"checkbox","class":"display"},{name:"isEditable",
title:this.nls.edit,type:"checkbox","class":"editable"},{name:"fieldName",title:this.nls.editpageName,type:"text"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],"class":"actions"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup()},_setFiedsTabele:function(f){n.forEach(f,function(d){this._fieldsTable.addRow({fieldName:d.fieldName,
isEditable:d.isEditable,label:d.label,visible:d.visible})},this);setTimeout(e.hitch(this,function(){n.forEach(this._fieldsTable.fields,function(d){"visible"===d.name?d.onChange=e.hitch(this,this._onDisplayFieldChanged):"isEditable"===d.name&&(d.onChange=e.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_onDisplayFieldChanged:function(f){var d=this._fieldsTable.getRowData(f);!d.visible&&d.isEditable&&(d.isEditable=!1,this._fieldsTable.editRow(f,d))},_onIsEditableFieldChanged:function(f){var d=
this._fieldsTable.getRowData(f);d.isEditable&&!d.visible&&(d.visible=!0,this._fieldsTable.editRow(f,d))},_resetFieldInfos:function(){var f=[],d=this._fieldsTable.getData();n.forEach(d,function(d){f.push({fieldName:d.fieldName,label:d.label,isEditable:d.isEditable,visible:d.visible})});this._layerInfo.fieldInfos=f}})})},"widgets/Edit/utils":function(){define(["dojo/_base/lang","dojo/_base/array"],function(m,e){return{getFieldInfosFromWebmap:function(n,p){var l=null,h=p.getLayerInfoByTopLayerId(n);
h&&(h=h.getPopupInfo())&&h.fieldInfos&&(l=m.clone(h.fieldInfos));l&&e.forEach(l,function(g){g.format&&(g.format.dateFormat&&g.format.dateFormat.toLowerCase()&&0<=g.format.dateFormat.toLowerCase().indexOf("time"))&&(g.format.time=!0)});return l}}})},"widgets/Edit/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Edit/setting/EditFields.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Edit/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.useFilterEdit}\x3c/td\x3e\r\n            \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n                \x3cdiv class\x3d"" style\x3d""\x3e\r\n                    \x3cinput data-dojo-attach-point\x3d"useFilterEdit"\r\n                           data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n                \x3c/div\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.toolbarVisible}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"toolbarVisible" \r\n              data-dojo-attach-event\x3d"click:_onToolbarSelected"\r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"toolbar-options-tr" data-dojo-attach-point\x3d"toolbarOptionsTr"\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1  toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsLabel"\x3e${nls.toolbarOptions}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1  toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsTd"\x3e\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading"\x3e${nls.mergeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading" style\x3d"position: relative"\x3e\r\n              \x3cdiv class\x3d"toolbar-options-coverage" data-dojo-attach-point\x3d"toolbarOptionsCoverage"\x3e\x3c/div\x3e\r\n              \x3cinput   data-dojo-attach-point\x3d"mergeVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.cutVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"cutVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.reshapeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"reshapeVisible" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.enableUndoRedo}\x3c/span\x3e\r\n             \x3cdiv class\x3d"jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cinput  data-dojo-attach-point\x3d"enableUndoRedo" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3cdiv style\x3d"height: 40px;"\x3e\x3c/div\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.autoApplyEditWhenGeometryIsMoved}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"autoApplyEditWhenGeometryIsMoved" \r\n              data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.snappingTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"snappingTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"snappingTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.popupTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"popupTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"popupTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.stickyMoveTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"stickyMoveTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:2000,places:0}"\r\n              name\x3d"stickyMoveTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none; padding: 5px;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Edit/setting/css/style.css":".jimu-widget-edit-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-edit-setting .editable{width: 100px;}.jimu-widget-edit-setting .edit-fields{width: 100px;}.jimu-widget-edit-setting .update{width: 200px;}.jimu-widget-edit-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-edit-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; min-width: 160px; text-align: left;}.jimu-rtl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{text-align: right;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{width: auto;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second \x3e span{display: inline-block; height: 40px; line-height: 40px;}.jimu-widget-edit-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-edit-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-edit-setting .toolbar-options-tr {position: relative;}.jimu-widget-edit-setting .toolbar-options-tr.disable {opacity: 0.4;}.jimu-widget-edit-setting .toolbar-options-coverage{position: absolute; width: 390px; height: 40px; z-index: 1;}.jimu-widget-edit-setting .dijitTextBoxFocused{border-color: #406b9b !important; box-shadow: 0 0 0;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/Edit/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","hr","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/LayerInfos/LayerInfos dojo/_base/lang dojo/_base/html dojo/on dojo/_base/array ./EditFields ../utils dijit/form/NumberSpinner".split(" "),function(m,e,n,p,l,h,g,q,f,d,r){return m([n,e],{baseClass:"jimu-widget-edit-setting",_jimuLayerInfos:null,_layersTable:null,_editableLayerInfos:null,startup:function(){this.inherited(arguments);l.getInstance(this.map,this.map.itemInfo).then(h.hitch(this,function(b){this._jimuLayerInfos=
b;this._init();this.setConfig()}))},_init:function(){this._initToolbar();this._initLayersTable()},_initToolbar:function(){this.useFilterEdit.set("checked",this.config.editor.useFilterEdit);this.toolbarVisible.set("checked",this.config.editor.toolbarVisible);this.enableUndoRedo.set("checked",this.config.editor.enableUndoRedo);this.mergeVisible.set("checked",this.config.editor.toolbarOptions.mergeVisible);this.cutVisible.set("checked",this.config.editor.toolbarOptions.cutVisible);this.reshapeVisible.set("checked",
this.config.editor.toolbarOptions.reshapeVisible);this.autoApplyEditWhenGeometryIsMoved.set("checked",this.config.editor.autoApplyEditWhenGeometryIsMoved);this._onToolbarSelected();this.snappingTolerance.set("value",void 0===this.config.editor.snappingTolerance?15:this.config.editor.snappingTolerance);this.popupTolerance.set("value",void 0===this.config.editor.popupTolerance?5:this.config.editor.popupTolerance);this.stickyMoveTolerance.set("value",void 0===this.config.editor.stickyMoveTolerance?0:
this.config.editor.stickyMoveTolerance)},_initLayersTable:function(){this._layersTable=new p({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:this.nls.label,type:"text"},{name:"disableGeometryUpdate",title:this.nls.update,type:"checkbox","class":"update",width:"300px"},{name:"actions",title:this.nls.fields,type:"actions","class":"edit-fields",actions:["edit"]}],selectable:!1});this._layersTable.placeAt(this.tableLayerInfos);this._layersTable.startup();
this.own(q(this._layersTable,"actions-edit",h.hitch(this,this._onEditFieldInfoClick)))},setConfig:function(){this._editableLayerInfos=this._getEditableLayerInfos();this._setLayersTable(this._editableLayerInfos)},_getEditableLayerInfos:function(){for(var b=[],c=this.map.graphicsLayerIds.length-1;0<=c;c--){var a=this.map.getLayer(this.map.graphicsLayerIds[c]);if("Feature Layer"===a.type&&a.url&&a.isEditable&&a.isEditable()){var k=this._getLayerInfoFromConfiguration(a);k||(k=this._getDefaultLayerInfo(a));
b.push(k)}}return b},_getLayerInfoFromConfiguration:function(b){var c=null,a=this.config.editor.layerInfos;if(a&&0<a.length){for(var k=0;k<a.length;k++)if(a[k].featureLayer&&a[k].featureLayer.id===b.id){c=a[k];break}c&&(c.fieldInfos=this._getSimpleFieldInfos(b,c),c._editFlag=!0)}return c},_getDefaultLayerInfo:function(b){return{featureLayer:{id:b.id},disableGeometryUpdate:!1,fieldInfos:this._getSimpleFieldInfos(b),_editFlag:this.config.editor.layerInfos&&0===this.config.editor.layerInfos.length?!0:
!1}},_setLayersTable:function(b){f.forEach(b,function(b){var a=this._jimuLayerInfos.getLayerInfoById(b.featureLayer.id);this._layersTable.addRow({label:a.title,edit:b._editFlag,disableGeometryUpdate:b.disableGeometryUpdate}).tr._layerInfo=b},this)},_getDefaultSimpleFieldInfos:function(b){for(var c=[],a=0;a<b.fields.length;a++)if(b.fields[a].editable||"globalid"===b.fields[a].name.toLowerCase()||b.fields[a].name===b.objectIdField)c.push({fieldName:b.fields[a].name,label:b.fields[a].alias||b.fields[a].name,
isEditable:("globalid"===b.fields[a].name.toLowerCase()||b.fields[a].name===b.objectIdField)&&!b.fields[a].editable?null:!0,visible:!0});return c},_getWebmapSimpleFieldInfos:function(b){var c=[],a=r.getFieldInfosFromWebmap(b.id,this._jimuLayerInfos);a?(f.forEach(a,function(a){if(void 0!==a.isEditableOnLayer&&(a.isEditableOnLayer||"globalid"===a.fieldName.toLowerCase()||a.fieldName===b.objectIdField))c.push({fieldName:a.fieldName,label:a.label,isEditable:("globalid"===a.fieldName.toLowerCase()||a.fieldName===
b.objectIdField)&&!a.isEditable?null:a.isEditable,visible:a.visible})}),0===c.length&&(c=null)):c=null;return c},_getSimpleFieldInfos:function(b,c){var a,d=[],g=this._getDefaultSimpleFieldInfos(b),e=this._getWebmapSimpleFieldInfos(b);a=e?e:g;c&&c.fieldInfos?(f.forEach(c.fieldInfos,function(b){if(void 0===b.visible)if(e)for(var c=0;c<e.length;c++)b.fieldName===e[c].fieldName&&(b.visible=e[c].visible||e[c].isEditable);else b.visible=!0;for(c=0;c<a.length;c++)if(b.fieldName===a[c].fieldName){d.push(b);
a[c]._exit=!0;break}}),f.forEach(a,function(a){a._exit||d.push(a)})):d=a;return d},_onEditFieldInfoClick:function(b){var c=this._layersTable.getRowData(b);c&&c.edit&&(new d({nls:this.nls,_layerInfo:b._layerInfo})).popupEditPage()},_onToolbarSelected:function(){this.toolbarVisible.checked?(g.removeClass(this.toolbarOptionsTr,"disable"),g.setStyle(this.toolbarOptionsCoverage,"display","none")):(g.addClass(this.toolbarOptionsTr,"disable"),g.setStyle(this.toolbarOptionsCoverage,"display","block"))},_resetToolbarConfig:function(){this.config.editor.useFilterEdit=
this.useFilterEdit.checked;this.config.editor.toolbarVisible=this.toolbarVisible.checked;this.config.editor.enableUndoRedo=this.enableUndoRedo.checked;this.config.editor.toolbarOptions.mergeVisible=this.mergeVisible.checked;this.config.editor.toolbarOptions.cutVisible=this.cutVisible.checked;this.config.editor.toolbarOptions.reshapeVisible=this.reshapeVisible.checked;this.config.editor.autoApplyEditWhenGeometryIsMoved=this.autoApplyEditWhenGeometryIsMoved.checked;this.config.editor.snappingTolerance=
this.snappingTolerance.value;this.config.editor.popupTolerance=this.popupTolerance.value;this.config.editor.stickyMoveTolerance=this.stickyMoveTolerance.value},getConfig:function(){this._resetToolbarConfig();var b=[],c=this._layersTable.getData();f.forEach(this._editableLayerInfos,function(a,d){a._editFlag=c[d].edit;a.disableGeometryUpdate=c[d].disableGeometryUpdate;a._editFlag&&(delete a._editFlag,b.push(a))});0===b.length?delete this.config.editor.layerInfos:this.config.editor.layerInfos=b;return this.config}})});