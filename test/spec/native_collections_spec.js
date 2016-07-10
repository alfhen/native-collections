describe('Collector', function(){

    beforeEach(function () {
        this.fruits = [
            {
                id: 1,
                name: 'apple',
                delicious: true,
                price: 1
            },
            {
                id: 2,
                name: 'banana',
                delicious: true,
                price: 3
            },
            {
                id: 3,
                name: 'kiwi',
                delicious: true,
                price: 2
            },
            {
                id: 4,
                name: 'rotten papaya',
                delicious: false,
                price: 0.5
            }
        ];
    });

    it('should calculate the average price of the fruits', function(){
        expect(this.fruits.avg('price'))
            .toBe(1.625);

        expect(this.fruits.avg(fruit => fruit.price))
            .toBe(1.625);

        expect(this.fruits.pluck('price').avg())
            .toBe(1.625);
    });

    it('should break the fruits into smaller chunks', function(){
        expect(this.fruits.chunk(2).count()).toBe(2);
        expect(this.fruits.chunk(2).first().last()).toEqual(this.fruits[1]);
        expect(this.fruits.chunk(2).last().first()).toEqual(this.fruits[2]);
    });

    it('Should collapse chunked fruits', function(){
        expect(this.fruits.chunk(2).collapse())
            .toEqual(this.fruits);
    });

    it('should count the number of fruits', function(){
        expect(this.fruits.count())
            .toBe(this.fruits.length);
    });

    it('should find the first fruit', function(){
        expect(this.fruits.first().name)
            .toBe('apple');

        expect(this.fruits.first(item => item.delicious).name)
            .toBe('apple');

        expect(this.fruits.first('delicious').name)
            .toBe('apple');
    });

    it('should find the difference between fruits', function(){

        var fruitsWithStrawberry = this.fruits.splice();
        fruitsWithStrawberry.push({
            id: 5,
            name: 'strawberry',
            delicious: true,
            price: 1
        });

        expect(fruitsWithStrawberry.diff(this.fruits).pluck('name'))
            .toContain('strawberry');
    });

    it('should pluck all fruit names', function(){
        expect(this.fruits.pluck('name'))
            .toContain('apple');
    });

    it('should return fruits with props except given values', function(){
        expect(this.fruits.except('price').first())
            .toEqual({
                id: 1,
                name: 'apple',
                delicious: true
            });

        expect(this.fruits.except(['price', 'id', 'delicious']).first())
            .toEqual({
                name: 'apple'
            });
    });

    it('should filter delicious fruits', function(){
        expect(this.fruits.filter(fruit => fruit.delicious).pluck('name'))
            .toContain('apple');
    });

    it('should reject delicious fruits', function(){
        expect(this.fruits.reject(fruit => fruit.delicious).pluck('name'))
            .toContain('rotten papaya');

        expect(this.fruits.reject('delicious').pluck('name'))
            .toContain('rotten papaya');
    });

    it('should reduce fruit price to a total cost', function(){
        expect(this.fruits.reduce((totalCost, fruit) => totalCost += fruit.price, 0))
            .toBe(6.5);
    });

    it('should sum fruit price to a total cost', function(){
        expect(this.fruits.sum('price'))
            .toBe(6.5);

        expect(this.fruits.sum(fruit => fruit.price))
            .toBe(6.5);

        expect(this.fruits.pluck('price').sum())
            .toBe(6.5);
    });

});

