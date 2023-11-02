#!/usr/bin/python3

# usage: to_pdf.py [-h] [-o OUTPUT] filename

# Converts an image to a PDF.

# positional arguments:
#   filename              Relative path to the image to convert to a PDF.

# options:
#   -h, --help            show this help message and exit
#   -o OUTPUT, --output OUTPUT
#                         Relative path to the outputted PDF file.

import argparse
import os
import PIL.Image


def r(*path):
    """
    Takes a relative path from the directory of this python file and returns the absolute path.
    """
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), *path)


def run_in_dir(directory, callable):
    cwd = os.getcwd()
    os.chdir(directory)
    result = callable()
    os.chdir(cwd)
    return result


if __name__ == "__main__":
    argument_parser = argparse.ArgumentParser(description="Converts an image to a PDF.")
    argument_parser.add_argument(
        "filename", type=str, help="Relative path to the image to convert to a PDF."
    )
    argument_parser.add_argument(
        "-o", "--output", type=str, help="Relative path to the outputted PDF file."
    )
    args = argument_parser.parse_args()

    image_file = args.filename
    output_file = args.output or os.path.splitext(image_file)[0] + ".pdf"
    with PIL.Image.open(image_file) as image:
        image = image.convert("RGB")
        image.save(output_file, "PDF")
