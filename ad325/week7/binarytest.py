class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def preorder(node):
    result = []
    
    if node:
        result.append(node.value)
        result += preorder(node.left)
        result += preorder(node.right)
        
    return result

# Example usage:
# Create a sample binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

# Call the preorder function and print the result
result = preorder(root)
