let input=prompt("Enter the number separated by commas");
let arr=input.split(",").map(Number);
let emptypacketcount=0;
let i;
let packet=[];
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        emptypacketcount++;
    }
    else{
        packet.push(arr[i]);
    }
}
packet=packet.sort();
for(i=0;i<emptypacketcount;i++){
    packet.push(0);
}
console.log(packet);
console.log(emptypacketcount);
