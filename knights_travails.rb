# BOARD
# ----------------------------
# 0,0 | 0,1 | 0,2 | 0,3 | 0,4
# ----|-----|-----|-----|-----
# 1,0 | 1,1 | 1,2 | 1,3 | 1,4
# ----|-----|-----|-----|-----
# 2,0 | 2,1 | 2,2 | 2,3 | 2,4
# ----|-----|-----|-----|-----
# 3,0 | 3,1 | 3,3 | 3,3 | 3,4
# ----|-----|-----|-----|-----
# 4,0 | 4,1 | 4,4 | 4,3 | 4,4
# ----------------------------


require 'pry'

class Move
  attr_accessor :children, :parent
  attr_reader :x, :y
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
    @board_size = 5
    @queue = []
    @move_counter = 1
    build_tree
  end

  def build_tree
    root_move = Move.new(@starting_position[0], @starting_position[1], 0, nil)
    checked_positions = []
    @queue << root_move

    while @queue != []
      position = @queue.pop
      unless checked_positions.include?([position.x, position.y])
        generate_children(position)
        checked_positions << [position.x, position.y]
      end
    end
    p @move_counter
  end

  private

  def generate_children(position)
    valid_moves = []
    potential_children = [
      Move.new( (position.x + 2), (position.y + 1), 0, children = [], position),
      Move.new( (position.x - 2), (position.y + 1), 0, children = [], position),
      Move.new( (position.x + 2), (position.y - 1), 0, children = [], position),
      Move.new( (position.x - 2), (position.y - 1), 0, children = [], position),

      Move.new( (position.x + 1), (position.y + 2), 0, children = [], position),
      Move.new( (position.x - 1), (position.y + 2), 0, children = [], position),
      Move.new( (position.x + 1), (position.y - 2), 0, children = [], position),
      Move.new( (position.x - 1), (position.y - 2), 0, children = [], position)
    ]

    puts "\n parent [#{position.x},#{position.y}]:"
    potential_children.each do |move|
      valid_range = (0..4).to_a
      if valid_range.include?(move.x) && valid_range.include?(move.y)
        valid_moves << move
        @queue << move
        @move_counter += 1
        puts "  child [#{move.x},#{move.y}]"
      end
    end
    position.children = valid_moves
  end
end #MoveTree



tree = MoveTree.new([2, 2], 1)
