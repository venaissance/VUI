import combineClassNames from '../combineClassNames'

describe('combineClassNames', () => {
  it('接受 1 个 className', () => {
    const result = combineClassNames('a')
    expect(result).toEqual('a')
  })
  it('接受 2 个 className', () => {
    const result = combineClassNames('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受 undefined 结果不会出现 undefined', () => {
    const result = combineClassNames('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受各种奇怪值', () => {
    const result = combineClassNames(
      'a', undefined, '中文', false, null
    )
    expect(result).toEqual('a 中文')
  })
  it('接受 0 个参数', () => {
    const result = combineClassNames()
    expect(result).toEqual('')
  })
})