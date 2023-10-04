import cv2
import numpy as np
from matplotlib import pyplot as plt

# imggambar= cv2.imread("a_rohto2.jpg",0)
imggambar= cv2.imread("itzy.jpg",1)
# imggambar= cv2.imread("a_rohto2.jpg",-1)

cv2.imshow('hasil',imggambar)
cv2.waitKey(0)
cv2.destroyAllWindows