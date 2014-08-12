# require the file for testing
require "./str_reverse"

describe "str_reverse" do 

  it "should reverse an odd string" do
    myString = "hello"
    expect(str_reverse(myString)).to eql("olleh")
  end

  it "should reverse an even string" do
    myString = "hellos"
    expect(str_reverse(myString)).to eql("solleh")
  end

end