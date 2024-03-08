import unittest
import queue
import datetime
import time
import random


class Ticket():
    def __init__(self, number, timestamp):
        self.number = number
        self.timestamp = timestamp


ticket_queue = queue.Queue()
wait = random.random()*3


def generate(count):
    if (count <= 0):
        return
    now = datetime.datetime.now()

    new_ticket = Ticket(count, now.strftime("%H:%M:%S"))
    ticket_queue.put(new_ticket)
    count -= 1
    generate(count)


def process(count):
    if (count <= 0):
        return print("That's all folks!")

    front_ticket = ticket_queue.get()
    print("Ticket #", front_ticket.number, "at",
          front_ticket.timestamp, "with", ticket_queue.qsize(), "tickets left in queue.")
    count -= 1
    process(count)


generate(1)
process(1)


""" class test_ticket_system(unittest.TestCase):
    def test1(self):
        while True:
            print(time.time())
            time.sleep(0.01)

        


if __name__ == '__main__':
    unittest.main() """
