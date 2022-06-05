const appleFactory = data => {

    let boxPrice = 0;
    let numApples = 0;
    let packetSize = 0;
    let profit = 0;
    let validation = /(^[0-9]{1,})/gm

    let dataList = [] || data;

    const setBoxPrice = box => { boxPrice = Number(box) };

    const setAppleCount = appleCount => { numApples = Number(appleCount) };

    const setPacketSize = packet => { packetSize = Number(packet) };

    const setProfit = pft => { profit = Number(pft) };

    const getBoxPrice = () => boxPrice;

    const getAppleCount = () => numApples;

    const getPacketSize = () => packetSize;

    const getProfit = () => profit;

    const appleCost = () => (getBoxPrice() / getAppleCount()).toFixed(2);

    const packet = () => (getAppleCount() / getPacketSize().toFixed());

    const packetPrice = () => (appleCost() * packet()).toFixed(2);

    const profitMoney = () => (getAppleCount() / 100 * getProfit()).toFixed(2);

    const finalPriceWithProfit = () => (parseFloat(packetPrice()) + parseFloat(profitMoney())).toFixed();

    const setData = list => { dataList.push(list) }

    const getDataList = () => dataList;

    return {
        
        setBoxPrice,
        setAppleCount,
        setPacketSize,
        setProfit,

        getBoxPrice,
        getAppleCount,
        getPacketSize,
        getProfit,

        appleCost,
        packet,
        packetPrice,
        finalPriceWithProfit,
        profitMoney,

        setData,
        getDataList
    }
}