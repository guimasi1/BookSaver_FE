const ReviewItem = ({ review }) => {
  const stars = Array.from({ length: review.rating }, () => "star");
  return (
    <div className="flex justify-between mb-4">
      <div className="flex flex-col">
        <div className="text-sm">{review.author}</div>
        <div>{review.content}</div>
      </div>
      <div className="flex">
        {stars?.map((_, index) => (
          <span key={index} className="material-symbols-rounded">
            star
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
