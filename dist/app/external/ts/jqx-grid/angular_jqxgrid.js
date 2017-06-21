"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var jqxGridComponent = (function () {
    function jqxGridComponent(containerElement) {
        this.OnBindingcomplete = new core_1.EventEmitter();
        this.OnColumnresized = new core_1.EventEmitter();
        this.OnColumnreordered = new core_1.EventEmitter();
        this.OnColumnclick = new core_1.EventEmitter();
        this.OnCellclick = new core_1.EventEmitter();
        this.OnCelldoubleclick = new core_1.EventEmitter();
        this.OnCellselect = new core_1.EventEmitter();
        this.OnCellunselect = new core_1.EventEmitter();
        this.OnCellvaluechanged = new core_1.EventEmitter();
        this.OnCellbeginedit = new core_1.EventEmitter();
        this.OnCellendedit = new core_1.EventEmitter();
        this.OnFilter = new core_1.EventEmitter();
        this.OnGroupschanged = new core_1.EventEmitter();
        this.OnGroupexpand = new core_1.EventEmitter();
        this.OnGroupcollapse = new core_1.EventEmitter();
        this.OnPagechanged = new core_1.EventEmitter();
        this.OnPagesizechanged = new core_1.EventEmitter();
        this.OnRowclick = new core_1.EventEmitter();
        this.OnRowdoubleclick = new core_1.EventEmitter();
        this.OnRowselect = new core_1.EventEmitter();
        this.OnRowunselect = new core_1.EventEmitter();
        this.OnRowexpand = new core_1.EventEmitter();
        this.OnRowcollapse = new core_1.EventEmitter();
        this.OnSort = new core_1.EventEmitter();
        this.elementRef = containerElement;
    }
    jqxGridComponent.prototype.isHostReady = function () {
        return (this.host !== undefined && this.host.length == 1);
    };
    jqxGridComponent.prototype.createWidget = function (options) {
        if (!this.isHostReady()) {
            this.host = $(this.elementRef.nativeElement.firstChild);
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);
            this.__updateRect__();
        }
    };
    jqxGridComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.containerWidth, height: this.containerHeight });
    };
    jqxGridComponent.prototype.setOptions = function (options) {
        this.host.jqxGrid('setOptions', options);
    };
    jqxGridComponent.prototype.altrows = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('altrows', arg);
        }
        else {
            return this.host.jqxGrid('altrows');
        }
    };
    jqxGridComponent.prototype.altstart = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('altstart', arg);
        }
        else {
            return this.host.jqxGrid('altstart');
        }
    };
    jqxGridComponent.prototype.altstep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('altstep', arg);
        }
        else {
            return this.host.jqxGrid('altstep');
        }
    };
    jqxGridComponent.prototype.autoshowloadelement = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowloadelement', arg);
        }
        else {
            return this.host.jqxGrid('autoshowloadelement');
        }
    };
    jqxGridComponent.prototype.autoshowfiltericon = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowfiltericon', arg);
        }
        else {
            return this.host.jqxGrid('autoshowfiltericon');
        }
    };
    jqxGridComponent.prototype.autoshowcolumnsmenubutton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
        }
        else {
            return this.host.jqxGrid('autoshowcolumnsmenubutton');
        }
    };
    jqxGridComponent.prototype.clipboard = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('clipboard', arg);
        }
        else {
            return this.host.jqxGrid('clipboard');
        }
    };
    jqxGridComponent.prototype.closeablegroups = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('closeablegroups', arg);
        }
        else {
            return this.host.jqxGrid('closeablegroups');
        }
    };
    jqxGridComponent.prototype.columnsmenuwidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenuwidth', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenuwidth');
        }
    };
    jqxGridComponent.prototype.columnmenuopening = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuopening', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuopening');
        }
    };
    jqxGridComponent.prototype.columnmenuclosing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuclosing', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuclosing');
        }
    };
    jqxGridComponent.prototype.cellhover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('cellhover', arg);
        }
        else {
            return this.host.jqxGrid('cellhover');
        }
    };
    jqxGridComponent.prototype.enablekeyboarddelete = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enablekeyboarddelete', arg);
        }
        else {
            return this.host.jqxGrid('enablekeyboarddelete');
        }
    };
    jqxGridComponent.prototype.enableellipsis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enableellipsis', arg);
        }
        else {
            return this.host.jqxGrid('enableellipsis');
        }
    };
    jqxGridComponent.prototype.enablemousewheel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enablemousewheel', arg);
        }
        else {
            return this.host.jqxGrid('enablemousewheel');
        }
    };
    jqxGridComponent.prototype.enableanimations = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enableanimations', arg);
        }
        else {
            return this.host.jqxGrid('enableanimations');
        }
    };
    jqxGridComponent.prototype.enabletooltips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enabletooltips', arg);
        }
        else {
            return this.host.jqxGrid('enabletooltips');
        }
    };
    jqxGridComponent.prototype.enablehover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enablehover', arg);
        }
        else {
            return this.host.jqxGrid('enablehover');
        }
    };
    jqxGridComponent.prototype.enablebrowserselection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('enablebrowserselection', arg);
        }
        else {
            return this.host.jqxGrid('enablebrowserselection');
        }
    };
    jqxGridComponent.prototype.everpresentrowposition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowposition', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowposition');
        }
    };
    jqxGridComponent.prototype.everpresentrowheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowheight', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowheight');
        }
    };
    jqxGridComponent.prototype.everpresentrowactions = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactions', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactions');
        }
    };
    jqxGridComponent.prototype.everpresentrowactionsmode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactionsmode', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactionsmode');
        }
    };
    jqxGridComponent.prototype.filterrowheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('filterrowheight', arg);
        }
        else {
            return this.host.jqxGrid('filterrowheight');
        }
    };
    jqxGridComponent.prototype.filtermode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('filtermode', arg);
        }
        else {
            return this.host.jqxGrid('filtermode');
        }
    };
    jqxGridComponent.prototype.groupsrenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupsrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupsrenderer');
        }
    };
    jqxGridComponent.prototype.groupcolumnrenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupcolumnrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupcolumnrenderer');
        }
    };
    jqxGridComponent.prototype.groupsexpandedbydefault = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupsexpandedbydefault', arg);
        }
        else {
            return this.host.jqxGrid('groupsexpandedbydefault');
        }
    };
    jqxGridComponent.prototype.handlekeyboardnavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('handlekeyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('handlekeyboardnavigation');
        }
    };
    jqxGridComponent.prototype.pagerrenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagerrenderer', arg);
        }
        else {
            return this.host.jqxGrid('pagerrenderer');
        }
    };
    jqxGridComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rtl', arg);
        }
        else {
            return this.host.jqxGrid('rtl');
        }
    };
    jqxGridComponent.prototype.showdefaultloadelement = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showdefaultloadelement', arg);
        }
        else {
            return this.host.jqxGrid('showdefaultloadelement');
        }
    };
    jqxGridComponent.prototype.showfiltercolumnbackground = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltercolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showfiltercolumnbackground');
        }
    };
    jqxGridComponent.prototype.showfiltermenuitems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltermenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showfiltermenuitems');
        }
    };
    jqxGridComponent.prototype.showpinnedcolumnbackground = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showpinnedcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showpinnedcolumnbackground');
        }
    };
    jqxGridComponent.prototype.showsortcolumnbackground = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showsortcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showsortcolumnbackground');
        }
    };
    jqxGridComponent.prototype.showsortmenuitems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showsortmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showsortmenuitems');
        }
    };
    jqxGridComponent.prototype.showgroupmenuitems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showgroupmenuitems');
        }
    };
    jqxGridComponent.prototype.showrowdetailscolumn = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showrowdetailscolumn', arg);
        }
        else {
            return this.host.jqxGrid('showrowdetailscolumn');
        }
    };
    jqxGridComponent.prototype.showheader = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showheader', arg);
        }
        else {
            return this.host.jqxGrid('showheader');
        }
    };
    jqxGridComponent.prototype.showgroupsheader = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupsheader', arg);
        }
        else {
            return this.host.jqxGrid('showgroupsheader');
        }
    };
    jqxGridComponent.prototype.showaggregates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showaggregates');
        }
    };
    jqxGridComponent.prototype.showgroupaggregates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showgroupaggregates');
        }
    };
    jqxGridComponent.prototype.showeverpresentrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showeverpresentrow', arg);
        }
        else {
            return this.host.jqxGrid('showeverpresentrow');
        }
    };
    jqxGridComponent.prototype.showfilterrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showfilterrow', arg);
        }
        else {
            return this.host.jqxGrid('showfilterrow');
        }
    };
    jqxGridComponent.prototype.showemptyrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showemptyrow', arg);
        }
        else {
            return this.host.jqxGrid('showemptyrow');
        }
    };
    jqxGridComponent.prototype.showstatusbar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('showstatusbar');
        }
    };
    jqxGridComponent.prototype.statusbarheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('statusbarheight', arg);
        }
        else {
            return this.host.jqxGrid('statusbarheight');
        }
    };
    jqxGridComponent.prototype.showtoolbar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('showtoolbar', arg);
        }
        else {
            return this.host.jqxGrid('showtoolbar');
        }
    };
    jqxGridComponent.prototype.selectionmode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('selectionmode', arg);
        }
        else {
            return this.host.jqxGrid('selectionmode');
        }
    };
    jqxGridComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('theme', arg);
        }
        else {
            return this.host.jqxGrid('theme');
        }
    };
    jqxGridComponent.prototype.toolbarheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('toolbarheight', arg);
        }
        else {
            return this.host.jqxGrid('toolbarheight');
        }
    };
    jqxGridComponent.prototype.autoheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autoheight', arg);
        }
        else {
            return this.host.jqxGrid('autoheight');
        }
    };
    jqxGridComponent.prototype.autorowheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autorowheight', arg);
        }
        else {
            return this.host.jqxGrid('autorowheight');
        }
    };
    jqxGridComponent.prototype.columnsheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsheight', arg);
        }
        else {
            return this.host.jqxGrid('columnsheight');
        }
    };
    jqxGridComponent.prototype.deferreddatafields = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('deferreddatafields', arg);
        }
        else {
            return this.host.jqxGrid('deferreddatafields');
        }
    };
    jqxGridComponent.prototype.groupsheaderheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupsheaderheight', arg);
        }
        else {
            return this.host.jqxGrid('groupsheaderheight');
        }
    };
    jqxGridComponent.prototype.groupindentwidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupindentwidth', arg);
        }
        else {
            return this.host.jqxGrid('groupindentwidth');
        }
    };
    jqxGridComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('height', arg);
        }
        else {
            return this.host.jqxGrid('height');
        }
    };
    jqxGridComponent.prototype.pagerheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagerheight', arg);
        }
        else {
            return this.host.jqxGrid('pagerheight');
        }
    };
    jqxGridComponent.prototype.rowsheight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rowsheight', arg);
        }
        else {
            return this.host.jqxGrid('rowsheight');
        }
    };
    jqxGridComponent.prototype.scrollbarsize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('scrollbarsize', arg);
        }
        else {
            return this.host.jqxGrid('scrollbarsize');
        }
    };
    jqxGridComponent.prototype.scrollmode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('scrollmode', arg);
        }
        else {
            return this.host.jqxGrid('scrollmode');
        }
    };
    jqxGridComponent.prototype.scrollfeedback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('scrollfeedback', arg);
        }
        else {
            return this.host.jqxGrid('scrollfeedback');
        }
    };
    jqxGridComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('width', arg);
        }
        else {
            return this.host.jqxGrid('width');
        }
    };
    jqxGridComponent.prototype.autosavestate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autosavestate', arg);
        }
        else {
            return this.host.jqxGrid('autosavestate');
        }
    };
    jqxGridComponent.prototype.autoloadstate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('autoloadstate', arg);
        }
        else {
            return this.host.jqxGrid('autoloadstate');
        }
    };
    jqxGridComponent.prototype.columns = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columns', arg);
        }
        else {
            return this.host.jqxGrid('columns');
        }
    };
    jqxGridComponent.prototype.columngroups = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columngroups', arg);
        }
        else {
            return this.host.jqxGrid('columngroups');
        }
    };
    jqxGridComponent.prototype.columnsmenu = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenu', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenu');
        }
    };
    jqxGridComponent.prototype.columnsresize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsresize');
        }
    };
    jqxGridComponent.prototype.columnsautoresize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsautoresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsautoresize');
        }
    };
    jqxGridComponent.prototype.columnsreorder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('columnsreorder', arg);
        }
        else {
            return this.host.jqxGrid('columnsreorder');
        }
    };
    jqxGridComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('disabled', arg);
        }
        else {
            return this.host.jqxGrid('disabled');
        }
    };
    jqxGridComponent.prototype.editable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('editable', arg);
        }
        else {
            return this.host.jqxGrid('editable');
        }
    };
    jqxGridComponent.prototype.editmode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('editmode', arg);
        }
        else {
            return this.host.jqxGrid('editmode');
        }
    };
    jqxGridComponent.prototype.filter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('filter', arg);
        }
        else {
            return this.host.jqxGrid('filter');
        }
    };
    jqxGridComponent.prototype.filterable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('filterable', arg);
        }
        else {
            return this.host.jqxGrid('filterable');
        }
    };
    jqxGridComponent.prototype.groupable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groupable', arg);
        }
        else {
            return this.host.jqxGrid('groupable');
        }
    };
    jqxGridComponent.prototype.groups = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('groups', arg);
        }
        else {
            return this.host.jqxGrid('groups');
        }
    };
    jqxGridComponent.prototype.horizontalscrollbarstep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarstep');
        }
    };
    jqxGridComponent.prototype.horizontalscrollbarlargestep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarlargestep');
        }
    };
    jqxGridComponent.prototype.initrowdetails = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('initrowdetails', arg);
        }
        else {
            return this.host.jqxGrid('initrowdetails');
        }
    };
    jqxGridComponent.prototype.keyboardnavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('keyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('keyboardnavigation');
        }
    };
    jqxGridComponent.prototype.pagesize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagesize', arg);
        }
        else {
            return this.host.jqxGrid('pagesize');
        }
    };
    jqxGridComponent.prototype.pagesizeoptions = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagesizeoptions', arg);
        }
        else {
            return this.host.jqxGrid('pagesizeoptions');
        }
    };
    jqxGridComponent.prototype.pagermode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagermode', arg);
        }
        else {
            return this.host.jqxGrid('pagermode');
        }
    };
    jqxGridComponent.prototype.pagerbuttonscount = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pagerbuttonscount', arg);
        }
        else {
            return this.host.jqxGrid('pagerbuttonscount');
        }
    };
    jqxGridComponent.prototype.pageable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('pageable', arg);
        }
        else {
            return this.host.jqxGrid('pageable');
        }
    };
    jqxGridComponent.prototype.rowdetails = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetails', arg);
        }
        else {
            return this.host.jqxGrid('rowdetails');
        }
    };
    jqxGridComponent.prototype.rowdetailstemplate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetailstemplate', arg);
        }
        else {
            return this.host.jqxGrid('rowdetailstemplate');
        }
    };
    jqxGridComponent.prototype.ready = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('ready', arg);
        }
        else {
            return this.host.jqxGrid('ready');
        }
    };
    jqxGridComponent.prototype.rendered = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rendered', arg);
        }
        else {
            return this.host.jqxGrid('rendered');
        }
    };
    jqxGridComponent.prototype.renderstatusbar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('renderstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('renderstatusbar');
        }
    };
    jqxGridComponent.prototype.rendertoolbar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rendertoolbar', arg);
        }
        else {
            return this.host.jqxGrid('rendertoolbar');
        }
    };
    jqxGridComponent.prototype.rendergridrows = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('rendergridrows', arg);
        }
        else {
            return this.host.jqxGrid('rendergridrows');
        }
    };
    jqxGridComponent.prototype.sortable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('sortable', arg);
        }
        else {
            return this.host.jqxGrid('sortable');
        }
    };
    jqxGridComponent.prototype.selectedrowindex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindex', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindex');
        }
    };
    jqxGridComponent.prototype.selectedrowindexes = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindexes', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindexes');
        }
    };
    jqxGridComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('source', arg);
        }
        else {
            return this.host.jqxGrid('source');
        }
    };
    jqxGridComponent.prototype.sorttogglestates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('sorttogglestates', arg);
        }
        else {
            return this.host.jqxGrid('sorttogglestates');
        }
    };
    jqxGridComponent.prototype.updatedelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('updatedelay', arg);
        }
        else {
            return this.host.jqxGrid('updatedelay');
        }
    };
    jqxGridComponent.prototype.virtualmode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('virtualmode', arg);
        }
        else {
            return this.host.jqxGrid('virtualmode');
        }
    };
    jqxGridComponent.prototype.verticalscrollbarstep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarstep');
        }
    };
    jqxGridComponent.prototype.verticalscrollbarlargestep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarlargestep');
        }
    };
    jqxGridComponent.prototype.autoresizecolumns = function (type) {
        this.host.jqxGrid('autoresizecolumns', type);
    };
    jqxGridComponent.prototype.autoresizecolumn = function (dataField, type) {
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    };
    jqxGridComponent.prototype.beginupdate = function () {
        this.host.jqxGrid('beginupdate');
    };
    jqxGridComponent.prototype.clear = function () {
        this.host.jqxGrid('clear');
    };
    jqxGridComponent.prototype.destroy = function () {
        this.host.jqxGrid('destroy');
    };
    jqxGridComponent.prototype.endupdate = function () {
        this.host.jqxGrid('endupdate');
    };
    jqxGridComponent.prototype.ensurerowvisible = function (rowBoundIndex) {
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    };
    jqxGridComponent.prototype.focus = function () {
        this.host.jqxGrid('focus');
    };
    jqxGridComponent.prototype.getcolumnindex = function (dataField) {
        return this.host.jqxGrid('getcolumnindex', dataField);
    };
    jqxGridComponent.prototype.getcolumn = function (dataField) {
        return this.host.jqxGrid('getcolumn', dataField);
    };
    jqxGridComponent.prototype.getcolumnproperty = function (dataField, propertyName) {
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    };
    jqxGridComponent.prototype.getrowid = function (rowBoundIndex) {
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    };
    jqxGridComponent.prototype.getrowdata = function (rowBoundIndex) {
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    };
    jqxGridComponent.prototype.getrowdatabyid = function (rowID) {
        return this.host.jqxGrid('getrowdatabyid', rowID);
    };
    jqxGridComponent.prototype.getrowboundindexbyid = function (rowID) {
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    };
    jqxGridComponent.prototype.getrowboundindex = function (rowDisplayIndex) {
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    };
    jqxGridComponent.prototype.getrows = function () {
        return this.host.jqxGrid('getrows');
    };
    jqxGridComponent.prototype.getboundrows = function () {
        return this.host.jqxGrid('getboundrows');
    };
    jqxGridComponent.prototype.getdisplayrows = function () {
        return this.host.jqxGrid('getdisplayrows');
    };
    jqxGridComponent.prototype.getdatainformation = function () {
        return this.host.jqxGrid('getdatainformation');
    };
    jqxGridComponent.prototype.getsortinformation = function () {
        return this.host.jqxGrid('getsortinformation');
    };
    jqxGridComponent.prototype.getpaginginformation = function () {
        return this.host.jqxGrid('getpaginginformation');
    };
    jqxGridComponent.prototype.hidecolumn = function (dataField) {
        this.host.jqxGrid('hidecolumn', dataField);
    };
    jqxGridComponent.prototype.hideloadelement = function () {
        this.host.jqxGrid('hideloadelement');
    };
    jqxGridComponent.prototype.hiderowdetails = function (rowBoundIndex) {
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    };
    jqxGridComponent.prototype.iscolumnvisible = function (dataField) {
        return this.host.jqxGrid('iscolumnvisible', dataField);
    };
    jqxGridComponent.prototype.iscolumnpinned = function (dataField) {
        return this.host.jqxGrid('iscolumnpinned', dataField);
    };
    jqxGridComponent.prototype.localizestrings = function (localizationObject) {
        this.host.jqxGrid('localizestrings', localizationObject);
    };
    jqxGridComponent.prototype.pincolumn = function (dataField) {
        this.host.jqxGrid('pincolumn', dataField);
    };
    jqxGridComponent.prototype.refreshdata = function () {
        this.host.jqxGrid('refreshdata');
    };
    jqxGridComponent.prototype.refresh = function () {
        this.host.jqxGrid('refresh');
    };
    jqxGridComponent.prototype.render = function () {
        this.host.jqxGrid('render');
    };
    jqxGridComponent.prototype.scrolloffset = function (top, left) {
        this.host.jqxGrid('scrolloffset', top, left);
    };
    jqxGridComponent.prototype.scrollposition = function () {
        return this.host.jqxGrid('scrollposition');
    };
    jqxGridComponent.prototype.showloadelement = function () {
        this.host.jqxGrid('showloadelement');
    };
    jqxGridComponent.prototype.showrowdetails = function (rowBoundIndex) {
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    };
    jqxGridComponent.prototype.setcolumnindex = function (dataField, index) {
        this.host.jqxGrid('setcolumnindex', dataField, index);
    };
    jqxGridComponent.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    };
    jqxGridComponent.prototype.showcolumn = function (dataField) {
        this.host.jqxGrid('showcolumn', dataField);
    };
    jqxGridComponent.prototype.unpincolumn = function (dataField) {
        this.host.jqxGrid('unpincolumn', dataField);
    };
    jqxGridComponent.prototype.updatebounddata = function (type) {
        this.host.jqxGrid('updatebounddata', type);
    };
    jqxGridComponent.prototype.updating = function () {
        return this.host.jqxGrid('updating');
    };
    jqxGridComponent.prototype.getsortcolumn = function () {
        return this.host.jqxGrid('getsortcolumn');
    };
    jqxGridComponent.prototype.removesort = function () {
        this.host.jqxGrid('removesort');
    };
    jqxGridComponent.prototype.sortby = function (dataField, sortOrder) {
        this.host.jqxGrid('sortby', dataField, sortOrder);
    };
    jqxGridComponent.prototype.addgroup = function (dataField) {
        this.host.jqxGrid('addgroup', dataField);
    };
    jqxGridComponent.prototype.cleargroups = function () {
        this.host.jqxGrid('cleargroups');
    };
    jqxGridComponent.prototype.collapsegroup = function (group) {
        this.host.jqxGrid('collapsegroup', group);
    };
    jqxGridComponent.prototype.collapseallgroups = function () {
        this.host.jqxGrid('collapseallgroups');
    };
    jqxGridComponent.prototype.expandallgroups = function () {
        this.host.jqxGrid('expandallgroups');
    };
    jqxGridComponent.prototype.expandgroup = function (group) {
        this.host.jqxGrid('expandgroup', group);
    };
    jqxGridComponent.prototype.getrootgroupscount = function () {
        return this.host.jqxGrid('getrootgroupscount');
    };
    jqxGridComponent.prototype.getgroup = function (groupIndex) {
        return this.host.jqxGrid('getgroup', groupIndex);
    };
    jqxGridComponent.prototype.insertgroup = function (groupIndex, dataField) {
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    };
    jqxGridComponent.prototype.iscolumngroupable = function () {
        return this.host.jqxGrid('iscolumngroupable');
    };
    jqxGridComponent.prototype.removegroupat = function (groupIndex) {
        this.host.jqxGrid('removegroupat', groupIndex);
    };
    jqxGridComponent.prototype.removegroup = function (dataField) {
        this.host.jqxGrid('removegroup', dataField);
    };
    jqxGridComponent.prototype.addfilter = function (dataField, filterGroup, refreshGrid) {
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    };
    jqxGridComponent.prototype.applyfilters = function () {
        this.host.jqxGrid('applyfilters');
    };
    jqxGridComponent.prototype.clearfilters = function () {
        this.host.jqxGrid('clearfilters');
    };
    jqxGridComponent.prototype.getfilterinformation = function () {
        return this.host.jqxGrid('getfilterinformation');
    };
    jqxGridComponent.prototype.removefilter = function (dataField, refreshGrid) {
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    };
    jqxGridComponent.prototype.refreshfilterrow = function () {
        this.host.jqxGrid('refreshfilterrow');
    };
    jqxGridComponent.prototype.gotopage = function (pageNumber) {
        this.host.jqxGrid('gotopage', pageNumber);
    };
    jqxGridComponent.prototype.gotoprevpage = function () {
        this.host.jqxGrid('gotoprevpage');
    };
    jqxGridComponent.prototype.gotonextpage = function () {
        this.host.jqxGrid('gotonextpage');
    };
    jqxGridComponent.prototype.addrow = function (rowIds, data, rowPosition) {
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    };
    jqxGridComponent.prototype.begincelledit = function (rowBoundIndex, dataField) {
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.beginrowedit = function (rowBoundIndex) {
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    };
    jqxGridComponent.prototype.closemenu = function () {
        this.host.jqxGrid('closemenu');
    };
    jqxGridComponent.prototype.deleterow = function (rowIds) {
        this.host.jqxGrid('deleterow', rowIds);
    };
    jqxGridComponent.prototype.endcelledit = function (rowBoundIndex, dataField, confirmChanges) {
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    };
    jqxGridComponent.prototype.endrowedit = function (rowBoundIndex, confirmChanges) {
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    };
    jqxGridComponent.prototype.getcell = function (rowBoundIndex, datafield) {
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    };
    jqxGridComponent.prototype.getcellatposition = function (left, top) {
        return this.host.jqxGrid('getcellatposition', left, top);
    };
    jqxGridComponent.prototype.getcelltext = function (rowBoundIndex, dataField) {
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.getcelltextbyid = function (rowID, dataField) {
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    };
    jqxGridComponent.prototype.getcellvaluebyid = function (rowID, dataField) {
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    };
    jqxGridComponent.prototype.getcellvalue = function (rowBoundIndex, dataField) {
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.isBindingCompleted = function () {
        return this.host.jqxGrid('isBindingCompleted');
    };
    jqxGridComponent.prototype.openmenu = function (dataField) {
        this.host.jqxGrid('openmenu', dataField);
    };
    jqxGridComponent.prototype.setcellvalue = function (rowBoundIndex, dataField, value) {
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    };
    jqxGridComponent.prototype.setcellvaluebyid = function (rowID, dataField, value) {
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    };
    jqxGridComponent.prototype.showvalidationpopup = function (rowBoundIndex, dataField, validationMessage) {
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    };
    jqxGridComponent.prototype.updaterow = function (rowIds, data) {
        this.host.jqxGrid('updaterow', rowIds, data);
    };
    jqxGridComponent.prototype.clearselection = function () {
        this.host.jqxGrid('clearselection');
    };
    jqxGridComponent.prototype.getselectedrowindex = function () {
        return this.host.jqxGrid('getselectedrowindex');
    };
    jqxGridComponent.prototype.getselectedrowindexes = function () {
        return this.host.jqxGrid('getselectedrowindexes');
    };
    jqxGridComponent.prototype.getselectedcell = function () {
        return this.host.jqxGrid('getselectedcell');
    };
    jqxGridComponent.prototype.getselectedcells = function () {
        return this.host.jqxGrid('getselectedcells');
    };
    jqxGridComponent.prototype.selectcell = function (rowBoundIndex, dataField) {
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.selectallrows = function () {
        this.host.jqxGrid('selectallrows');
    };
    jqxGridComponent.prototype.selectrow = function (rowBoundIndex) {
        this.host.jqxGrid('selectrow', rowBoundIndex);
    };
    jqxGridComponent.prototype.unselectrow = function (rowBoundIndex) {
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    };
    jqxGridComponent.prototype.unselectcell = function (rowBoundIndex, dataField) {
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.getcolumnaggregateddata = function (dataField, aggregates) {
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    };
    jqxGridComponent.prototype.refreshaggregates = function () {
        this.host.jqxGrid('refreshaggregates');
    };
    jqxGridComponent.prototype.renderaggregates = function () {
        this.host.jqxGrid('renderaggregates');
    };
    jqxGridComponent.prototype.exportdata = function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    };
    jqxGridComponent.prototype.getstate = function () {
        return this.host.jqxGrid('getstate');
    };
    jqxGridComponent.prototype.loadstate = function (stateObject) {
        this.host.jqxGrid('loadstate', stateObject);
    };
    jqxGridComponent.prototype.savestate = function () {
        return this.host.jqxGrid('savestate');
    };
    jqxGridComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingcomplete', function (eventData) { _this.OnBindingcomplete.emit(eventData); });
        this.host.on('columnresized', function (eventData) { _this.OnColumnresized.emit(eventData); });
        this.host.on('columnreordered', function (eventData) { _this.OnColumnreordered.emit(eventData); });
        this.host.on('columnclick', function (eventData) { _this.OnColumnclick.emit(eventData); });
        this.host.on('cellclick', function (eventData) { _this.OnCellclick.emit(eventData); });
        this.host.on('celldoubleclick', function (eventData) { _this.OnCelldoubleclick.emit(eventData); });
        this.host.on('cellselect', function (eventData) { _this.OnCellselect.emit(eventData); });
        this.host.on('cellunselect', function (eventData) { _this.OnCellunselect.emit(eventData); });
        this.host.on('cellvaluechanged', function (eventData) { _this.OnCellvaluechanged.emit(eventData); });
        this.host.on('cellbeginedit', function (eventData) { _this.OnCellbeginedit.emit(eventData); });
        this.host.on('cellendedit', function (eventData) { _this.OnCellendedit.emit(eventData); });
        this.host.on('filter', function (eventData) { _this.OnFilter.emit(eventData); });
        this.host.on('groupschanged', function (eventData) { _this.OnGroupschanged.emit(eventData); });
        this.host.on('groupexpand', function (eventData) { _this.OnGroupexpand.emit(eventData); });
        this.host.on('groupcollapse', function (eventData) { _this.OnGroupcollapse.emit(eventData); });
        this.host.on('pagechanged', function (eventData) { _this.OnPagechanged.emit(eventData); });
        this.host.on('pagesizechanged', function (eventData) { _this.OnPagesizechanged.emit(eventData); });
        this.host.on('rowclick', function (eventData) { _this.OnRowclick.emit(eventData); });
        this.host.on('rowdoubleclick', function (eventData) { _this.OnRowdoubleclick.emit(eventData); });
        this.host.on('rowselect', function (eventData) { _this.OnRowselect.emit(eventData); });
        this.host.on('rowunselect', function (eventData) { _this.OnRowunselect.emit(eventData); });
        this.host.on('rowexpand', function (eventData) { _this.OnRowexpand.emit(eventData); });
        this.host.on('rowcollapse', function (eventData) { _this.OnRowcollapse.emit(eventData); });
        this.host.on('sort', function (eventData) { _this.OnSort.emit(eventData); });
    };
    __decorate([
        core_1.Input('width'), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "containerWidth", void 0);
    __decorate([
        core_1.Input('height'), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "containerHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnBindingcomplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnColumnresized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnColumnreordered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnColumnclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCelldoubleclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellunselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellvaluechanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellbeginedit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnCellendedit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnFilter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnGroupschanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnGroupexpand", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnGroupcollapse", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnPagechanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnPagesizechanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowdoubleclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowunselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowexpand", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnRowcollapse", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxGridComponent.prototype, "OnSort", void 0);
    jqxGridComponent = __decorate([
        core_1.Component({
            selector: 'angularGrid',
            template: '<div><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], jqxGridComponent);
    return jqxGridComponent;
}());
exports.jqxGridComponent = jqxGridComponent;

//# sourceMappingURL=angular_jqxgrid.js.map
