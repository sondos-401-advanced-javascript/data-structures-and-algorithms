'use strict';

const multi = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi Function',()=>{
  it('To Be Truth',()=>{
    expect(multi('{}')).toBeTruthy();
    expect(multi('{}(){}')).toBeTruthy();
    expect(multi('()[[Extra Characters]]')).toBeTruthy();
    expect(multi('(){}[[]]')).toBeTruthy();
    expect(multi('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('To Be False',()=>{
    expect(multi('[({}]')).toBeFalsy();
    expect(multi('(](')).toBeFalsy();
    expect(multi('{(})')).toBeFalsy();
  });
});