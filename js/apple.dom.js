let boxPriceElement = document.querySelector(".box");
let appleBoxElement = document.querySelector(".boxNum");
let packetSizeElement = document.querySelector(".packet");
let profitElement = document.querySelector(".profit");
let messageElement = document.querySelector(".message");
let calculateBtn = document.querySelector(".btn");

let previouse = localStorage.getItem("dataList") ? JSON.parse(localStorage.getItem("dataList")) : [];
// console.log(previouse);

let apples = appleFactory(previouse);

const calculations = () => {

    let box = boxPriceElement.value;
    let appleCount = appleBoxElement.value;
    let packet = packetSizeElement.value;
    let moneyProfit = profitElement.value;

    if (box && appleCount && packet && moneyProfit) {
        apples.setBoxPrice(box);
        apples.setAppleCount(appleCount);
        apples.setPacketSize(packet);
        apples.setProfit(moneyProfit);

        let appleCost = apples.appleCost();
        let packetPrice = apples.packetPrice();
        let packets = apples.packet().toFixed();
        let profit = apples.finalPriceWithProfit();
        let profitMoney = apples.profitMoney();

        let currentDateTime = new Date();
        const timeStamp = currentDateTime.toLocaleTimeString();
        const dateStamp = currentDateTime.toLocaleDateString();

        M.toast({ html: 'Data captured successfully', classes: 'green darken-5 rounded', displayLength: '1000' })
        messageElement.innerHTML = `You will be able to make ${packets} packets and can be sold for R${profitMoney} per pack at ${moneyProfit}%. One apple will cost R${appleCost}, Your profit will be R${profitMoney}`;

        setTimeout(() => {
            messageElement.innerHTML = "";
        }, "10000");

        apples.setData({
            packets, profitMoney, moneyProfit, appleCost, profitMoney, timeStamp, dateStamp
        });

        console.log(apples.getDataList());
        localStorage.setItem('dataList', JSON.stringify(apples.getDataList()));

    } else {
        M.toast({ html: 'Please fill all the fields', classes: 'red darken-5 rounded', displayLength: '2000' })
    }
}

let previouseData = () => {

}

const renderHello = ()=> {
    // console.log(previouse);
    // let list = [{"packets":"1","profitMoney":"0.01","moneyProfit":"1","appleCost":"5.00","timeStamp":"22:40:24","dateStamp":"05/06/2022"}]
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, {previouse});
    document.getElementById('target').innerHTML = rendered;
  }

calculateBtn.addEventListener("click", calculations);

