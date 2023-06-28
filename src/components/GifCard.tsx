import { GifBasicInfo } from "../interface/GifAppInterface";

const GifCard = ({ gif: { id, title, url } }: { gif: GifBasicInfo }) => {
  return (
    <div className="container" key={id}>
      <h3 className="title">{title}</h3>
      <img src={url} alt={title} className="image" />
    </div>
  );
};

export default GifCard;
