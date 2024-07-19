import {toastController} from "@ionic/core";

export class ToastError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ToastError';
        console.error(this.name + ':', message);

        toastController.create({
            message: message,
            duration: 4000,
            position: 'bottom',
            animated: true
        }).then(toast => {
            toast.present().catch(error => {
                console.error('Error presenting toast:', error);
            });
        });
    }
}