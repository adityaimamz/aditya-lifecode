import cv2
import numpy as np
from matplotlib import pyplot as plt

imggambar= cv2.imread("itzy.jpeg",-1)

imgmedian = cv2.medianBlur(imggambar,9)

# Menampilkan gambar asli
cv2.imshow('Gambar Asli',imggambar)

# Menampilkan gambar hasil blur
cv2.imshow('Hasil Blur',imgmedian)

cv2.waitKey(0)
cv2.destroyAllWindows()