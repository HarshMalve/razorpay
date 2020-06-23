import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RazorpayComponentComponent = class RazorpayComponentComponent {
    constructor(webApi, ENUM) {
        this.webApi = webApi;
        this.ENUM = ENUM;
        this.userDetails = {
            recipientName: '',
            recipientEmail: '',
            recipientPhone: '',
            amount: null
        };
    }
    ngOnInit() {
    }
    pay() {
        let url = this.ENUM.API.domain + this.ENUM.API.url.createOrder;
        this.webApi.sendPostRequest(url, this.userDetails)
            .then(response => {
            console.log('response ==> ', response);
            let res = response;
            if (res.status === 'created') {
                this.openRazorPay(res);
            }
        }).catch(error => {
            console.error('error ==> ', error);
        });
        console.log('userDetails => ' + JSON.stringify(this.userDetails));
    }
    openRazorPay(res) {
        let options = {
            key: 'rzp_test_Ea4Bjdgpy3VVsj',
            amount: res.amount,
            currency: 'INR',
            name: 'Edge',
            description: 'Test Transaction',
            image: 'https://meet.edgelearning.co.in/images/edgesquarelogo.png',
            order_id: res.id,
            handler: function (response) {
                console.log('response.razorpay_payment_id :', response.razorpay_payment_id);
                console.log('response.razorpay_order_id :', response.razorpay_order_id);
                console.log('response.razorpay_signature :', response.razorpay_signature);
            },
            prefill: {
                name: this.userDetails.recipientName,
                email: this.userDetails.recipientEmail,
                contact: this.userDetails.recipientPhone
            },
            notes: {
                'address': 'Razorpay Corporate Office'
            },
            theme: {
                'color': '#F37254'
            },
            modal: {
                backdropclose: false,
                escape: false
            }
        };
        let razorpay = new Razorpay(options);
        razorpay.open();
    }
    verifySignature(data) {
        let params = {
            razorpay_order_id: data.razorpay_order_id,
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_signature: data.razorpay_signature
        };
        let url = this.ENUM.API.domain + this.ENUM.API.url.verifySignature;
        this.webApi.sendPostRequest(url, params)
            .then((response) => {
            console.log(JSON.stringify(response));
        }).catch((error) => {
            console.error('error => ' + error);
        });
    }
};
RazorpayComponentComponent = __decorate([
    Component({
        selector: 'app-razorpay-component',
        templateUrl: './razorpay-component.component.html',
        styleUrls: ['./razorpay-component.component.scss']
    })
], RazorpayComponentComponent);
export { RazorpayComponentComponent };
//# sourceMappingURL=razorpay-component.component.js.map