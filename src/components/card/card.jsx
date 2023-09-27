const Card = ({card}) => {
    const {cover, title, cate, bg, color, over} = card;
    return (
        <div className={`card card-compact bg-[${bg}]`}>
            <figure><img className="w-full" src={cover} alt="Card Image" /></figure>
            <div className={`card-body text-[${color}]`}>
                <div><span className={`bg-[${over}] py-1 px-3 rounded font-medium`}>{cate}</span></div>
                <h2 className="card-title">{title}</h2>
            </div>
      </div>
    );
};

export default Card;