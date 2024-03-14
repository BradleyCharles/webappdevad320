import unittest


class TextOperation:
    def __init__(self, type, character) -> None:
        self.type = type
        self.character = character


class Undo:
    def __init__(self) -> None:
        self.operations = []
        self.test_str = ''

    def add(self, character):
        add_operation = TextOperation('add', character)
        self.operations.append(add_operation)
        self.test_str += character

    def delete(self):
        if self.operations:
            delete_operation = TextOperation('delete', self.test_str[-1])
            self.operations.append(delete_operation)
            self.test_str = self.test_str[:-1]

    def undo(self):
        if self.operations:
            top = self.operations.pop(-1)
            if top.type == 'add':
                self.test_str = self.test_str[:-1]
            elif top.type == 'delete':
                self.test_str += top.character


class TestUndo(unittest.TestCase):
    def test1(self):
        test1 = Undo()
        test1.add('a')
        self.assertEqual(test1.operations[-1].type, 'add')
        test1.add('b')
        test1.add('c')
        test1.add('d')
        self.assertEqual(test1.test_str, 'abcd')
        self.assertEqual(test1.operations[-1].character, 'd')
        test1.delete()
        self.assertEqual(test1.operations[-1].type, 'delete')
        self.assertEqual(test1.test_str, 'abc')
        test1.undo()
        self.assertEqual(test1.operations[-1].type, 'add')
        self.assertEqual(test1.test_str, 'abcd')


if __name__ == '__main__':
    unittest.main()
