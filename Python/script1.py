import cv2
import matplotlib
import numpy as np
from matplotlib import pyplot as plt

imggambar= cv2.imread("itzy.jpeg",-1)

cv2.imshow('hasil',imggambar)
cv2.waitKey(0)
cv2.destroyAllWindows