import streamlit as st  # Import library streamlit
import pandas as pd  # Import library pandas
import numpy as np  # Import library numpy
import matplotlib.pyplot as plt  # Import library matplotlib
import altair as alt  # Import library altair

data = pd.DataFrame(  # Membuat dataframe data dengan 100 baris dan 3 kolom
    np.random.randn(100, 3),
    columns=['a', 'b', 'c']
)

chart = alt.Chart(data).mark_circle().encode(  # Membuat chart dengan menggunakan library altair
    x='a', y='b', tooltip=['a', 'b']
)

city = pd.DataFrame({  # Membuat dataframe city dengan kolom 'awesome cities', 'lat', dan 'lon'
    'awesome cities': ['Chicago', 'Minneapolis', 'Louisville', 'Topeka'],
    'lat': [41.868171, 44.979840, 38.257972, 39.030575],
    'lon': [-87.667458, -93.272474, -85.765187, -95.702548]
})

st.map(city)  # Menampilkan peta dengan menggunakan fungsi map()

st.graphviz_chart("""  # Menampilkan grafik dengan menggunakan fungsi graphviz_chart()
digraph{
watch -> like
like -> share
share -> subscribe
share -> watch

}

""")

st.altair_chart(chart, use_container_width=True)  # Menampilkan chart dengan menggunakan fungsi altair_chart()

plt.scatter(data['a'], data['b'])  # Membuat scatter plot dengan menggunakan library matplotlib
plt.title("scatter")  # Memberikan judul pada scatter plot
st.pyplot()  # Menampilkan scatter plot dengan menggunakan fungsi pyplot()

st.line_chart(data)  # Menampilkan line chart dengan menggunakan fungsi line_chart()

st.area_chart(data)  # Menampilkan area chart dengan menggunakan fungsi area_chart()

st.bar_chart(data)  # Menampilkan bar chart dengan menggunakan fungsi bar_chart()

st.image("sal.jpg")  # Menampilkan gambar dengan menggunakan fungsi image()

st.audio("demo.wav")  # Menampilkan audio dengan menggunakan fungsi audio()

st.video("https://www.youtube.com/watch?v=9a1NDDcDQ7c")  # Menampilkan video dengan menggunakan fungsi video()
