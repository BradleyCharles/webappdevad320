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
        add_operation = TextOperation("add", character)
        self.operations.append(add_operation)
        self.test_str += character

    def delete(self):
        delete_operation = TextOperation("delete", self.operations[-1])
        self.operations.append(delete_operation)
        self.test_str = slice(0, len(self.test_str))

    def undo(self):
        top = self.operations.pop(-1)
        if top.type == 'add':
            self.test_str = slice(0, len(self.test_str))
        elif top.type == 'delete':
            self.test_str += top.character


class TestUndo(unittest.TestCase):
    def test1(self):
        undo = Undo()
        undo.add('a')
        print(undo.operations[-1].type)
        undo.add('b')
        undo.add('c')
        undo.add('d')
        print(undo.test_str)


if __name__ == '__main__':
    unittest.main()
