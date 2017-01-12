// basically copied from FB's fake data generator.

import faker from 'Faker';

class FakeObjectDataStore {
  constructor(size) {
    this.size = size || 2000;
    this._cache = [];
  }

  createFakeRowObjectData(index) {
    return {
      id: index,
      // avatar: faker.image.avatar(),
      city: faker.address.city(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this._cache[index] === undefined) {
      this._cache[index] = this.createFakeRowObjectData(index);
    }
    return this._cache[index];
  }
  getAll() {
    if (this._cache.length < this.size) {
      for (var i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this._cache.slice();
  }

  getSize() {
    return this.size;
  }
}

module.exports = FakeObjectDataStore;
