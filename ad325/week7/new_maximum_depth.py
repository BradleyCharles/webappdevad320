"""     
State Name

recite the problem 

Ask questions:
Do we need to calculate the depth of each leaf in the future?

Do we need to count the number of leafs in the future?




explain your code

if root 
    recursive(left, count + 1)
    append(count)
    
    recursive(right, count +1)
    append(count)


type code

discuss complexity
Time O(n)
Space O(n)

run code and test cases
"""


import unittest


class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def max_depth(self, root, count=1):
        result = []
        if root:
            result = self.max_depth(root.left, count + 1)
            result.append(count)
            result += self.max_depth(root.right, count + 1)
            result.append(count)
        return result


tree_3 = TreeNode('1')

tree_1 = TreeNode('1')
tree_1.left = TreeNode('1')
tree_1.left.left = TreeNode('1')
tree_1.left.left.left = TreeNode('1')
tree_1.left.left.left.left = TreeNode('1')

tree_2 = TreeNode('1')
tree_2.right = TreeNode('1')
tree_2.right.right = TreeNode('1')
tree_2.right.right.right = TreeNode('1')


tree_4 = TreeNode('1')
tree_4.left = TreeNode('1')
tree_4.right = TreeNode('1')
tree_4.left.left = TreeNode('1')
tree_4.left.right = TreeNode('1')
tree_4.right.left = TreeNode('1')
tree_4.right.right = TreeNode('1')


class testMaxDepth(unittest.TestCase):

    def test1(self):
        self.assertEqual(max(tree_1.max_depth(tree_1)), 4)

    def test2(self):
        self.assertEqual(max(tree_2.max_depth(tree_2)), 4)

    def test3(self):
        self.assertEqual(max(tree_3.max_depth(tree_3)), 1)

    def test4(self):
        self.assertEqual(max(tree_4.max_depth(tree_4)), 3)


if __name__ == '__main__':
    unittest.main()
