const users = require('./users');


// write some tests
describe('users', () => {
  test('findUser', () => {
      return users.findUser(1).then(data => data.id === 1);
  });

  test('deleteUser', () => {
      return users.deleteUser(1).then(id => id === 1);
  })

  test('findUser1', () => {
    return users.findUser(1).catch(e => 
        expect(e).toEqual(new Error('No user with id 1')),
    );
  });


  test('findUser2', () => {
    expect.assertions(1);
    return users.findUser(21).catch(e => 
        expect(e).toEqual(new Error('No user with id 21')),
    );
  });


  test('deleteUser1', () => {
    return users.deleteUser(21).catch(e => 
        expect(e).toEqual(new Error('No user with id 21')),
    );
  });


})
