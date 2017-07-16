define([
    use('sys.core.ui.Component')
], (Component) => {
    /**
     * @class sys.core.ui.Shell
     * @classdesc sys.core.ui.Shell
     * @desc Shell base class.
     */    
    return Class('sys.core.ui.Shell', Component, function(attr) {
        attr('override');
        attr('abstract');
        this.func('constructor', (base, args, view) => {
            base('shell', null, args);
            this.view = view;
        });

        attr('protected');
        this.prop('view', null);
    });
});