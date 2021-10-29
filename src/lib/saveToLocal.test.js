import saveToLocal from './saveToLocal'

describe('saveToLocal', () => {
  it('should save data to local storage Diaries', () => {
    const spyLocalStorage = jest.spyOn(
      Object.getPrototypeOf(window.localStorage),
      'setItem'
    )
    saveToLocal('date:', '19.10.2021')
    saveToLocal('headline:', 'Toller Tag')
    saveToLocal('id:', '4')
    saveToLocal('mood:', 'sehr gut')
    saveToLocal('text:', 'Dies ist mein erster Tagebucheintrag')

    expect(spyLocalStorage).toHaveBeenCalledTimes(5)
    expect(spyLocalStorage).toHaveBeenCalledWith('date:', '"19.10.2021"')
    expect(spyLocalStorage).toHaveBeenCalledWith('headline:', '"Toller Tag"')
    expect(spyLocalStorage).toHaveBeenCalledWith('id:', '"4"')
    expect(spyLocalStorage).toHaveBeenCalledWith('mood:', '"sehr gut"')
    expect(spyLocalStorage).toHaveBeenCalledWith(
      'text:',
      '"Dies ist mein erster Tagebucheintrag"'
    )
  })

  it('should save data to local storage Tasks', () => {
    const spyLocalStorage = jest.spyOn(
      Object.getPrototypeOf(window.localStorage),
      'setItem'
    )
    saveToLocal('todo:', 'Hallo')

    expect(spyLocalStorage).toHaveBeenCalledTimes(1)
    expect(spyLocalStorage).toHaveBeenCalledWith('todo:', '"Hallo"')
  })
})
