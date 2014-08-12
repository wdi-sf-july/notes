require "./phone_validator"

describe "phone_validator" do

  it "should validate a seven digit number with a dash" do
    expect(phone_validator("123-4567")).to be(true)
  end

  it "should validate a 10 digit number with a area code in parens" do
    expect(phone_validator("(123) 123-4567")).to be(true)
  end
end