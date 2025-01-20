import { eachArray } from './utils';  // Adjust the import path according to your directory structure

const arr = [1, 2, 3];
eachArray(arr, (item, index) => {
    console.log(index, item);
    return item;
});
