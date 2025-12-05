import { Malumotlar } from './Malumotlar';

export const Rating = () => {
  return (
    <div className="rating">
      <Malumotlar malumot={'User reviews'} />

      <div className="rating-box">
        <div className="rating-score">
          <div className="rating-star">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-star"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
          </div>
          <span className="rating-number">8.3</span>
        </div>

        <h2 className="rating-title">Summary</h2>

        <p className="rating-text">
          Reviewers say 'Oppenheimer' by Christopher Nolan is a complex biopic
          delving into J. Robert Oppenheimer's role in atomic bomb development.
          Themes of moral dilemmas, scientific responsibility, and nuclear
          impact are prominent. Cillian Murphy's performance, technical aspects,
          and historical accuracy receive praise. However, some find the pacing
          slow, narrative disjointed, and runtime excessive. Critics also note a
          lack of emotional depth and underdeveloped characters. Despite these
          issues, Nolan's direction, visual style, and thought-provoking nature
          are widely appreciated.
        </p>

        <span className="rating-note">
          AI-generated from the text of user reviews
        </span>
      </div>
    </div>
  );
};
