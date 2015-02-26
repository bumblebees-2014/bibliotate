class Car
  attr_reader :headlights, :gear

  def start_car(options = {})
    @headlights = options.fetch(:headlights) {true}
    @gear       = options[:gear] || 1
  end
end

herbie = Car.new

# When we start the car, the headlights should be on by default:

p herbie.start_car
p herbie.headlights # => true

# But what happens when we want to start without headlights?
p herbie.start_car(headlights: false)
p herbie.headlights # => true  WAT?!

# ^^ fixed with fetch method