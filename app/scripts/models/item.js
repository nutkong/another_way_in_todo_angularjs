'use strict';

function Item(description, done) {
    this.description = description;
    this.done = done;

    this.css = function() {
        if(this.done)
            return 'done';
        else
            return '';
    }
}