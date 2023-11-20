import streamlit as st  # Import library streamlit
import pandas as pd  # Import library pandas
import numpy as np  # Import library numpy

# Membuat list a
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Membuat array n dari list a
n = np.array(a)

# Mengubah bentuk array n menjadi matriks 2x5
nd = n.reshape((2,5))

# Membuat dictionary dic
dic = {
    "name" : ["edelyn", "adnisa"],
    "languange" : ["chinchong, indonesia"],
    "city" : ["madura", "surabaya"]
}

# Membaca file csv "Salary_Data.csv" dan menyimpannya dalam variabel data
data = pd.read_csv("Salary_Data.csv")

# Menampilkan dataframe a
st.dataframe(a)

# Menampilkan dataframe n
st.dataframe(n)

# Menampilkan dataframe nd
st.dataframe(nd)

# Menampilkan json dic
st.json(dic)

# Menampilkan tulisan dic
st.write(dic)

# Menampilkan tabel data
st.table(data)
