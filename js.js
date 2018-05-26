var arr=[12, 23, 34,54, 32, 23, 1, 2, 7, 2];
var arr1=[];
var povtor=-1;
for (var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
        if (arr[i]==arr[j]){
            povtor++;
        }
    }
    if (povtor==0){
        arr1.push(arr[i]);
    }
    povtor=-1;
}
var n=arr.length;
console.log(arr1);