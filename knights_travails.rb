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
  def initialize(x, y, children = [], parent)
    @x = x
    @y = y
    @children = children
    @parent = parent
  end
end

class MoveTree
  def initialize(starting_position, max_depth = 1)
    @starting_position = starting_position
    @max_depth = max_depth
    @board_size = 5
    @move_counter = 1
    build_tree
  end

  def build_tree
    root_move = Move.new(@starting_position[0], @starting_position[1], 0, nil)
    checked_positions = []
    queue = []
    queue << root_move

    while queue != []
      position = queue.pop
      unless checked_positions.include?([position.x, position.y])
        position.children = generate_children(position)
        queue += position.children
        checked_positions << [position.x, position.y]
      end
    end
    p @move_counter
  end

  private

  def generate_children(position)
    valid_moves = []
    potential_moves = [
      Move.new( (position.x + 2), (position.y + 1), children = [], position),
      Move.new( (position.x - 2), (position.y + 1), children = [], position),
      Move.new( (position.x + 2), (position.y - 1), children = [], position),
      Move.new( (position.x - 2), (position.y - 1), children = [], position),

      Move.new( (position.x + 1), (position.y + 2), children = [], position),
      Move.new( (position.x - 1), (position.y + 2), children = [], position),
      Move.new( (position.x + 1), (position.y - 2), children = [], position),
      Move.new( (position.x - 1), (position.y - 2), children = [], position)
    ]

    puts "\n parent [#{position.x},#{position.y}]:"
    potential_moves.each do |move|
      valid_range = (0..(@board_size -1)).to_a
      if valid_range.include?(move.x) && valid_range.include?(move.y)
        valid_moves << move
        @move_counter += 1
        puts "  child [#{move.x},#{move.y}]"
      end
    end
    valid_moves
  end
end #MoveTree



tree = MoveTree.new([2, 2], 1)
