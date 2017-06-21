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
var jqxChartComponent = (function () {
    function jqxChartComponent(containerElement) {
        this.OnToggle = new core_1.EventEmitter();
        this.OnClick = new core_1.EventEmitter();
        this.OnMouseOver = new core_1.EventEmitter();
        this.OnMouseOut = new core_1.EventEmitter();
        this.OnRefreshBegin = new core_1.EventEmitter();
        this.OnRefreshEnd = new core_1.EventEmitter();
        this.OnRangeSelectionChanging = new core_1.EventEmitter();
        this.OnRangeSelectionChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
    }
    jqxChartComponent.prototype.isHostReady = function () {
        return (this.host !== undefined && this.host.length == 1);
    };
    jqxChartComponent.prototype.createWidget = function (options) {
        if (!this.isHostReady()) {
            this.host = $(this.elementRef.nativeElement.firstChild);
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxChart', options);
            this.__updateRect__();
        }
    };
    jqxChartComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.containerWidth, height: this.containerHeight });
        this.refresh();
    };
    jqxChartComponent.prototype.setOptions = function (options) {
        this.host.jqxChart('setOptions', options);
    };
    jqxChartComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('title', arg);
        }
        else {
            return this.host.jqxChart('title');
        }
    };
    jqxChartComponent.prototype.description = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('description', arg);
        }
        else {
            return this.host.jqxChart('description');
        }
    };
    jqxChartComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('source', arg);
        }
        else {
            return this.host.jqxChart('source');
        }
    };
    jqxChartComponent.prototype.showBorderLine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showBorderLine', arg);
        }
        else {
            return this.host.jqxChart('showBorderLine');
        }
    };
    jqxChartComponent.prototype.borderLineColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineColor', arg);
        }
        else {
            return this.host.jqxChart('borderLineColor');
        }
    };
    jqxChartComponent.prototype.borderLineWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineWidth', arg);
        }
        else {
            return this.host.jqxChart('borderLineWidth');
        }
    };
    jqxChartComponent.prototype.backgroundColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundColor', arg);
        }
        else {
            return this.host.jqxChart('backgroundColor');
        }
    };
    jqxChartComponent.prototype.backgroundImage = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundImage', arg);
        }
        else {
            return this.host.jqxChart('backgroundImage');
        }
    };
    jqxChartComponent.prototype.showLegend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showLegend', arg);
        }
        else {
            return this.host.jqxChart('showLegend');
        }
    };
    jqxChartComponent.prototype.legendLayout = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('legendLayout', arg);
        }
        else {
            return this.host.jqxChart('legendLayout');
        }
    };
    jqxChartComponent.prototype.padding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('padding', arg);
        }
        else {
            return this.host.jqxChart('padding');
        }
    };
    jqxChartComponent.prototype.titlePadding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('titlePadding', arg);
        }
        else {
            return this.host.jqxChart('titlePadding');
        }
    };
    jqxChartComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('colorScheme', arg);
        }
        else {
            return this.host.jqxChart('colorScheme');
        }
    };
    jqxChartComponent.prototype.greyScale = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('greyScale', arg);
        }
        else {
            return this.host.jqxChart('greyScale');
        }
    };
    jqxChartComponent.prototype.showToolTips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showToolTips', arg);
        }
        else {
            return this.host.jqxChart('showToolTips');
        }
    };
    jqxChartComponent.prototype.toolTipShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipShowDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipShowDelay');
        }
    };
    jqxChartComponent.prototype.toolTipHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipHideDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipHideDelay');
        }
    };
    jqxChartComponent.prototype.toolTipMoveDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipMoveDuration', arg);
        }
        else {
            return this.host.jqxChart('toolTipMoveDuration');
        }
    };
    jqxChartComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('rtl', arg);
        }
        else {
            return this.host.jqxChart('rtl');
        }
    };
    jqxChartComponent.prototype.enableCrosshairs = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableCrosshairs', arg);
        }
        else {
            return this.host.jqxChart('enableCrosshairs');
        }
    };
    jqxChartComponent.prototype.crosshairsColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsColor', arg);
        }
        else {
            return this.host.jqxChart('crosshairsColor');
        }
    };
    jqxChartComponent.prototype.crosshairsDashStyle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsDashStyle', arg);
        }
        else {
            return this.host.jqxChart('crosshairsDashStyle');
        }
    };
    jqxChartComponent.prototype.crosshairsLineWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsLineWidth', arg);
        }
        else {
            return this.host.jqxChart('crosshairsLineWidth');
        }
    };
    jqxChartComponent.prototype.columnSeriesOverlap = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('columnSeriesOverlap', arg);
        }
        else {
            return this.host.jqxChart('columnSeriesOverlap');
        }
    };
    jqxChartComponent.prototype.enabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enabled', arg);
        }
        else {
            return this.host.jqxChart('enabled');
        }
    };
    jqxChartComponent.prototype.enableAnimations = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAnimations', arg);
        }
        else {
            return this.host.jqxChart('enableAnimations');
        }
    };
    jqxChartComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('animationDuration', arg);
        }
        else {
            return this.host.jqxChart('animationDuration');
        }
    };
    jqxChartComponent.prototype.enableAxisTextAnimation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAxisTextAnimation', arg);
        }
        else {
            return this.host.jqxChart('enableAxisTextAnimation');
        }
    };
    jqxChartComponent.prototype.renderEngine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('renderEngine', arg);
        }
        else {
            return this.host.jqxChart('renderEngine');
        }
    };
    jqxChartComponent.prototype.xAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('xAxis', arg);
        }
        else {
            return this.host.jqxChart('xAxis');
        }
    };
    jqxChartComponent.prototype.valueAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('valueAxis', arg);
        }
        else {
            return this.host.jqxChart('valueAxis');
        }
    };
    jqxChartComponent.prototype.seriesGroups = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('seriesGroups', arg);
        }
        else {
            return this.host.jqxChart('seriesGroups');
        }
    };
    jqxChartComponent.prototype.refresh = function () {
        this.host.jqxChart('refresh');
    };
    jqxChartComponent.prototype.update = function () {
        this.host.jqxChart('update');
    };
    jqxChartComponent.prototype.destroy = function () {
        this.host.jqxChart('destroy');
    };
    jqxChartComponent.prototype.addColorScheme = function (schemeName, colors) {
        this.host.jqxChart('addColorScheme', schemeName, colors);
    };
    jqxChartComponent.prototype.removeColorScheme = function (schemeName) {
        this.host.jqxChart('removeColorScheme', schemeName);
    };
    jqxChartComponent.prototype.getItemsCount = function (groupIndex, serieIndex) {
        return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);
    };
    jqxChartComponent.prototype.getItemCoord = function (groupIndex, serieIndex, itemIndex) {
        return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.getXAxisRect = function (groupIndex) {
        return this.host.jqxChart('getXAxisRect', groupIndex);
    };
    jqxChartComponent.prototype.getXAxisLabels = function (groupIndex) {
        return this.host.jqxChart('getXAxisLabels', groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisRect = function (groupIndex) {
        return this.host.jqxChart('getValueAxisRect', groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisLabels = function (groupIndex) {
        return this.host.jqxChart('getValueAxisLabels', groupIndex);
    };
    jqxChartComponent.prototype.getColorScheme = function (colorScheme) {
        return this.host.jqxChart('getColorScheme', colorScheme);
    };
    jqxChartComponent.prototype.hideSerie = function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.showSerie = function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.hideToolTip = function (hideDelay) {
        this.host.jqxChart('hideToolTip', hideDelay);
    };
    jqxChartComponent.prototype.showToolTip = function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    };
    jqxChartComponent.prototype.saveAsJPEG = function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
    };
    jqxChartComponent.prototype.saveAsPDF = function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);
    };
    jqxChartComponent.prototype.getXAxisValue = function (offset, groupIndex) {
        return this.host.jqxChart('getXAxisValue', offset, groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisValue = function (offset, groupIndex) {
        return this.host.jqxChart('getValueAxisValue', offset, groupIndex);
    };
    jqxChartComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('toggle', function (eventData) { _this.OnToggle.emit(eventData); });
        this.host.on('click', function (eventData) { _this.OnClick.emit(eventData); });
        this.host.on('mouseOver', function (eventData) { _this.OnMouseOver.emit(eventData); });
        this.host.on('mouseOut', function (eventData) { _this.OnMouseOut.emit(eventData); });
        this.host.on('refreshBegin', function (eventData) { _this.OnRefreshBegin.emit(eventData); });
        this.host.on('refreshEnd', function (eventData) { _this.OnRefreshEnd.emit(eventData); });
        this.host.on('rangeSelectionChanging', function (eventData) { _this.OnRangeSelectionChanging.emit(eventData); });
        this.host.on('rangeSelectionChanged', function (eventData) { _this.OnRangeSelectionChanged.emit(eventData); });
    };
    __decorate([
        core_1.Input('width'), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "containerWidth", void 0);
    __decorate([
        core_1.Input('height'), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "containerHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnMouseOver", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnMouseOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnRefreshBegin", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnRefreshEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnRangeSelectionChanging", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], jqxChartComponent.prototype, "OnRangeSelectionChanged", void 0);
    jqxChartComponent = __decorate([
        core_1.Component({
            selector: 'angularChart',
            template: '<div><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], jqxChartComponent);
    return jqxChartComponent;
}());
exports.jqxChartComponent = jqxChartComponent;

//# sourceMappingURL=angular_jqxchart.js.map
