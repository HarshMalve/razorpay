import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor() {
        this.API = {
            domain: 'http://localhost:3000/',
            url: {
                createOrder: 'api/razorpay/payment/create_order',
                verifySignature: 'api/razorpay/payment/verifyPaymentSignature'
            }
        };
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map