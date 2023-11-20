import streamlit as st  # Mengimpor library streamlit
import pandas as pd  # Mengimpor library pandas
from matplotlib import pyplot as plt  # Mengimpor library matplotlib
import time  # Mengimpor library time

plt.style.use("ggplot")  # Mengatur gaya plot menjadi "ggplot"

data = {  # Membuat dictionary yang berisi data
    "num": [x for x in range(1, 11)],
    "square": [x ** 2 for x in range(1, 11)],
    "twice": [x * 2 for x in range(1, 11)],
    "thrice": [x * 3 for x in range(1, 11)]
}

rad = st.sidebar.radio("Navigation", ["Home", "About Us"])  # Membuat radio button untuk navigasi

if rad == "Home":  # Jika navigasi yang dipilih adalah "Home"
    df = pd.DataFrame(data=data)  # Membuat DataFrame dari data

    col = st.sidebar.multiselect("Select a Column", df.columns)  # Membuat dropdown multiselect untuk pemilihan kolom

    plt.plot(df["num"], df[col])  # Plot kolom yang dipilih terhadap kolom "num"

    st.pyplot()  # Menampilkan plot

if rad == "About Us":  # Jika navigasi yang dipilih adalah "About Us"

    progress = st.progress(0)  # Membuat progress bar dengan nilai awal 0
    for i in range(100):  # Melakukan iterasi dari 0 hingga 99
        time.sleep(0.1)  # Jeda selama 0.1 detik
        progress.progress(i + 1)  # Memperbarui progress bar

    st.balloons()  # Menampilkan animasi balon

    st.error("Error")  # Menampilkan pesan error
    st.success("Show Success")  # Menampilkan pesan sukses
    st.info("Information")  # Menampilkan pesan informasi
    st.exception(RuntimeError("this is an error"))  # Menampilkan pesan exception
    st.warning("this is a warning")  # Menampilkan pesan peringatan



