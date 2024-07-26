class Binding {
    constructor(object, property, element, event) {
        this.object = object;
        this.property = property;
        this.element = element;
        this.event = event;

        this.init();
    }

    init() {
        // Initialize element value from the object's property
        this.element.value = this.object[this.property];

        // Listen for changes on the element and update the object's property
        this.element.addEventListener(this.event, (e) => {
            this.object[this.property] = e.target.value;
        });

        // Create a getter and setter to watch changes on the object's property
        let currentValue = this.object[this.property];
        Object.defineProperty(this.object, this.property, {
            get: () => currentValue,
            set: (newValue) => {
                currentValue = newValue;
                this.element.value = newValue;
            },
            configurable: true
        });
    }

    updateElement() {
        this.element.value = this.object[this.property];
    }
}