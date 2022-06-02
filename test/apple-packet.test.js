describe('Apple Packet Price Planner', () => {

    it('Should set the box price and get it back', () => {

        let apples = appleFactory();
        apples.setBoxPrice(80);

        assert.equal(80, apples.getBoxPrice());
    });

    it('Should set the number of apples in a box and get it back', () => {

        let apples = appleFactory();
        apples.setAppleCount(20);

        assert.equal(20, apples.getAppleCount());
    });

    it('Should set the apple packet size and get it back', () => {

        let apples = appleFactory();
        apples.setPacketSize(8);

        assert.equal(8, apples.getPacketSize());
    });

    it('Should set the required profit and get it back', () => {

        let apples = appleFactory();
        apples.setProfit(4);

        assert.equal(4, apples.getProfit());
    });


    it('Should get how much one apple cost in a box', () => {

        let apples = appleFactory();
        apples.setBoxPrice(100);
        apples.setAppleCount(60);

        assert.equal(1.67, apples.appleCost());
    });

    it('Should get how much a packet will cost', () => {

        let apples = appleFactory();
        apples.setBoxPrice(100);
        apples.setAppleCount(60);
        apples.setPacketSize(8);
        apples.setProfit(4);

        assert.equal(12.52, apples.packetPrice());
    });

    it('Should get how much profit will be made', () => {

        let apples = appleFactory();
        apples.setBoxPrice(100);
        apples.setAppleCount(60);
        apples.setPacketSize(8);
        apples.setProfit(4);

        assert.equal(2.40, apples.profitMoney());
    });

    it('Should get how many packets can be made', () => {

        let apples = appleFactory();
        apples.setBoxPrice(100);
        apples.setAppleCount(50);
        apples.setPacketSize(15);
        apples.setProfit(4);

        assert.equal(3, apples.packet().toFixed());
    });

    it('Should get how much a packet will cost with profits', () => {

        let apples = appleFactory();
        apples.setBoxPrice(100);
        apples.setAppleCount(60);
        apples.setPacketSize(8);
        apples.setProfit(4);

        assert.equal(15, apples.finalPriceWithProfit());
    });

});

describe('Apple Packet Price Planner Field validations', () => {

    it('Should set the box price and get it back', () => {

        let apples = appleFactory();
        apples.setBoxPrice("six");

        assert.equal(80, apples.getBoxPrice());
    });

});
