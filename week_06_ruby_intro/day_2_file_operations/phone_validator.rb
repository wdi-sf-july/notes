# phone_validator.rb

def phone_validator(str)
  matches = str.match(/\A\(\d{3}\)\s|\-{0,1}{0,1}\d{3}-\d{4}\z/)
  matches.length == 1
end