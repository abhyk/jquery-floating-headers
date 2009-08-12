
describe '$.floatingHeaders'
  it 'should work'
    $(function() {
      $('body').prepend(fixture('table'))
      $('table').floatHeaders()
    })
  end
end