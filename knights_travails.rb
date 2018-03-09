# board = [
#   [['A1'], ['B1'], ['C1'] ], [], [], [], []

# ]

# [[]]


class Move
  attr_accessor :children, :parent
  def initialize(x, y, depth, children = [], parent)
    @x = x
    @y = y
    @depth = depth
    @children = children
    @parent = parent
  end
end

class MoveTree
  def initialize(starting_position, max_depth = 1)
    @starting_position = starting_position
    @max_depth = max_depth
  end
end


