# see image:
# graph_social_network.jpg
# or
# https://s3.amazonaws.com/viking_education/web_development/web_app_eng/graph_social_network.jpg

# TASK:
# Count the steps to get from Hissy friend to Hidey (or other relationships)

require 'pry'

class Node
  attr_accessor :name, :friends
  def initialize(name, friends = [])
    @name = name
    @friends = friends
  end
end

hissy = Node.new('hissy')
paws = Node.new('paws')
eyes = Node.new('eyes')
mooneye = Node.new('mooneye')
inbread = Node.new('inbread')
awws = Node.new('awws')
hidey = Node.new('hidey')

hissy.friends = [paws]
paws.friends = [hissy, eyes, mooneye]
eyes.friends = [paws, mooneye, awws, inbread]
mooneye.friends = [eyes, paws]
awws.friends = [hidey, eyes]
inbread.friends = [eyes, hidey]
hidey.friends = [inbread, awws]

def steps_to_bacon(starting_node, ending_node)
  checked_nodes =[]
  queue = []
  queue << starting_node
  current_node = queue.shift
  step_counter = 0

  until current_node.name == ending_node.name
    # something
      p current_node.name
      checked_nodes << current_node.name
      queue += current_node.friends
      step_counter += 1
      current_node = queue.shift
      current_node = queue.shift if checked_nodes.include?(current_node.name)
  end
  p "#{step_counter} steps to #{current_node.name}"
end

steps_to_bacon(hissy, hidey)
