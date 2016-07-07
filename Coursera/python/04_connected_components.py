import sys
from os import path

def readData(file_path):
    file_path = path.relpath(file_path)
    with open(file_path, 'r') as f:
        for l in f.readlines():
            print "%s" % l
    return []

def main():
    file_path = sys.argv[1]
    data = readData(file_path)

if __name__ == "__main__":
    main()