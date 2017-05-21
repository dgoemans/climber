module Helpers {
    export function removeItem(array: Array<Object>, item: Object) : number {
        var index = array.indexOf(item, 0);
        if (index > -1) {
            array.splice(index, 1);
        }

        return index;
    }
}