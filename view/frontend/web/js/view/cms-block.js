define(
    [
        'jquery',
        'ko',
        'uiComponent'
    ],
    function(
        $,
        ko,
        Component
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'B2bzanden_CheckoutCMSBlock/cms_block'
            },

            initialize: function () {
                var self = this;
                this._super();
            }

        });
    }
);
