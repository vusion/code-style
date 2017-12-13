describe('unit', () => {
    it('should be friendly', () => {
        const foo = 123;
        // this
        expect(foo).to.be.true;
        foo.should.be.true;
    });
});
