class Text:
    def __init__(self, text, parent):
        self.text = text
        self.children = []
        self.parent = parent

class Element:
    def __init(self, tag, parent):
        self.tag = tag
        self.children = []
        self.parent = parent


class HTMLParser:
    def __init__(self, body):
        self.body = body
        self.unfinished = []