import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const getWatchedMovies = () => {
	const movies = localStorage.getItem('movies-watched');

	if (!movies) {
		return [];
	} else {
		return JSON.parse(movies);
	}
}

export const getAllMovies = () => {
	const movies = localStorage.getItem('movies-all');

	if (!movies) {
		return [
		{
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!'
		},
		{
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!'
		},
		{
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!'
		},
		];
	} else {
		return JSON.parse(movies);
	}
}

export const add = (title, description, image) => {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getAllMovies();
	movies.push(movie);

	localStorage.setItem('movies-all', JSON.stringify(movies));

	render();
}

export const addWatchedMovie = (title, description, image) => {
	const movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	const movies = getWatchedMovies();
	movies.push(movie);

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

export const removeWatchedMovie = (title) => {
	const movies = getWatchedMovies();

	for (let i = 0; i < movies.length; i++) {
	   if (!movies[i]) continue;
		if (movies[i].title == title) {
			movies[i] = null
		}
	}

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

const render = () => {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
