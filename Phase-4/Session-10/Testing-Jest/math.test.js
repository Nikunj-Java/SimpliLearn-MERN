
const {add,multiply}=require('./math');

test('adds 2 + 3 to equals 5',()=>{
    expect(add(2,3)).toBe(5);
});

test('adds 5 x 4 to equals 20',()=>{
    expect(multiply(5,4)).toBe(20);
});