import matplotlib.pyplot as plt
import numpy as np


def mandelbrot(c, max_iter):
    z = 0
    n = 0
    while abs(z) <= 2 and n < max_iter:
        z = z*z + c
        n += 1
    return n


def generate_mandelbrot(width, height, x_min, x_max, y_min, y_max, max_iter):
    image = np.zeros((height, width))

    for x in range(width):
        for y in range(height):
            real = x_min + (x / width) * (x_max - x_min)
            imag = y_min + (y / height) * (y_max - y_min)
            c = complex(real, imag)
            color = mandelbrot(c, max_iter)
            image[y, x] = color

    return image


def plot_mandelbrot(image):
    plt.imshow(image, cmap='viridis', extent=(-2, 2, -2, 2))
    plt.colorbar()
    plt.title('Mandelbrot Set')
    plt.show()


# Set parameters
width = 800
height = 800
x_min, x_max = -2, 2
y_min, y_max = -2, 2
max_iter = 100

# Generate and plot Mandelbrot set
mandelbrot_image = generate_mandelbrot(
    width, height, x_min, x_max, y_min, y_max, max_iter)
plot_mandelbrot(mandelbrot_image)
