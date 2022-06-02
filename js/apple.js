const appleFactory = (data) => {

    let boxPrice = 0;
    let numApples = 0;
    let packetSize = 0;
    let profit = 0;
    let validation = /(^[0-9]{1,})/gm

    let dataList = [] || data;

    let setBoxPrice = box => { boxPrice = Number(box) }

    let setAppleCount = appleCount => { numApples = Number(appleCount) }

    let setPacketSize = packet => { packetSize = Number(packet) }

    let setProfit = pft => { profit = Number(pft) }

    let getBoxPrice = () => { return boxPrice }

    let getAppleCount = () => { return numApples }

    let getPacketSize = () => { return packetSize }

    let getProfit = () => { return profit }

    let appleCost = () => { return (getBoxPrice() / getAppleCount()).toFixed(2) }

    let packet = () => { return (getAppleCount() / getPacketSize().toFixed()) }

    let packetPrice = () => { return (appleCost() * packet()).toFixed(2) }

    let profitMoney = () => { return (getAppleCount() / 100 * getProfit()).toFixed(2) }

    let finalPriceWithProfit = () => { return (parseFloat(packetPrice()) + parseFloat(profitMoney())).toFixed() }

    let setData = list => { dataList.push(list) }

    let getDataList = () => { return dataList }

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