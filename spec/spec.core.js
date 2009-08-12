
describe 'YourLib'
  describe '.someMethod()'
    it 'should do something'
      $(function() {
        $('body').prepend(fixture('table'))
        $('table').floatHeaders()
      })
    end
  end
end