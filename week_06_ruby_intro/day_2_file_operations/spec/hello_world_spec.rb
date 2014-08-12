require "./hello_world.rb"

describe "Hello World" do
  
  it "should say say hello world" do
    expect(greeting).to eql( "hello world")
  end

end