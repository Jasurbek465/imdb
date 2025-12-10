import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthor } from '../api';

export const ActorPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const res = await getAuthor(id);
        setActor(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActorDetails();
  }, [id]);

  return (
    <div className="actor-page__tailwind">
      ActorPage
      {actor && (
        <div key={item.id}>
          <h1>{actor.name}</h1>
          <p>{item.birthDate}</p>
          <p>{item.birthLocation}</p>
          <img src={actor.primaryImage} alt="" />
        </div>
      )}
    </div>
  );
};
