from distutils.log import debug
import pickle
import requests
import json
from flask import Flask 

app = Flask(__name__)





def recommend(anime):
    index = animes[animes['title'] == anime].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_anime_names = []
   
    for i in distances[1:6]:

        recommended_anime_names.append(animes.iloc[i[0]].title)

    return recommended_anime_names


animes = pickle.load(open('model/anime_list.pkl','rb'))
similarity = pickle.load(open('model/similarity.pkl','rb'))
anime_list = animes['title'].values


@app.route('/api')
def index():
    return {
        'name': 'hello world'
    }

if __name__ == "__main__":
    app.run(debug=True)