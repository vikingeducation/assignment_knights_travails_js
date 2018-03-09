# # # # # # # nola street cat mafia # # # # # #
#                         alex
#                   /               \
#                 thor              loki
#              /   |   \          /      \
#         violet  tpk  warba  georgina   henry
#          /       |                    /     \
#      zorro     noche                 jojo  lulu
#      /  \      /   \                 /        \
# ciro  iliah  ruben miko            oscar      gracie
#         |          /  \                         |
# woodlandcritter lara  mara                     kenga


# Search the tree using BFS and DFS


require 'pry'

class Node
  attr_accessor :name, :human, :posse
  def initialize(name, human, posse = [])
    @name = name
    @human = human
    @posse = posse
  end
end

lara = Node.new('lara', 'sabina')
mara = Node.new('mara', 'sabina')
kenga = Node.new('kenga', 'pete')
woodlandcritter = Node.new('woodlandcritter', 'mike')

ciro = Node.new('ciro', 'milan')
iliah = Node.new('iliah', 'courtney', [woodlandcritter])
ruben = Node.new('ruben', 'casey')
miko = Node.new('miko', 'sabina', [lara, mara])
oscar = Node.new('oscar', 'tom')
gracie = Node.new('gracie', 'michael', [kenga])

zorro = Node.new('zorro', 'annie', [ciro, iliah])
noche = Node.new('noche', 'sabina', [ruben, miko])
jojo = Node.new('jojo', 'julia', [oscar])
lulu = Node.new('lulu', 'sarah', [gracie])

violet = Node.new('violet', 'general pershing', [zorro])
tpk = Node.new('tpk', 'general pershing', [noche])
warba = Node.new('warba', 'general pershing')
georgina = Node.new('georgina', 'dunno')
henry = Node.new('henry', 'julia', [jojo, lulu])

thor = Node.new('thor', 'shirley', [violet, tpk, warba])
loki = Node.new('loki', 'shirley', [georgina, henry])
alex = Node.new('alex', 'nancy lee', [thor, loki])




def find_human(search_type, head_node, search_input)
  puts "Searching for #{search_input}'s human..."
  queue = []
  current_node = head_node
  step_counter = 0
  until search_input == current_node.name
    puts "checking node: #{current_node.name}"
    if current_node.posse.any?
      current_node.posse.each do |child|
        puts "  queueing #{child.name}"
        queue << child
      end
    end
    search_type == 'bfs' ? current_node = queue.shift : current_node = queue.pop
    step_counter += 1
  end
  p "#{step_counter} #{search_type} Steps: #{search_input}'s human is #{current_node.human}"
end

find_human('dfs', alex, 'woodlandcritter')
find_human('bfs', alex, 'woodlandcritter')

