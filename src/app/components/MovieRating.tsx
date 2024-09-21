type RatingBorderColor = {
  [key: string]: string;
}

export const borderColor: RatingBorderColor = {
  'pg': 'border-green-500',
  'pg-13': 'border-yellow-500',
  'r': 'border-red-500',
  'nc-17': 'border-purple-500',
}

export const MovieRating = ({ rating }: { rating: string }) => {
  const ratingBorderColor = borderColor[rating] || 'border-gray-500';

  return (
    <span className={`text-xsm border-1 border px-2 uppercase ${ratingBorderColor}`}>
      {rating}
    </span>
  )
}
