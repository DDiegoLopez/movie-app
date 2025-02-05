

const MovieCard = ({ movie: 
    { poster_path, title, vote_average, release_date, original_language } 
}) => {
  return (
    <div className='movie-card'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png'} alt={title} />
      <div>
        <h3 className="text-white">{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="Star Icon" />
            <p className="text-white">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
            <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">{release_date ? release_date.slice(0, 4) : 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard