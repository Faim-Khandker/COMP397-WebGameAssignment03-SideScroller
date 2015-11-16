var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //CLOUD CLASS
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        //CONSTRUCTOR
        function Cloud() {
            _super.call(this, "enemy");
            this._reset(); //resets y position of ocean
        }
        //PUBLIC METHODS
        /**
         * Update method for Ocean
         */
        Cloud.prototype.update = function () {
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        };
        //PRIVATE METHODS
        /**
         * Resetes Ocean to y= -960
         */
        Cloud.prototype._reset = function () {
            this._dx = Math.floor(Math.random() * 5) + 5; //horizontal speed
            this._dy = Math.floor(Math.random() * 4) - 2; //"vertical drift"
            //random location on x-axis. (note: + 1 shifts the initial position from canvas to right
            this.x = 640 + this._width;
            this.y = Math.floor(Math.random() * (480 - this._height)) + (this._height * 0.5);
        };
        /**
         * Checks to see when ocean needs to "reset"
         */
        Cloud.prototype._checkBounds = function () {
            //conditional to call reset() to reposition the y-axis
            if (this.x >= -this._width) {
                this._reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map