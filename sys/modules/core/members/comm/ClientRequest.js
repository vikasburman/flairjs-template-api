define([
    use('sys.core.comm.Request')
], (Request) => {
    /**
     * @class sys.core.comm.ClientRequest
     * @classdesc sys.core.comm.ClientRequest
     * @desc Request information (on client).
     */
    return Class('sys.core.comm.ClientRequest', Request, function(attr) {
        attr('override');
        attr('sealed');
        this.func('constructor', (base, url, args) => {
            base(url, args); 
        });
    });
});