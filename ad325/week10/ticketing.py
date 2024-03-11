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


def generate(limit, count=1):
    if (count > limit):
        return
    now = datetime.datetime.now()
    new_ticket = Ticket(count, now.strftime("%H:%M:%S"))
    ticket_queue.put(new_ticket)
    count += 1
    # define the max numer of seconds you wish to wait here
    time.sleep(random.random()*3)
    generate(limit, count)


def process(count):
    if (count <= 0):
        return print("That's all folks!")

    front_ticket = ticket_queue.get()
    print("Ticket #", front_ticket.number, "at",
          front_ticket.timestamp, "with", ticket_queue.qsize(), "tickets left in queue.")
    count -= 1
    process(count)


def test_ticketing_system(number_of_tickets):

    generate(number_of_tickets)
    process(number_of_tickets)


test_ticketing_system(5)  # define the number of tickets you want to test here
