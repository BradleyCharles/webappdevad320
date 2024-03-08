class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def append(self, data):
        self.root = self._append(self.root, data)

    def _append(self, root, data):
        if root is None:
            return Node(data)

        if data < root.data:
            root.left = self._append(root.left, data)
        elif data > root.data:
            root.right = self._append(root.right, data)
        return root

    def inorder_traversal(self, root):
        result = []
        if root:
            result = self.inorder_traversal(root.left)
            result.append(root.data)
            result += self.inorder_traversal(root.right)
        return result

    def preorder(self, root):
        result = []

        if root:
            result.append(root.data)
            result += self.preorder(root.left)
            result += self.preorder(root.right)
        return result

    def append_array(self, arr):
        for data in arr:
            self.append(data)

    def max_depth(self, root, count=0):
        result = []
        if root:
            count += 1
            result = self.max_depth(root.left, count)
            result.append(count)
            result += self.max_depth(root.right, count)
            result.append(count)
        return result


# Example usage:
tree = BinaryTree()
tree.append_array([5, 4, 3, 2, 1, 6, 7])
# tree.append_array([8, 9, 0])


# print("Inorder Traversal:", tree.inorder_traversal(tree.root))
# print("Preorder Traversal:", tree.preorder(tree.root))
print("Max Depth:", tree.max_depth(tree))
