import loadFromLocal from './loadFromLocal'

describe('loadFromLocal', () => {
  it('should get data from local storage Diaries', () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(() => '"Toller Tag"')

    const actual = loadFromLocal()

    expect(actual).toEqual('Toller Tag')
  })
  it('should get data from local storage Tasks', () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(() => '"Hallo"')

    const actual = loadFromLocal()

    expect(actual).toEqual('Hallo')
  })
})
